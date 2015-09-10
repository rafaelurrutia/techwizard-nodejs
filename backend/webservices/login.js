

module.exports = function(app) {

var User = require('../models/user.js');
var params = require('../models/parametros.js');
var async  =  require("async");


function encriptar(user, pass) {
   var crypto = require('crypto')
   // usamos el metodo CreateHmac y le pasamos el parametro user y actualizamos el hash con la password
   var hmac = crypto.createHmac('sha1', user).update(pass).digest('hex')
   console.log(hmac)
   return hmac
}


getLogin = function ( req , res ){


 var username = req.body.username;
 var password = req.body.password;
 var passEncriptada = encriptar(username,password)

  console.log("Consumiendo Webservices de Provisiones Panel Ficha");

  var result =  new Object();
 
  var fecha_serv = new Date();

    async.parallel({

        user: function(cb){
            User.find({"username" : req.body.username , "password" : passEncriptada },{},cb);
        },
        params: function(cb){
            params.find({},{_id : 0 , __v : 0 },cb);
        },
    },
   
    function(err, results) {

 var med = (results.user);
 med = med.length;
console.log(results);

  if((!err) && (med != 0 )){

 var status = (results.user[0].active);

    if (status == "true"){

         var response = {
            name : results.user[0].name + " " + results.user[0].lastname,
            param : results.params,
            status : "true", 
            code : "001"
          } ;

          res.send(response);


       // res.send(results);
      }else{
         var response = {
            message : "Usuario Inactivo",
            status : "false", 
            code : "200"
          } ;

          res.send(response);
      }
  }
  else{
        var response = {
            message : "Usuario No Existe",
            status : "false", 
            code : "200"
          } ;

          res.send(response);
      }
  
    });
};



getLoginUser = function ( req , res ){
  
  User.find({"username" : req.body.username , "password" : req.body.password }, function(err, usuarios) {
    
    if (!err && usuarios != ""){
     
      if (usuarios[0].active == "true" ){ //usuario activo

        console.log("User active");

         var response = {
            name : usuarios[0].name + " " + usuarios[0].lastname,
            status : "true", 
            code : "001"
          } ;

          res.send(response);
      }
      else if (usuarios[0].active == "false" ) { // usuario inactivo


        console.log("User inactive");

          var response = {
            status : "false", 
            code : "201"
          } ;

          res.send(response);

      }
      
    }
    else //no existe usuario
    {
      console.log('no exist user');
        
        var response = {
            status : "false", 
            code : "200"
          } ;

          res.send(response);
    }

    });  
};




//Link routes and functions
app.post  ('/general/getLoginUser/', getLoginUser); 
//Link routes and functions
app.post  ('/general/getLogin/', getLogin); 
// app.post  ('/general/getLogin/', getLogin); 
//app.post ('/general/logout/' , logout);
}






