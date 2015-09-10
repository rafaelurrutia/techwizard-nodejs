


module.exports = function(app) {

var User = require('../models/user.js');
var async  =  require("async");
var group = require ('../models/group.js');

function encriptar(user, pass) {
   var crypto = require('crypto')
   // usamos el metodo CreateHmac y le pasamos el parametro user y actualizamos el hash con la password
   var hmac = crypto.createHmac('sha1', user).update(pass).digest('hex')
  
   return hmac
};

sumaFecha = function(d, fecha)
{
 var Fecha = new Date();
 var sFecha = fecha || (Fecha.getDate() + "/" + (Fecha.getMonth() +1) + "/" + Fecha.getFullYear());
 var sep = sFecha.indexOf('/') != -1 ? '/' : '-'; 
 var aFecha = sFecha.split(sep);
 var fecha = aFecha[2]+'/'+aFecha[1]+'/'+aFecha[0];
 fecha= new Date(fecha);
 fecha.setDate(fecha.getDate()+parseInt(d));
 var anno=fecha.getFullYear();
 var mes= fecha.getMonth()+1;
 var dia= fecha.getDate();
 mes = (mes < 10) ? ("0" + mes) : mes;
 dia = (dia < 10) ? ("0" + dia) : dia;
 var fechaFinal = dia+sep+mes+sep+anno;
 return (fechaFinal);
 }

var fecha = sumaFecha(8,'');
console.log(fecha);

userLogin =  function (req, res){

 var username = req.body.username;
 var password = req.body.password;


 var passEncriptada = encriptar(username,password)

User.findOne({"username":username},function (err, user){
    if(user){
    //comprabamos si la contraseña encriptada es igual a la contraseña encriptada anteriormente
        if ((user.password === passEncriptada)&&(user.active=="true")){

          group.findOne({"name": user.group , "activo" : "true"},function(err, groups){
           if (!err){
              //console.log(group);
             console.log('login success!!!');
             
             if (groups == null) {
              var response = {
                status : "false",
                code : "402",
                err : "Group Inactive"
                
              }
              res.send(response);
             }else{


              var response = {
                status : "true",
                code : "200",
                name : user.name + " "+ user.lastname,
                username : user.username,
                group : user.group,
                privileges : groups.privileges
              }
              res.send(response);
            }  
           }else{
              var response={
                code: "400",
                status: "false",
                err : "Group No Exits"
              }
             res.send(response)

           }
          });

         }
         else  if ((user.password === passEncriptada)&&(user.active=="false")){
            console.log('usuario inactivo');
            var response = {
            status : "false", 
            code : "209",
            err : "User Inactive"
            };

            res.send(response)

         }
         else{
            console.log('contraseña incorrecta');
            var response = {
            status : "false", 
            code : "210",
            err: "Password Invalid"
            };

             res.send(response)

         }
      }
      else{
         console.log('Este usuario no existe')
         var response = {
            status : "false", 
            code : "211",
            err : "User No Exists"
            };

            res.send(response)

       }


})
}



userRegister = function (req ,res){
    //Obtenemos los datos username y password
   var username = req.body.username
   var password = req.body.password
   //Encriptamos por medio de una función la contraseña 
   var passEncriptada = encriptar(username, password);
   //Buscamos si el usuario existe
   User.findOne({"username":username},function(err, user){
    
      if(!user) {
         var user = new User({
            username : username,
            password : passEncriptada,
            name      :    req.body.name,
            lastname  :    req.body.lastname,
            email     :    req.body.email, 
            phone     :    req.body.phone,
            group     :    req.body.group,
            active    :    req.body.active,
            date      : {
                    regdate : Date.now()
                  }

         })
        //guardamos el usuario
      user.save(function(err) {
      
      if(!err) {
       var response = {
              newuser : user, 
              status : "true", 
              code : "201"
            } ;

      res.send(response);
      } else {
       var response = {
              status : "false", 
              code : "206",
              err: err
            } ;

      res.send(response);
      }
    });
        
      }
      else
         res.send('Este usuario ya existe');
         console.log(user);

   })

}

findAlluser = function(req, res) {

 var date = "date.regdate"; 

  User.find().sort({ date : -1}).exec(function (err, user){
    if(!err) {
        console.log("Listar Usuarios");
        var response = {
            status : "true", 
             code : "200",
            data:user
            };

          res.send(response);


      } else {
      
          var response = {
            status : "false", 
            code : "401",
            err : err.result
            };

          res.send(response);
      }
});

};

findUserByRUT = function(req, res) {
    User.find({"username" : req.params.username}, function(err, usuarios) {
      if(!err) {
        console.log("OK");
        console.log(usuarios);
        res.send(usuarios);
      } else {
        console.log('ERROR: ' + err);
      }
    });
};


getUser = function ( req , res ){
    User.find({ "username" : req.body.username}, function( err , usuarios ) {
      if (!err && usuarios != ""){
        res.send(usuarios);
      }
      else {
        
        var response = {
            status : "false",
            code : "0001"
        }

        res.send(response);
        console.log ("fale");

      }

    });
};

getUserbyRut = function(req, res) {

  User.findById(req.params.id, function(err, resultado) {
    if(!err) {
       var response = {
            status : "true", 
            data:resultado
            };

          res.send(response);
    } else {
          var response = {
            status : "false", 
            code : "401",
            err : err.message
            };

          res.send(response);
    }
  });
};



changePassword = function(req, res) {


    var username = req.body.username
    var oldPass = req.body.oldpass;
    var newPass = req.body.newpass;
    var confPass = req.body.confpass;

console.log(username);
console.log(oldPass);
    console.log(newPass);
    console.log(confPass);

  var passEncriptadaOld = encriptar(username, oldPass);

       if (newPass === confPass){

       console.log("password Iguales");

        var passEncriptadaNew = encriptar(username, newPass);
      
        console.log("new pass encriptada");
     
              User.findOneAndUpdate({"username":req.body.username , "password": passEncriptadaOld },{$set:{'password':passEncriptadaNew}},{safe:true,upsert:false}, function(err, Data) {

              if (!err){


                if(Data != null){
                  console.log("Succes");
                  var response = {
                  status : "true",
                  code : "200",

                };
              }else{

                var response = {
                  status : "false",
                  code : "704",
                  err : "Cambio de Password Invalido"

                };
              }

                res.send(response);
           

              }else{
                
                 var response = {
                      status : "false", 
                      code : "702",
                      err :  "Datos No Coinciden"
                      };

                    res.send(response);
              }
              }); 


      }else{

        console.log("Deben coincidir las contraseñas");


           var response = {
            status : "false", 
            code : "705",
            err:"Deben Coincidir las contraseñas"
            };

          res.send(response);


      }



}




editUser = function(req, res) {
   
   User.findById(req.body.id, function(err, Data) {

    if (!err){
      Data.username        =   req.body.username;
     // Data.password   =   req.body.password;
      Data.name    = req.body.name;
      Data.lastname    = req.body.lastname;
      Data.email    = req.body.email;
      Data.phone    = req.body.phone;
      Data.group    = req.body.group;
      Data.active    = req.body.active;

    if (req.body.active=="false"){  // se guarda fecha de usuario inactivo
        Data.date.enddate= Date.now();
    }

      Data.save(function(err){
        if(!err){
           var response = {
            status : "true", 
            code : "401",
            data: Data
            };

          res.send(response);
        }else{
          
           var response = {
            status : "false", 
            code : "200",
            err : err.message
            };

          res.send(response);
        }

      });

    }else{
       var response = {
            status : "false", 
            code : "200",
            err :  err.message
            };

          res.send(response);
    }
    }); 
};

/*
* Password por Defecto
*  Vtr#123
*
*/


resetPassword = function (req , res){


 var setpassword = "Vtr123#";
 var username =  req.body.username;

 
 var passEncriptada = encriptar(username, setpassword);

   User.findOneAndUpdate({"username":req.body.username},{$set:{'password':passEncriptada}},{safe:true,upsert:false}, function(err, data) {

    if ((!err) && (data != null) ){

         var response = {
            status : "true",
            code : "200",
            message : "Succes Reset"
            };

          res.send(response);
    }else{
           var response = {
            status : "false",
            code : "400",
            err : "Error reset Password"
            };

          res.send(response);
    }

 });
};




removeUser = function (req , res){

 User.findByIdAndRemove(req.body.id , function(err){
    if (!err){
         var response = {
            status : "true"
            };

          res.send(response);

    }else{
           var response = {
            status : "false",
            code : "400" 
            };

          res.send(response);
    }

 });
};

app.post  ('/login/' , userLogin );
app.post  ('/register/', userRegister );
app.post  ('/changepassword/', changePassword);
app.post  ('/resetpasword/', resetPassword);
app.get   ('/general/findAlluser/',        findAlluser);
app.post  ('/general/getUser/', getUser);
app.get   ('/general/getUser/:id', getUserbyRut);
app.post  ('/general/addUser/', userRegister);
app.post  ('/general/editUser/', editUser);
app.post  ('/general/removeUser/', removeUser);

}
