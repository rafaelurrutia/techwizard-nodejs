

module.exports = function(app) {

  var cpe  = require('../models/cpe.js');

  var typecpe  = require('../models/typecpe.js');

  var room = require('../models/room.js');

  var plan = require('../models/plan.js');

  var typext = require ('../models/typext');

  var ext = require ('../models/extensores');



  //falta extensores

  var data = new Object();


  
/**
* Webservices Api Time Server
**/

gettime = function ( req , res ){
      var fecha_serv = new Date();
      res.send(fecha_serv);
      console.log(fecha_serv);
};
  
/**
* Webservices Api Plan
**/

findAllPlan = function(req, res) {

  	plan.find(function(err, plan) {

  		if(!err) {

        var response = {
            status : "true", 
            data:plan
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

addPlan = function(req, res) {

  console.log("Consumiendo Webservices AddPlan");

   var Plan = new plan({
      name:     req.body.name,
      upload:  req.body.upload,
      download:   req.body.download,
      unidad:  "kbps",
      
    });

     Plan.save(function(err) {
      if(!err) {
        console.log(Plan);
         var response = {
            status : "true",
            code:"200",
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

getPlanfindById = function(req, res) {

  plan.findById(req.params.id, function(err, resultado) {
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

editPlan = function(req, res) {

   plan.findById(req.body.id, function(err, plans) {

    if (!err){

      plans.name = req.body.name;
      plans.upload   =  req.body.upload;
      plans.download =  req.body.download;

      plans.save(function(err){
        if(!err){
          console.log('Update');
        var response = {
            status : "true", 
            code : "200"
          } ;
          res.send(response);
        }else{
        var response = {
            status : "false", 
            code : "206",
            err : err.message
          } ;

          res.send(response);
        }

      });

    }else{
        var response = {
            status : "false", 
            code : "204",
          } ;

          res.send(response);
    }
    }); 
};

removePlan = function (req , res){

 plan.findByIdAndRemove(req.body.id , function(err){
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

/**
* Webservices Api Habitaciones
**/

findAllRoom = function (req,res){

      room.find(function(err, rooms) {

      if(!err) {
         var response = {
            status : "true", 
            code : "200",
            data: rooms,
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

addRoom = function(req, res) {

   var nroom = new room({
      name:     req.body.name,
    });


     nroom.save(function(err) {
      if(!err) {
        console.log('Created CPE');
        var response = {
            status : "true",
            code: "200"
            };

          res.send(response);
      } else {
        console.log('ERROR: ' + err);
            var response = {
            code : "330",
            status : "false"
            };

          res.send(response);
      }
    });
  
};

getRoomfindById = function(req, res) {
  console.log(req.params.id)

  room.findById(req.params.id, function(err, resultado) {
    if(!err) {
       var response = {
            status : "true", 
            code : "200",
            data: resultado,
            };

          res.send(response);
    } else {
      console.log('ERROR: ' + err);
       var response = {
            status : "false", 
            code : "400",
            };

          res.send(response);
    }
  });
};

editRoom = function(req, res) {

   room.findById(req.body.id, function(err, roomData) {

    if (!err){

      roomData.name          =   req.body.name;


      roomData.save(function(err){
        if(!err){
           var response = {
            status : "true", 
            code : "401",
            data: roomData
            };

          res.send(response);
        }else{
          console.log('Err' + Err);
           var response = {
            status : "false", 
            code : "200",
            };

          res.send(response);
        }

      });

    }else{
       var response = {
            status : "false", 
            code : "200",
            };

          res.send(response);
    }
    }); 
};

removeRoom = function (req , res){

 room.findByIdAndRemove(req.body.id , function(err){
    if (!err){
      console.log("Room Remove");
       var response = {
            status : "true", 
            code : "200",
            };

          res.send(response);

    }else{
       var response = {
            status : "false", 
            code : "400",
            };

          res.send(response);
    }

 });
};


/**
* Webservices Api  Modelo CPE
**/

findAllCpe = function(req, res) {

  console.log ("FindAllCPE");

    cpe.find(function(err, cpeData) {

      if(!err) {
        
         var response = {
            status : "true", 
            code : "200",
            data: cpeData,
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

addCpe = function(req, res) {

   var Cpe = new cpe({
      name:     req.body.name,
      model:  req.body.name,
      description:   req.body.description,
      frecuencia : req.body.frecuencia,
      mark: req.body.mark,
      type_cpe : req.body.type_cpe,
      family : req.body.family ,
      wifi : req.body.wifi,
      docsis : req.body.docsis,
      status : req.body.status,
      
    });


console.log("ADD CPE");
      console.log(Cpe);

     Cpe.save(function(err) {
      if(!err) {
         var response = {
            status : "true",
            code: "200"
            };

          res.send(response);
      } else {
        console.log('ERROR: ' + err);
      }
    });  
};

getCpefindById = function(req, res) {

  cpe.findById(req.params.id, function(err, resultado) {
    if(!err) {
       var response = {
            status : "true",
            code: "200",
            data: resultado
            };

          res.send(response);
    } else {
      console.log('ERROR: ' + err);
    }
  });
};

editCpe = function(req, res) {

   cpe.findById(req.body.id, function(err, cpeData) {

    if (!err){

      cpeData.name          =   req.body.name;
      cpeData.model         =   req.body.name;
      cpeData.description   =   req.body.description;
      cpeData.mark          =   req.body.mark;
      cpeData.frecuencia    =   req.body.frecuencia;
      cpeData.type_cpe      =   req.body.type_cpe;
      cpeData.family        =   req.body.family;
      cpeData.wifi          =   req.body.wifi;
      cpeData.docsis        =   req.body.docsis;
      cpeData.status        =   req.body.status; 



      cpeData.save(function(err){
        if(!err){
           var response = {
            status : "true", 
            code : "401",
            data: cpeData
            };

          res.send(response);
        }else{
          console.log('Err' + Err);
           var response = {
            status : "false", 
            code : "200",
            };

          res.send(response);
        }

      });

    }else{
       var response = {
            status : "false", 
            code : "200",
            };

          res.send(response);
    }
    }); 
};

removeCpe = function (req , res){

 cpe.findByIdAndRemove(req.body.id , function(err){
    if (!err){
      console.log("Cpe Remove");
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


/**
* Webservices Api Tipos CPE
**/

findAllTypeCpe = function(req, res) {

  console.log ("FindAllCPE");

    typecpe.find(function(err, typecpeData) {

      if(!err) {
        
         var response = {
            status : "true", 
            code : "200",
            data: typecpeData,
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

addTypeCpe = function(req, res) {

 var numCode = Math.floor((Math.random() * 100) + 1);;

/*
   typecpe.find({},{code : 1, _id : 0  }).sort({code: -1}).limit(1).exec(function(err, docs) {   
    numCode= JSON.parse(docs);
   }); */

   var TypeCpe = new typecpe({

            name:     req.body.name,
            code :    numCode
    });


     TypeCpe.save(function(err) {
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
        console.log('ERROR: ' + err);
      }
    });
  
};

editTypeCpe = function(req, res) {

   typecpe.findById(req.body.id, function(err, typeCpeData) {

    if (!err){
      typeCpeData.name         =   req.body.name;

      typeCpeData.save(function(err){
        if(!err){
           var response = {
            status : "true", 
            code : "401",
            data: typeCpeData
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

getTypeCpefindById = function(req, res) {

  typecpe.findById(req.params.id, function(err, resultado) {
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


removeTypeCpe = function (req , res){

 typecpe.findByIdAndRemove(req.body.id , function(err){
    if (!err){
      console.log("typeCpe Remove");
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

/**
* Webservices Api Tipo Extensores
**/

findAllTypeExt = function(req, res) {

  console.log ("FindALLExtensores");

    typext.find(function(err, typeExtData) {

      if(!err) {
        
         var response = {
            status : "true", 
            code : "200",
            data: typeExtData,
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


getTypeExtfindById = function(req, res) {

  typext.findById(req.params.id, function(err, resultado) {
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

addTypeExt = function(req, res) {


   var numCode = Math.floor((Math.random() * 100) + 1);;

/*
   typecpe.find({},{code : 1, _id : 0  }).sort({code: -1}).limit(1).exec(function(err, docs) {   
    numCode= JSON.parse(docs);
   }); */

   var typeExt = new typext({

            name:     req.body.name,
            code :    numCode
    });

     typeExt.save(function(err) {
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
       
      }
    });
};

editTypeExt = function(req, res) {

   typext.findById(req.body.id, function(err, typeExtData) {

    if (!err){
      typeExtData.name         =   req.body.name;

      typeExtData.save(function(err){
        if(!err){
           var response = {
            status : "true", 
            code : "401",
            data: typeExtData
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

removeTypeExt = function (req , res){

 typext.findByIdAndRemove(req.body.id , function(err){
    if (!err){
      console.log("typeext Remove");
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

/**
* Webservices Api Modelo Extensores
**/

findAllExt = function(req, res) {

  console.log ("FindALLExtensores");

    ext.find(function(err, extData) {

      if(!err) {
        
         var response = {
            status : "true", 
            code : "200",
            data: extData,
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


getExtfindById = function(req, res) {

  ext.findById(req.params.id, function(err, resultado) {
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

addExt = function(req, res) {

   var extensorNew = new ext({

            name:     req.body.name,
            frecuencia : req.body.frecuencia,
            family : req.body.family,
            type_extensor : req.body.type_extensor,
    });


     extensorNew.save(function(err) {
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
            err : err.message
            };

          res.send(response);
       
      }
    });
};

editExt = function(req, res) {

   ext.findById(req.body.id, function(err, extData) {

    if (!err){
      extData.name          =   req.body.name;
      extData.frecuencia    =   req.body.frecuencia;
      extData.family        =   req.body.family;
      extData.type_extensor =   req.body.type_extensor;

      extData.save(function(err){
        if(!err){
           var response = {
            status : "true", 
            code : "401",
            data: extData
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

removeExt = function (req , res){

 ext.findByIdAndRemove(req.body.id , function(err){
    if (!err){
      console.log("ext Remove");
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


/*******************************************************************/
/*******************************************************************/

  /* Time Server*/
  app.get   ('/general/getTime/',gettime);
  app.post  ('/general/getTime/',gettime);
  /* Planes */
  app.get   ('/general/getPlan/', findAllPlan);
  app.get   ('/general/getPlan/:id', getPlanfindById);
  app.post  ('/general/addPlan/',addPlan);
  app.post  ('/general/editPlan/', editPlan);
  app.post  ('/general/removePlan/', removePlan);
  /* Habitaciones */
  app.get   ('/general/getRoom/', findAllRoom);
  app.get   ('/general/getRoom/:id', getRoomfindById);
  app.post  ('/general/addRoom/',addRoom);
  app.post  ('/general/editRoom/', editRoom);
  app.post  ('/general/removeRoom/', removeRoom);
  /* Model CPE */
  app.get   ('/general/getModelCpe/', findAllCpe);
  app.get   ('/general/getModelCpe/:id', getCpefindById);
  app.post  ('/general/addModelCpe/',addCpe);
  app.post  ('/general/editModelCpe/', editCpe);
  app.post  ('/general/removeModelCpe/', removeCpe);
  /* Type CPE */
  app.get   ('/general/getTypeCpe/', findAllTypeCpe);
  app.get   ('/general/getTypeCpe/:id', getTypeCpefindById);
  app.post  ('/general/addTypeCpe/',addTypeCpe);
  app.post  ('/general/editTypeCpe/', editTypeCpe);
  app.post  ('/general/removeTypeCpe/', removeTypeCpe);
 /* Type Extensores */
  app.get   ('/general/getTypeExt/', findAllTypeExt);
  app.get   ('/general/getTypeExt/:id', getTypeExtfindById);
  app.post  ('/general/addTypeExt/',addTypeExt);
  app.post  ('/general/editTypeExt/', editTypeExt);
  app.post  ('/general/removeTypeExt/', removeTypeExt); 
  /* Model Extensores */
  app.get   ('/general/getExt/', findAllExt);
  app.get   ('/general/getExt/:id', getExtfindById);
  app.post  ('/general/addExt/',addExt);
  app.post  ('/general/editExt/', editExt);
  app.post  ('/general/removeExt/', removeExt); 

  };