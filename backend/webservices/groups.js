/**
* Webservices Api Tipos CPE
**/

module.exports = function(app) {

  var grupo = require('../models/group.js');

findAllGroup = function(req, res) {

  	grupo.find(function(err, groupData) {

  		if(!err) {

        var response = {
        	code : "200",
            status : "true", 
            data:groupData
            };

          res.send(response);


  		} else {
  		
  		    var response = {
            status : "false", 
            code : "401"
          	};

          res.send(response);
  		}
  	});
};

addGroup = function(req, res) {

   var Group = new grupo({

            name:     req.body.name,
            tipo_id : req.body.tipo_id,
            activo : req.body.activo,
            privileges : req.body.privileges
    });


     Group.save(function(err) {
      if(!err) {
         var response = {
            status : "true",
            code: "200"
            };

          res.send(response);
      } else {
        var response = {
            status : "false", 
            code : "401",
            err : err
            };

          res.send(response);
        console.log('Error Agregando Grupo: ' + err);
      }
    });
  
};

editGroup = function(req, res) {

   grupo.findById(req.body.id, function(err, groupData) {

    if (!err){
      groupData.name        =   req.body.name;
      groupData.tipo_id		= 	req.body.tipo_id;
      groupData.activo		=	req.body.activo;


      groupData.save(function(err){
        if(!err){
           var response = {
            status : "true", 
            code : "401",
            data: groupData
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

editPrivileges = function(req, res) {

   grupo.findById(req.body.id, function(err, groupData) {

    if (!err){
  
     groupData.privileges        =   req.body.privileges;

      groupData.save(function(err){
        if(!err){
           var response = {
            status : "true", 
            code : "401",
            data: groupData
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

getGroupfindById = function(req, res) {

  grupo.findById(req.params.id, function(err, resultado) {
    if(!err) {
       var response = {
            status : "true",
            code: "200",
            data: resultado
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


removeGroup = function (req , res){

 grupo.findByIdAndRemove(req.body.id , function(err){
    if (!err){
      console.log("Group Remove");
       var response = {
            status : "true", 
            code : "200",
            };

          res.send(response);

    }else{
       var response = {
            status : "false", 
            code : "400",
            err : err.message
            };

          res.send(response);
    }

 });
};
  /* Model Group */
  app.get   ('/general/getGroup/', findAllGroup);
  app.get   ('/general/getGroup/:id', getGroupfindById);
  app.post  ('/general/addGroup/',addGroup);
  app.post  ('/general/editGroup/', editGroup);
  app.post  ('/general/removeGroup/', removeGroup); 
  app.post ('/general/editPrivileges/', editPrivileges);

  };