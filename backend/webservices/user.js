

  /* function resetPassword()
  * Password por Defecto
  *  VTR : Vtr#123
  *  Pilotos Baking :Bsw123#
  */



module.exports = function(app) {

var User = require('../models/user.js');
var async  =  require("async");
var group = require ('../models/group.js');
var log = require('../models/logusers');

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

var fecha = sumaFecha(30,'');
console.log(fecha);

/* funcion original
userLogin =  function (req, res){

 var username = req.body.username;
 var password = req.body.password;


 var passEncriptada = encriptar(username,password)

  User.findOne({"username":username},function (err, user){
    if(user){
       var cont = 0;
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

          cont++;

          console.log("Contador " + cont);

          if (cont < 5){
           
            console.log('contraseña incorrecta');
            var response = {
            status : "false", 
            code : "210",
            err: "Password Invalid"
            };

             res.send(response)
           }else if (cont >= 5){
            
            console.log('contraseña incorrecta');
            var response = {
            status : "false", 
            code : "223",
            err: "Usuario Bloqueado"
            };
           
           }
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

*/

userLogin =  function (req, res){

 var username = req.body.username;
 var password = req.body.password;
 var timeNow = new Date();
 var minutesNow = timeNow.getMinutes();



 var passEncriptada = encriptar(username,password)

  User.findOne({"username":username},function (err, user){
    if(user){
     
        if ((user.password === passEncriptada) && (user.block == "false") && (user.active =="true")){
         
           group.findOne({"name": user.group , "activo" : "true"},function(err, groups){
              if (!err){
                  console.log('login success!!!');
                  User.update({"username" :username}, { $inc : { "total_entry_success" : 1 } , $set : { "last_session" : timeNow } }, {upsert:true} , function(err, data){
                    if(!err){
                      console.log("Registro Login: "+ username + " Time Last Session : " + timeNow);
                    }
                    else{
                      console.log("Inicio de Sesion no Registrad en BD - Err: " + err);
                    }
                  });
                  if (groups == null) {
                      var response = {
                                       status : "false",
                                       code : "402",
                                       err : "Group Inactive"  
                                      }
                      res.send(response);      
                  } else
                  {
                      var response = {
                                       status : "true",
                                       code : "200",
                                       name : user.name + " "+ user.lastname,
                                       username : user.username,
                                       group : user.group,
                                       privileges : groups.privileges
                                    }
                      res.send(response);
                  }  } else {
                              var response={
                                code: "400",
                                status: "false",
                                err : "Group No Exits"
                              }
                             res.send(response)

                           }
            });
        }
        else  if ((user.password === passEncriptada) && (user.block == "false") && (user.active == "false")){
         
                    console.log('usuario inactivo');
                    var response = {
                    status : "false", 
                    code : "209",
                    err : "User Inactive"
                    };
                    res.send(response)
        }  
        else  if ((user.password === passEncriptada) && (user.block == "true") && (user.active == "false")){
                   
                    console.log('usuario inactivo');
                    var response = {
                    status : "false", 
                    code : "209",
                    err : "User Inactive"
                    };
                    res.send(response)
        }  
        else if ((user.password === passEncriptada) && (user.block == "true") && (user.active == "true")){
       
          var resta_de_fecha = ( timeNow - user.time_block);
          
          console.log(" Han transcurrido " + resta_de_fecha + " desde el Bloqueo, Fecha y Hora de Bloqueo " + user.time_block + " / Hora Actual : " + timeNow );

          //300000 milisegundos equivale a 5 minutos
          if ( resta_de_fecha  > 300000){

              group.findOne({"name": user.group , "activo" : "true"},function(err, groups){
                      if (!err){
                          console.log('login success!!!');
                          User.update({"username" :username}, { $inc : { "total_entry_success" : 1 } , $set : { "last_session" : timeNow } }, {upsert:true} , function(err, data){
                            if(!err){
                              console.log("Registro Login: "+ username + " Time Last Session : " + timeNow);
                            }
                            else{
                              console.log("Inicio de Sesion no Registrad en BD - Err: " + err);
                            }
                          });
                          if (groups == null) {
                              var response = {
                                               status : "false",
                                               code : "402",
                                               err : "Group Inactive"  
                                              }
                              res.send(response);      
                          } else
                          {
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
                    } 
                        else {
                           var response={
                               code: "400",
                               status: "false",
                               }
                           res.send(response)

                        }
              });


               User.update({"username":username},{$set:{"block":false}},{upsert:true},function(err,result){
                        console.log("Cambia Parametro Block a False ");
                        if(!err){
                          console.log("Paso el tiempo correspondinete el usuario ya no esta bloqueado");
                        }else{
                          console.log("No cambio el bloqueo, verificar update");
                        }

               }); 
 
          }
          else
          {
            console.log("Usuario " + username + " Bloqueado, debe esperar que pasen 5 minutos para desbloquear ")
             var response = {
                              status : "false", 
                              code : "223",
                              err: "Usuario Bloqueado"
                            };
            res.send(response);
          }
        }
        else  if ((user.password !== passEncriptada) && (user.block == "false") && (user.active == "false")){
                   
                    console.log('usuario inactivo');
                    var response = {
                    status : "false", 
                    code : "209",
                    err : "User Inactive"
                    };
                    res.send(response)
        }          
        else  if ((user.password !== passEncriptada) && (user.block == "true") && (user.active == "true")){
                  
                    console.log('usuario Bloqueado');
                       var response = {
                                        status : "false", 
                                        code : "223",
                                        err: "Usuario Bloqueado"
                                      };
                      res.send(response);
        } 
        else if ((user.password !== passEncriptada) && (user.block == "false") && (user.active == "true")){
    
          console.log ("usuario Activo, Passwword Incorrecta -  Inicio");                 
          User.update({"username":username},{$inc : {"entry" : 1 }},{upsert : true},function(err,usuario){
              if(!err){
              
                if (user.entry < 4){
                      console.log('Se envia mensaje Contraseña Invalida');
                      var response = {
                                        status : "false", 
                                        code : "210",
                                        err: "Password Invalid"
                                      };
                      res.send(response)
                } else if (user.entry >= 4){
                      console.log('Se Bloquea el Usuario por 5 Min y se envia mensaje de usuario Bloqueado.- Se actualiza la Base de Datos.');
                      var response = {
                                        status : "false", 
                                        code : "223",
                                        err: "Usuario Bloqueado"
                                      };
                      res.send(response);
                      User.update({"username":username},{$set:{"block":true , "time_block" : timeNow, "entry": 0 }},{upsert:true},function(err,result){
                        console.log("Cambia Parametro Block a True e ingresa fecha de bloqueo");
                        if(!err){
                          console.log("update block y time lock success");
                        }else{
                          console.log("update block and time_block :  invalid");
                          res.send("false");
                        }

                      });                
                }
              }else{
                console.log("Actualizacion entry con errores");
                res.send("false");
              }
                            

                             }); // end del user.update
        }  
        else if ((user.password !== passEncriptada) && (user.block == "true") && (user.active == "false")){
                    console.log('usuario inactivo');
                    var response = {
                    status : "false", 
                    code : "209",
                    err : "User Inactive"
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
                    regdate : Date.now(),
			enddate: ""
                  },
            expira    :  req.body.expira,
	    entry     : 0,
	    block     : "false",
	    time_block : "",
	    last_session  : Date.now(),
	    total_entry_success : 0,
	    total_entry_refuse : 0

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
};

editUser = function(req, res) {
   
   User.findById(req.body.id, function(err, Data) {

    if (!err){
      Data.username    =   req.body.username;
     // Data.password   =   req.body.password;
      Data.name        = req.body.name;
      Data.lastname    = req.body.lastname;
      Data.email       = req.body.email;
      Data.phone       = req.body.phone;
      Data.group       = req.body.group;
      Data.active      = req.body.active;
      Data.expira      = req.body.expira;

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
