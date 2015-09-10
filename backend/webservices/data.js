

module.exports = function(app) {

  var data = require('../models/room.js');

  var plan = require('../models/plan.js');

  var habitacion = require('../models/room.js');

  var cpe = require('../models/cpe.js');

  var typecpe = require ('../models/typecpe');

  var extensores =  require ('../models/extensores'); 
  
  var type_ext =  require ('../models/typext'); 

  var async  =  require("async");

  var data = new Object();



getData = function ( req , res ){

  console.log("Consumiendo Webservices de Provisiones Panel Ficha");

  var result =  new Object();
 
  var fecha_serv = new Date();

    async.parallel({

        plan: function(cb){
            plan.find({},{_id : 0, name : 1, upload : 1 , download : 1  },cb);
        },
        room: function(cb){
            habitacion.find({},{_id : 0 , name : 1},cb);
        },
        typecpe: function (cb){
              typecpe.find({},{_id : 0,  },cb);
        },
        cpes: function(cb){
              cpe.find({},{_id : 0 , model : 1 , frecuencia : 1 , type_cpe: 1 },cb);
        },
        extensores: function(cb){
              extensores.find({},{_id : 0},cb);
        },
        typeextensores : function (cb){
             type_ext.find({},{_id : 0,},cb);
        }
    },
    function(err, results) {
      results.time = fecha_serv;
      res.send(results);
  
    });
};




  app.get('/general/getData/', getData);

};
