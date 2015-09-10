


/**
* Webservices Api Tipos CPE
**/

module.exports = function(app) {

  var params = require('../models/parametros.js');

getParams = function(req, res) {

  	params.find(function(err, Data) {

  		if(!err) {

        var response = {
        	code : "200",
            status : "true", 
            data:Data
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

addParams = function(req, res) {

   var parametro = new params({
            wired_test: req.body.wired_test,
            
            url_down		:	req.body.url_down,
            time_out_down 	: 	req.body.time_out_down,
            sessions_down 	:	req.body.sessions_down,
            accepttest_down :	req.body.accepttest_down,         
            
            url_up			:	req.body.url_up,
            time_out_up		:	req.body.time_out_up,
            sessions_up 	: 	req.body.sessions_up,
            accepttest_up 	: 	req.body.accepttest_up,
            
            url_ping : req.body.url_ping,
            num_ping : req.body.num_ping,
            
            url_dns 		: req.body.url_dns,
            url_traceroute 	: req.body.url_traceroute,
            url_speedtest 	: req.body.url_speedtest,
            
            vumeter : req.body.vumeter,
            speedTest : req.body.speedTest,
            
            speedtest_size : req.body.speedtest_size,
			speedtest_position : req.body.speedtest_position,
			
			hops_traceroute 	: req.body.hops_traceroute,
				 
            Pruebas_ST: { 
              nacional:{     
                  valor_aceptado : req.body.Pruebas_ST.nacional.valor_aceptado,
             
              },
              internacional :{
                 
                  valor_aceptado : req.body.Pruebas_ST.internacional.valor_aceptado,

              }
                 },
                 
				 
                 

    });


     parametro.save(function(err) {
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
        console.log('Error Agregando Parametros de Configuracion inicial: ' + err);
      }
    });
  
};

editParams = function(req, res) {

   params.findById(req.body.id, function(err, groupData) {

    if (!err){
      groupData.wired_test		=   req.body.wired_test,
      
      groupData.url_down        =   req.body.url_down,
      groupData.time_out_down	= 	req.body.time_out_down,     
      groupData.sessions_down 	= 	req.body.sessions_down,
      groupData.accepttest_down = 	req.body.accepttest_down,
      
      groupData.url_up        	=   req.body.url_up,
      groupData.time_out_up		= 	req.body.time_out_up,     
      groupData.sessions_up 	=	req.body.sessions_up,
      groupData.accepttest_up 	=	req.body.accepttest_up,
      
      groupData.url_ping		=	req.body.url_ping,
      groupData.num_ping  		=  	req.body.num_ping,
      
      groupData.url_dns			=	req.body.url_dns,
      groupData.url_traceroute	=	req.body.url_traceroute,
      groupData.hops_traceroute	=	req.body.hops_traceroute,
      groupData.url_speedtest	=	req.body.url_speedtest,
      
      groupData.vumeter        	=   req.body.vumeter,
      groupData.speedTest 		= 	req.body.speedTest,
      groupData.Pruebas_ST.nacional.valor_aceptado  =   req.body.Pruebas_ST.nacional.valor_aceptado,
      groupData.Pruebas_ST.internacional.valor_aceptado     = req.body.Pruebas_ST.internacional.valor_aceptado,
      
      groupData.speedtest_size 		= 	req.body.speedtest_size,
      groupData.speedtest_position 	= 	req.body.speedtest_position,
     
      groupData.save(function(err){
        if(!err){
           var response = {
            status : "true", 
            code : "200",
            data: groupData
            };

          res.send(response);
        }else{
          
           var response = {
            status : "false", 
            code : "401",
            err : err.message
            };

          res.send(response);
        }

      });

    }else{
       var response = {
            status : "false", 
            code : "401",
            err :  err.message
            };

          res.send(response);
    }
    }); 
};



  app.get   ('/general/getParam/', getParams);
  app.post  ('/general/addParam/',addParams);
  app.post  ('/general/editParam/', editParams);


  };
