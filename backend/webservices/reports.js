


module.exports = function(app) {

var user = require('../models/user.js');
var cert = require ('../models/certificates.js');
var async  =  require("async");

var isodate = new Date().toISOString()
console.log (isodate + " / isodate");
var d = new Date();
var n = d.getFullYear(); //Año Actual
var m = d.getMonth() + 1; // Mes Actual
var o = d.getDate(); // Dia Actual


var range;
var status;

console.log("Generando Dashboard...");

getDataResult = function ( req , res ){

  var result =  new Object();

    async.parallel({
    	mes1: function(cb){
            cert.count({"General.status" : "Activo" , "General.fecha_activo": { "$gte": new Date(n+',01,01'), "$lt": new Date(n+',02,01')}},cb);
        },
    	mes2: function(cb){
            cert.count({"General.status" : "Activo" , "General.fecha_activo": { "$gte": new Date(n+',02,01'), "$lt": new Date(n+',03,01')}},cb);
        },
        mes3: function(cb){
            cert.count({"General.status" : "Activo" , "General.fecha_activo": { "$gte": new Date(n+',03,01'), "$lt": new Date(n+',04,01')}},cb);
        },
        mes4: function(cb){
            cert.count({"General.status" : "Activo" , "General.fecha_activo": { "$gte": new Date(n+',04,01'), "$lt": new Date(n+',05,01')}},cb);
        },
    	mes5: function(cb){
            cert.count({"General.status" : "Activo" , "General.fecha_activo": { "$gte": new Date(n+',05,01'), "$lt": new Date(n+',06,01')}},cb);
        },
    	mes6: function(cb){
            cert.count({"General.status" : "Activo" , "General.fecha_activo": { "$gte": new Date(n+',06,01'), "$lt": new Date(n+',07,01')}},cb);
        },
        mes7: function(cb){
            cert.count({"General.status" : "Activo" , "General.fecha_activo": { "$gte": new Date(n+',07,01'), "$lt": new Date(n+',08,01')}},cb);
        },
        mes8: function(cb){
            cert.count({"General.status" : "Activo" , "General.fecha_activo": { "$gte": new Date(n+',08,01'), "$lt": new Date(n+',09,01')}},cb);
        },
    	mes9: function(cb){
            cert.count({"General.status" : "Activo" , "General.fecha_activo": { "$gte": new Date(n+',09,01'), "$lt": new Date(n+',10,01')}},cb);
        },
        mes10: function(cb){
            cert.count({"General.status" : "Activo" , "General.fecha_activo": { "$gte": new Date(n+',10,01'), "$lt": new Date(n+',11,01')}},cb);
        },
        mes11: function(cb){
            cert.count({"General.status" : "Activo" , "General.fecha_activo": { "$gte": new Date(n+',11,01'), "$lt": new Date(n+',12,01')}},cb);
        },
        mes12: function(cb){
            cert.count({"General.status" : "Activo" , "General.fecha_activo": { "$gte": new Date(n+',12,01'), "$lt": new Date((n+1)+',01,01')}},cb);
        }, 
           totalByMonthByDate : function(cb){
        var nmes = 0;
        if(m < 10){
            nmes = '0'+m;
        }else{
            nmes = m;
        }

        var query = {"$gte": n+'-'+nmes+'-01T00:00:00', "$lte": n+'-'+nmes+'-31T23:59:59'}
            cert.count({"General.fecha_certificado": query},cb)
        },
        mesActual: function(cb){
		var nmes = 0;
		if(m < 10){
			nmes = '0'+m;
		}else{
			nmes = m;
		}

		var query = {"$gte": n+'-'+nmes+'-01T00:00:00', "$lte": n+'-'+nmes+'-31T23:59:59'}
        	cert.count({"General.status" : "Activo" , "General.fecha_activo": query},cb);
        },
        total: function(cb){
        	cert.count({"General.fecha_certificado": {"$gte": new Date(n+',01,01'), "$lt": new Date((n+1)+',01,01')}},cb);
        },
        totalCerrados: function(cb){
        	cert.count({"General.status":"Cerrado", "General.fecha_certificado": {"$gte": new Date(n+',01,01'), "$lt": new Date((n+1)+',01,01')}},cb)
        },
        totalPendiente: function(cb){
        	cert.count({"General.status":"Pendiente", "General.fecha_certificado": {"$gte": new Date(n+',01,01'), "$lt": new Date((n+1)+',01,01')}},cb)
        },
        totalActivos: function(cb){
        	cert.count({"General.status" : "Activo", "General.fecha_activo": {"$gte": new Date(n+',01,01'), "$lt": new Date((n+1)+',01,01')}},cb)
        }, 
        totalCreados : function(cb){
        	cert.count({"General.status":"Creado", "General.fecha_certificado": {"$gte": new Date(n+',01,01'), "$lt": new Date((n+1)+',01,01')}},cb)
        },
        totalListos : function(cb){
        	cert.count({"General.status":"Listo", "General.fecha_certificado": {"$gte": new Date(n+',01,01'), "$lt": new Date((n+1)+',01,01')}},cb)
        },
     
        totalSlopeByMonth : function (cb){
		var nmes = 0;
		if(m < 10){
                        nmes = '0'+m;
                }else{
			nmes = m;
		}

                var query = {"$gte": n+'-'+nmes+'-01T00:00:00', "$lte": n+'-'+nmes+'-31T23:59:59'}
        	cert.count({"General.status": "Pendiente","General.fecha_certificado": query},cb)
        },
        totalActivosByDay :function (cb){
		var nmes = 0;
		var ndia = 0;

		if(m < 10){
			nmes = '0'+m;
		}else{
			nmes = m;
		}

		if(o < 10){
			ndia = '0'+o;
		}else{
			ndia = o;
		}

		var query = {"$gte": n+'-'+nmes+'-'+ndia+'T00:00:00', "$lte": n+'-'+nmes+'-'+ndia+'T23:59:59'}
       		
        	cert.count({"General.status": "Activo","General.fecha_certificado": query},cb)
        },
        totalSlopedByDay :function (cb){
		var nmes = 0;
		var ndia = 0;

        	if(m < 10){
                        nmes = '0'+m;
                }else{
			nmes = m;
		}

                if(o < 10){
                        ndia = '0'+o;
                }else{
			ndia = o;
		}

                var query = {"$gte": n+'-'+nmes+'-'+ndia+'T00:00:00', "$lte": n+'-'+nmes+'-'+ndia+'T23:59:59'}
        	cert.count({"General.status": "Pendiente","General.fecha_certificado": query},cb)
        },
        totalByDay :function (cb){
		var nmes = 0;
		var ndia = 0;

        	if(m < 10){
                        nmes = '0'+m;
                }else{
			nmes = m;
		}

                if(o < 10){
                        ndia = '0'+o;
                }else{
			ndia = o;
		}

                var query = {"$gte": n+'-'+nmes+'-'+ndia+'T00:00:00', "$lte": n+'-'+nmes+'-'+ndia+'T23:59:59'}
        	cert.count({"General.fecha_certificado": query},cb)
        },

    },
    function(err, results) {

    /***************************************************************************************/
    //result2['widgettable']	
	console.log("Dashboard");
    console.log(results)
    
    var activePorc = parseFloat( (results.totalActivos * 100) / results.total ) ;
	activePorc = Math.round(activePorc*Math.pow(10,0))/Math.pow(10,0);

    var closedPorc = parseFloat( (results.totalCerrados * 100) / results.total ) ;
	closedPorc = Math.round(closedPorc*Math.pow(10,0))/Math.pow(10,0);

	var slopedPorc = parseFloat( (results.totalPendiente * 100) / results.total ) ;
	slopedPorc = Math.round(slopedPorc*Math.pow(10,0))/Math.pow(10,0);

	sumaTotal = (results.totalCreados + results.totalCerrados + results.totalListos);
	
	var porcTotal = parseFloat( (sumaTotal * 100) / results.total ) ;
	porcTotal = Math.round(porcTotal*Math.pow(10,0))/Math.pow(10,0);
	   /***************************************************************************************/	

	/*_____*/
	
	//Calculo Porcentaje Certificados ACTIVOS en el mes Actual
	var porcByMonth = parseFloat( (results.mesActual * 100) / results.totalByMonthByDate ) ;
	porcByMonth = Math.round(porcByMonth*Math.pow(10,0))/Math.pow(10,0);
	

	//Calculo Porcentaje Certificados PENDIENTES en el mes Actual
	var porcSlopeByMonth = parseFloat( (results.totalSlopeByMonth * 100) / results.totalByMonthByDate ) ;
	porcSlopeByMonth = Math.round(porcSlopeByMonth*Math.pow(10,0))/Math.pow(10,0);


	var sumaByMonth = (results.totalByMonthByDate - (results.totalSlopeByMonth + results.mesActual));
	//Calculo Porcentaje Certificados CERRADOS - CREADOS - LISTOS en el mes Actual
	var porcSumaByMonth = parseFloat( (sumaByMonth * 100) / results.totalByMonthByDate ) ;
	porcSumaByMonth = Math.round(porcSumaByMonth*Math.pow(10,0))/Math.pow(10,0);


	/*_____*/
	
	//Calculo Porcentaje Certificados ACTIVOS en POR DIA
	if (results.totalActivosByDay >= 0){
	var porcByDay = parseFloat( (results.totalActivosByDay * 100) / results.totalByDay ) ;
	porcByDay = Math.round(porcByDay*Math.pow(10,0))/Math.pow(10,0);
	}else{
	porcByDay = 0;
	}
	//console.log("porc "+porcByDay);
	//porcByDay = (porcByDay!="NaN")?porcByDay:0;

	//Calculo Porcentaje Certificados PENDIENTES en POR DIA
	if (results.totalSlopedByDay >= 0){
	var porcSlopeByDay = parseFloat( (results.totalSlopedByDay * 100) / results.totalByDay ) ;
	porcSlopeByDay = Math.round(porcSlopeByDay*Math.pow(10,0))/Math.pow(10,0);
	}else{
	porcSlopeByDay = 0;
	}

	var sumaByDay = (results.totalByDay - (results.totalSlopedByDay + results.totalActivosByDay));
	console.log(sumaByDay);
	if (sumaByDay >= 0){
	//Calculo Porcentaje Certificados CERRADOS - CREADOS - LISTOS en el DIA ACTUAL
	var porcSumaByDay = parseFloat( (sumaByDay * 100) / results.totalByDay ) ;
	porcSumaByDay = Math.round(porcSumaByDay*Math.pow(10,0))/Math.pow(10,0);
	}else{
		porcSumaByDay = 0;
	}


      var result2 =  new Object();

						  		result2['widgettable'] = [{  
													  		certificatesQuantityActivesJan : results.mes1 , 
													  		certificatesQuantityActivesFeb : results.mes2 ,  
													  		certificatesQuantityActivesMar : results.mes3 , 
													  		certificatesQuantityActivesApr : results.mes4 , 
													  		certificatesQuantityActivesMay : results.mes5 , 
													  		certificatesQuantityActivesJun : results.mes6 , 
													  		certificatesQuantityActivesJul : results.mes7 , 
													  		certificatesQuantityActivesAug : results.mes8 , 
													  		certificatesQuantityActivesSep : results.mes9 , 
													  		certificatesQuantityActivesOct : results.mes10 , 
													  		certificatesQuantityActivesNov : results.mes11 ,
													  		certificatesQuantityActivesDec : results.mes12
													  	}];
						  		result2['widgets']=  [
						  								{ //Certificaciones totales en el AÑO

						  									certificatesQuantity : results.total,
						  									certificatesClosedQuantity : results.totalActivos, //certificatesActive
						  									certificatesClosedPercentage : activePorc,  // certificateActivePercentage
						  									certificatesSlopeQuantity : results.totalPendiente,
						  									certificatesSlopePercentage : slopedPorc ,
						  									certificatesActiveReadyCreatedQuantity : sumaTotal , //Cerrado-Listo-Creado
						  									certificatesActiveReadyCreatedPercentage : porcTotal

						  									   
						  							  },
						  							  //Certificaciones totales en el mes
						  							  {
						  							  		certificatesQuantity : results.totalByMonthByDate,
						  									certificatesClosedQuantity : results.mesActual,
						  									certificatesClosedPercentage : porcByMonth,
						  									certificatesSlopeQuantity : results.totalSlopeByMonth,
						  									certificatesSlopePercentage : porcSlopeByMonth ,
						  									certificatesActiveReadyCreatedQuantity : sumaByMonth ,
						  									certificatesActiveReadyCreatedPercentage : porcSumaByMonth
						  							  },
						  							  //Certificaciones Totales del dia
						  							  {
						  							  	 	certificatesQuantity : results.totalByDay,
						  									certificatesClosedQuantity : results.totalActivosByDay,
						  									certificatesClosedPercentage : porcByDay,
						  									certificatesSlopeQuantity :results.totalSlopedByDay,
						  									certificatesSlopePercentage : porcSlopeByDay ,
						  									certificatesActiveReadyCreatedQuantity : sumaByDay ,
						  									certificatesActiveReadyCreatedPercentage : porcSumaByDay

						  							  }

						  							  ];
						  		var response = {
						  			code :"200",
						  			status : "true",
						  			data : result2
						  		}

					  		res.send(response); 




  
    }); 
}; 



getDataResult2 = function ( req , res ){

  var result =  new Object();

    async.parallel({
    	totalByDay :function (cb){
		var nmes = 0;
		var ndia = 0;

        	if(m < 10){
                        nmes = '0'+m;
                }else{
			nmes = m;
		}

                if(o < 10){
                        ndia = '0'+o;
                }else{
			ndia = o;
		}

                var query = {"$gte": n+'-'+nmes+'-'+ndia+'T00:00:00', "$lte": n+'-'+nmes+'-'+ndia+'T23:59:59'}
        	cert.count({"General.fecha_certificado": query},cb)
        },
        month : function(cb){
			    cert.aggregate([
			    {$unwind: "$General"},
			    {$match: {"General.status": "Activo"}},
			    {$group: {
			        _id: {month: {$month: "$General.fecha_activo"}, year:{$year: "$General.fecha_activo"}},
			        count:{$sum: 1}
			    }},     { $sort : { _id : 1 } }], cb);
        },
    	mes1: function(cb){
            cert.count({"General.status" : "Activo" , "General.fecha_activo": { "$gte": new Date(n+',01,01'), "$lt": new Date(n+',02,01')}},cb);
        },
    	mes2: function(cb){
            cert.count({"General.status" : "Activo" , "General.fecha_activo": { "$gte": new Date(n+',02,01'), "$lt": new Date(n+',03,01')}},cb);
        },
        mes3: function(cb){
            cert.count({"General.status" : "Activo" , "General.fecha_activo": { "$gte": new Date(n+',03,01'), "$lt": new Date(n+',04,01')}},cb);
        },
        mes4: function(cb){
            cert.count({"General.status" : "Activo" , "General.fecha_activo": { "$gte": new Date(n+',04,01'), "$lt": new Date(n+',05,01')}},cb);
        },
    	mes5: function(cb){
            cert.count({"General.status" : "Activo" , "General.fecha_activo": { "$gte": new Date(n+',05,01'), "$lt": new Date(n+',06,01')}},cb);
        },
    	mes6: function(cb){
            cert.count({"General.status" : "Activo" , "General.fecha_activo": { "$gte": new Date(n+',06,01'), "$lt": new Date(n+',07,01')}},cb);
        },
        mes7: function(cb){
            cert.count({"General.status" : "Activo" , "General.fecha_activo": { "$gte": new Date(n+',07,01'), "$lt": new Date(n+',08,01')}},cb);
        },
        mes8: function(cb){
            cert.count({"General.status" : "Activo" , "General.fecha_activo": { "$gte": new Date(n+',08,01'), "$lt": new Date(n+',09,01')}},cb);
        },
    	mes9: function(cb){
            cert.count({"General.status" : "Activo" , "General.fecha_activo": { "$gte": new Date(n+',09,01'), "$lt": new Date(n+',10,01')}},cb);
        },
        mes10: function(cb){
            cert.count({"General.status" : "Activo" , "General.fecha_activo": { "$gte": new Date(n+',10,01'), "$lt": new Date(n+',11,01')}},cb);
        },
        mes11: function(cb){
            cert.count({"General.status" : "Activo" , "General.fecha_activo": { "$gte": new Date(n+',11,01'), "$lt": new Date(n+',12,01')}},cb);
        },
        mes12: function(cb){
            cert.count({"General.status" : "Activo" , "General.fecha_activo": { "$gte": new Date(n+',12,01'), "$lt": new Date((n+1)+',01,01')}},cb);
        }, 
        mesActual: function(cb){
		var nmes = 0;
		if(m < 10){
			nmes = '0'+m;
		}else{
			nmes = m;
		}

		var query = {"$gte": n+'-'+nmes+'-01T00:00:00', "$lte": n+'-'+nmes+'-31T23:59:59'}
        	cert.count({"General.status" : "Activo" , "General.fecha_activo": query},cb);
        },
        total: function(cb){
        	cert.count({"General.fecha_certificado": {"$gte": new Date(n+',01,01'), "$lt": new Date((n+1)+',01,01')}},cb);
        },
        totalCerrados: function(cb){
        	cert.count({"General.status":"Cerrado", "General.fecha_certificado": {"$gte": new Date(n+',01,01'), "$lt": new Date((n+1)+',01,01')}},cb)
        },
        totalPendiente: function(cb){
        	cert.count({"General.status":"Pendiente", "General.fecha_certificado": {"$gte": new Date(n+',01,01'), "$lt": new Date((n+1)+',01,01')}},cb)
        },
        totalActivos: function(cb){
        	cert.count({"General.status" : "Activo", "General.fecha_activo": {"$gte": new Date(n+',01,01'), "$lt": new Date((n+1)+',01,01')}},cb)
        }, 
        totalCreados : function(cb){
        	cert.count({"General.status":"Creado", "General.fecha_certificado": {"$gte": new Date(n+',01,01'), "$lt": new Date((n+1)+',01,01')}},cb)
        },
        totalListos : function(cb){
        	cert.count({"General.status":"Listo", "General.fecha_certificado": {"$gte": new Date(n+',01,01'), "$lt": new Date((n+1)+',01,01')}},cb)
        },
        totalByMonthByDate : function(cb){
		var nmes = 0;
		if(m < 10){
			nmes = '0'+m;
		}else{
			nmes = m;
		}

		var query = {"$gte": n+'-'+nmes+'-01T00:00:00', "$lte": n+'-'+nmes+'-31T23:59:59'}
        	cert.count({"General.fecha_certificado": query},cb)
        },
        totalSlopeByMonth : function (cb){
		var nmes = 0;
		if(m < 10){
                        nmes = '0'+m;
                }else{
			nmes = m;
		}

                var query = {"$gte": n+'-'+nmes+'-01T00:00:00', "$lte": n+'-'+nmes+'-31T23:59:59'}
        	cert.count({"General.status": "Pendiente","General.fecha_certificado": query},cb)
        },
        totalActivosByDay :function (cb){
		var nmes = 0;
		var ndia = 0;

		if(m < 10){
			nmes = '0'+m;
		}else{
			nmes = m;
		}

		if(o < 10){
			ndia = '0'+o;
		}else{
			ndia = o;
		}

		var query = {"$gte": n+'-'+nmes+'-'+ndia+'T00:00:00', "$lte": n+'-'+nmes+'-'+ndia+'T23:59:59'}
       		
        	cert.count({"General.status": "Activo","General.fecha_certificado": query},cb)
        },
        totalSlopedByDay :function (cb){
		var nmes = 0;
		var ndia = 0;

        	if(m < 10){
                        nmes = '0'+m;
                }else{
			nmes = m;
		}

                if(o < 10){
                        ndia = '0'+o;
                }else{
			ndia = o;
		}

                var query = {"$gte": n+'-'+nmes+'-'+ndia+'T00:00:00', "$lte": n+'-'+nmes+'-'+ndia+'T23:59:59'}
        	cert.count({"General.status": "Pendiente","General.fecha_certificado": query},cb)
        }
     

    },
    function(err, results) {

    /***************************************************************************************/
    //result2['widgettable']	
	console.log("Cargando Dashboard...");
    //console.log(results)
    
    var activePorc = parseFloat( (results.totalActivos * 100) / results.total ) ;
	activePorc = Math.round(activePorc*Math.pow(10,0))/Math.pow(10,0);

    var closedPorc = parseFloat( (results.totalCerrados * 100) / results.total ) ;
	closedPorc = Math.round(closedPorc*Math.pow(10,0))/Math.pow(10,0);

	var slopedPorc = parseFloat( (results.totalPendiente * 100) / results.total ) ;
	slopedPorc = Math.round(slopedPorc*Math.pow(10,0))/Math.pow(10,0);

	sumaTotal = (results.totalCreados + results.totalCerrados + results.totalListos);
	
	var porcTotal = parseFloat( (sumaTotal * 100) / results.total ) ;
	porcTotal = Math.round(porcTotal*Math.pow(10,0))/Math.pow(10,0);
	   /***************************************************************************************/	

	/*_____*/
	
	//Calculo Porcentaje Certificados ACTIVOS en el mes Actual
	var porcByMonth = parseFloat( (results.mesActual * 100) / results.totalByMonthByDate ) ;
	porcByMonth = Math.round(porcByMonth*Math.pow(10,0))/Math.pow(10,0);
	

	//Calculo Porcentaje Certificados PENDIENTES en el mes Actual
	var porcSlopeByMonth = parseFloat( (results.totalSlopeByMonth * 100) / results.totalByMonthByDate ) ;
	porcSlopeByMonth = Math.round(porcSlopeByMonth*Math.pow(10,0))/Math.pow(10,0);


	var sumaByMonth = (results.totalByMonthByDate - (results.totalSlopeByMonth + results.mesActual));
	//Calculo Porcentaje Certificados CERRADOS - CREADOS - LISTOS en el mes Actual
	var porcSumaByMonth = parseFloat( (sumaByMonth * 100) / results.totalByMonthByDate ) ;
	porcSumaByMonth = Math.round(porcSumaByMonth*Math.pow(10,0))/Math.pow(10,0);


	/*_____*/
	
	//Calculo Porcentaje Certificados ACTIVOS en POR DIA
	if (results.totalActivosByDay >= 0){
	var porcByDay = parseFloat( (results.totalActivosByDay * 100) / results.totalByDay ) ;
	porcByDay = Math.round(porcByDay*Math.pow(10,0))/Math.pow(10,0);
	}else{
	porcByDay = 0;
	}
	//console.log("porc "+porcByDay);
	//porcByDay = (porcByDay!="NaN")?porcByDay:0;

	//Calculo Porcentaje Certificados PENDIENTES en POR DIA
	if (results.totalSlopedByDay >= 0){
	var porcSlopeByDay = parseFloat( (results.totalSlopedByDay * 100) / results.totalByDay ) ;
	porcSlopeByDay = Math.round(porcSlopeByDay*Math.pow(10,0))/Math.pow(10,0);
	}else{
	porcSlopeByDay = 0;
	}

	var sumaByDay = (results.totalByDay - (results.totalSlopedByDay + results.totalActivosByDay));
	console.log(sumaByDay);
	if (sumaByDay >= 0){
	//Calculo Porcentaje Certificados CERRADOS - CREADOS - LISTOS en el DIA ACTUAL
	var porcSumaByDay = parseFloat( (sumaByDay * 100) / results.totalByDay ) ;
	porcSumaByDay = Math.round(porcSumaByDay*Math.pow(10,0))/Math.pow(10,0);
	}else{
		porcSumaByDay = 0;
	}


      var result2 =  new Object();
      							result2['resultadosMES'] = [{  
      														resultados : results.month
      													  }],

						  		result2['widgettable'] = [{  
													  		certificatesQuantityActivesJan : results.mes1 , 
													  		certificatesQuantityActivesFeb : results.mes2 ,  
													  		certificatesQuantityActivesMar : results.mes3 , 
													  		certificatesQuantityActivesApr : results.mes4 , 
													  		certificatesQuantityActivesMay : results.mes5 , 
													  		certificatesQuantityActivesJun : results.mes6 , 
													  		certificatesQuantityActivesJul : results.mes7 , 
													  		certificatesQuantityActivesAug : results.mes8 , 
													  		certificatesQuantityActivesSep : results.mes9 , 
													  		certificatesQuantityActivesOct : results.mes10 , 
													  		certificatesQuantityActivesNov : results.mes11 ,
													  		certificatesQuantityActivesDec : results.mes12
													  	}];
						  		result2['widgets']=  [
						  								{ //Certificaciones totales en el AÑO

						  									certificatesQuantity : results.total,
						  									certificatesClosedQuantity : results.totalActivos, //certificatesActive
						  									certificatesClosedPercentage : activePorc,  // certificateActivePercentage
						  									certificatesSlopeQuantity : results.totalPendiente,
						  									certificatesSlopePercentage : slopedPorc ,
						  									certificatesActiveReadyCreatedQuantity : sumaTotal , //Cerrado-Listo-Creado
						  									certificatesActiveReadyCreatedPercentage : porcTotal

						  									   
						  							  },
						  							  //Certificaciones totales en el mes
						  							  {
						  							  		certificatesQuantity : results.totalByMonthByDate,
						  									certificatesClosedQuantity : results.mesActual,
						  									certificatesClosedPercentage : porcByMonth,
						  									certificatesSlopeQuantity : results.totalSlopeByMonth,
						  									certificatesSlopePercentage : porcSlopeByMonth ,
						  									certificatesActiveReadyCreatedQuantity : sumaByMonth ,
						  									certificatesActiveReadyCreatedPercentage : porcSumaByMonth
						  							  },
						  							  //Certificaciones Totales del dia
						  							  {
						  							  	 	certificatesQuantity : results.totalByDay,
						  									certificatesClosedQuantity : results.totalActivosByDay,
						  									certificatesClosedPercentage : porcByDay,
						  									certificatesSlopeQuantity :results.totalSlopedByDay,
						  									certificatesSlopePercentage : porcSlopeByDay ,
						  									certificatesActiveReadyCreatedQuantity : sumaByDay ,
						  									certificatesActiveReadyCreatedPercentage : porcSumaByDay

						  							  }

						  							  ];
						  		var response = {
						  			code :"200",
						  			status : "true",
						  			data : result2
						  		}

					  		res.send(response); 




  
    }); 
}; 



// de megabytes (mb) a kilobytes (kb) 
certbyMonth = function (month) { 

//var query = {"General.status" : "Activo" , "General.fecha_activo": { $gte: new Date (''+n+'-'+month+'-01'), $lt: new Date (''+n+'-'+month+'-31')}};
var query = {"General.status" : "Activo" , "General.fecha_activo": { $gt: new Date('2014,10,01'), $lt: new Date('2014,10,31')}};
console.log(query);
var value;
	
	cert.count(query,function(err,value){
		if(!err){
			console.log(value);
			return value; 

		}else{
			console.log(err);
			return false;
		}
	});
	
};

getCountCertificados = function ( req , res ){


	var data = req.body;

	var status = req.body.status;

	console.log("Obteniendo certificados por status... ");

	if (status == 1)
		status = "Creado";
	if (status == 2)
		status = "Pendiente";
	if (status == 3)
		status = "Listo";
	if (status == 4)
		status = "Activo";
	if (status == 5)
		status = "Cerrado";



	 if ( (data.rut) && (status == "Activo") ) { 
 	 
 	 cert.find({ "General.rut_cliente" : data.rut , "General.status" : status , "General.fecha_activo" : { $gt : new Date (data.firstdate) , $lt : new Date (data.enddate) } }, 
 	 {General : true},
 	 function(err,result){
	 		if (!err){
	 		
	 			console.log(result.General);
	 			if (result.General != "undefined"){
				var response = {
					code : "001",
					data : result
				} 			
	 			res.send(response);
	 			}else{
	 				var response = {
	 				code : 102,
	 				data : "No hay resultados disponibles",
	 				}
	 				res.send(response);
	 			}
	 
	 		}else{
	 			var response = {
	 				code : 100,
	 				data : "Consulta no Válida",
	 				err : err.message
	 			}
	 		}
	 });

 	 } else if (!(data.rut) && (status != "Activo") ) {

 	 cert.find({ "General.status" : status , "General.fecha_certificado" : { $gt : new Date (data.firstdate) , $lt : new Date (data.enddate) } }, 
 	 {General : true},
 	 function(err,result){
	 		if (!err){


				var response = {
					code : "001",
					data : result
				} 			
	
	 			res.send(response);
	 		}else{
	 			var response = {
	 				code : 100,
	 				data : "Consulta no Válida",
	 				err : err.message
	 			}
	 		}
	 });

 	 }
	 	



};


getCertActivos = function (req, res){

	var query;
	var status = req.params.code;
	var year = req.params.year;

	console.log(year);

	console.log("Obteniendo certificados por status y año ... ");

	if (status == 1){
		status = "Creado";
		query =  { 'General.status' : 'Creado' , 'General.fecha_certificado' : new Date ('2014-00-00') };
		console.log(query);
	}

	if (status == 2){
		status = "Pendiente";
		query = { 'General.status' : 'Pendiente' };
	}

	if (status == 3){
		status = "Listo";
		query = { 'General.status' : 'Listo' };
	}

	if (status == 4){
		status = "Activo";
		query = { 'General.status' : 'Activo' };
	}

	if (status == 5){
		status = "Cerrado";
		query = { 'General.status' : 'Cerrado' };
	}

	if (status == 0){
		status = "All";
		query = { };
	}




	console.log("Get Total certificados : Status = " + status );

	cert.count( query  , function (err , result ){

	 		if (!err){
	 			var response = {
	 				code : "001",
	 				title: "Total Certificados con status " + status,
	 				total : result
	 			}
	 			res.send(response);

		 	}else{
		 		var response = {
	 				code : "100",
	 				data : "Error en consulta",
	 				err : err.message
	 			}
	 			res.send(response);
		 	}

	 	});

};

getCertificados = function (req, res){

	console.log("Obteniendo certificados ... " );
	/*
	cert.find( {} , {} , {"General.fecha_certificado" : -1 } ,function(err , result ) {
		if (!err){
	 			var response = {
	 				code : "001",
	 				data : result
	 			}
	 			res.send(response);

		 	}else{
		 		var response = {
	 				code : "100",
	 				data : "Error en consulta",
	 				err : err.message
	 			}
	 			res.send(response);
		 	}

	});
	*/
	cert.find({}, {"General": 1, "CPE": 1}).sort({"General.fecha_certificado": "desc"}).exec(function(err, result){
		if(!err){
			var response = {
				code: "001",
				data: result
			}
			res.send(response);
		}else{
			var response = {
				code: "100",
				data: "Error en consulta",
				err: err.message
			}
			res.send(result);
		}
	});

};



/*
*
* 
* Pie Chart % Certificados por Status 
* http://techwizard.bsw.cl/speedtest/
* 
* Corresponde al Grafico tipo "pie" donde muestra % de certificados segun sus diferentes status, de acuerdo al total de certificados creados en un año especifico
*
*/





getCertByStatus = function (req, res) {

	console.log("Construyendo Pie Chart % Certificados por Status...");


	var yearConsult = n;


	var totalCertificados;

	var query = {'General.fecha_certificado' : { $gt : new Date(''+yearConsult+'-01-01') , $lt : new Date(''+yearConsult+'-12-31')}};

	  cert.count( query , function ( err, dataResult ){
	  	if (!err){
	  		totalCertificados = dataResult;
	  		
	  		cert.aggregate( [ { $match:{ 'General.fecha_certificado' : { $gte : new Date(''+yearConsult+'-01-01') , $lt : new Date(''+yearConsult+'-12-31') } } } , 
	  			{ $group : { 	_id : '$General.status' , 
	  							quantity : {$sum :1},
	  					   }
	  			},{
	  				 $project : { _id :0 ,
	  					  				
	  					  				quantity : 1,
	  					  				name : "$_id",
	  					  				//porcentaje : { $multiply : [ qu, 100 ] }
	  					  			 }
	  					},
	  					{
	  					  $sort : {
	  					  			name : 1
	  					  		  }
	  					}
	  				  ], 

	  function (err , result ){	

  	if (!err){
  		
		var i;

		for (i=0 ; i < (result.length) ; i++ ){
			var newKey = "y";
			var newValue = parseFloat( (result[i].quantity * 100) / totalCertificados ) ;
			newValue = Math.round(newValue*Math.pow(10,0))/Math.pow(10,0);
			result[i][newKey] = newValue;
			result[i]['name'] = result[i].name;
		};

  		var response = {
  			code: "001",
  			status: "true",
  			totalCertificados : totalCertificados,
  			data: result,	
  		};


  	
  		res.send(response);


  	}else{

  			var response = {
  			code: "200",
  			status: "false",
  			data: err.message,	
  		};


  	
  		res.send(response);

  	}

  });
	  	}else{
	  		res.send ("No hay certificados disponibles para la fecha seleccionada")
	  	}

	  }); 
}


/***************************/

//Agregar filtro de Año. 

getCertExtensores = function (req, res) {  

	console.log("Construyendo Pie Chart % Certificados con extensores...");


	var yearConsult = n;


	var totalCertificados;
	var conExtensores;
	var sinExtensores;


	  cert.count( {'Extensores' : { $exists : true } ,'General.fecha_certificado' : { $gte : new Date(''+yearConsult+'-01-01') , $lt : new Date(''+yearConsult+'-12-31') } } , function ( err, data ){
	  	if (!err){
	  		
	  		conExtensores = data;
	  	
					cert.count( {'Extensores' : { $exists : false }, 'General.fecha_certificado' : { $gte : new Date(''+yearConsult+'-01-01') , $lt : new Date(''+yearConsult+'-12-31') } } , function ( err, data2 ){
				  	if (!err){

				  		sinExtensores = data2;

						    cert.count({}, function ( err, data3 ){

						  	if (!err){

						  		totalCertificados = data3;

						  		promedio1 = parseFloat((conExtensores*100)/totalCertificados);
						  		promedio1 = Math.round(promedio1*Math.pow(10,0))/Math.pow(10,0);


						  		promedio2 = parseFloat((sinExtensores*100)/totalCertificados);
						  		promedio2 = Math.round(promedio2*Math.pow(10,0))/Math.pow(10,0);


						  		var result =  new Array();

						  		result[0] = { name : "Con Extensores" , y : promedio1 , q: conExtensores };
						  		result[1] = { name : "Sin Extensores" , y : promedio2 , q: sinExtensores };

						  		var response = {
						  			code :"200",
						  			status : "true",
						  			data : result
						  		}

						  		res.send(response); 
                                console.log (result);

						  	}else{
						  		res.send ("Error")
						  	}

						  })



				  	}else{
				  		res.send ("Error")
				  	}

				  });

	  	}else{
	  		res.send ("Error")
	  	}

	  });
}



/***************************/

//Agregar filtro de Año. 

getDashboard = function (req, res) {  

	console.log("Construyendo el Dashboard");


cert.aggregate([
    {$unwind: "$General"},
    {$match: {"General.status": "Activo"}},
    {$group: {
        _id: {month: {$month: "$General.fecha_activo"}, year:{$year: "$General.fecha_activo"}},
        count:{$sum: 1}
    }},     { $sort : { _id : 1 } }
], function ( err , data){
		if (!err){
	  		res.send(data);
	  	}else{
	  		console.log(err);
	  		res.send(err);
	  		
	  	}

});

}

getDetCert = function(req, res){
  var ids = req.params.ids;
  //var ids = req.body.ids;
  var aIds = new Array();

  tmpIds = ids.split("|");
  for(i=0; i < tmpIds.length; i++){
    aIds.push(tmpIds[i]);
  }

  console.log(aIds);

  cert.find({_id : {$in: aIds}}, function(err, result){
    if(!err){
      var response = {
        code: "200",
        status: true,
        data: result
      }

      res.send(response);
    }else{
      var response = {
        code: "100",
        status: "false",
        data: err.message
      }

      res.send(response);
    }
  });
}

/*******************/


//Link routes and functions
app.post ('/stats/getCertificadosCount/', getCountCertificados); 
app.get  ('/stats/getCertificadosActivos/:code/:year/', getCertActivos);
app.get  ('/stats/getCertificados/', getCertificados);

app.get   ('/stats/test/', getDashboard);
app.get   ('/stats/test2/', getDataResult2);
/* */
app.get ('/stats/dashboard/' , getDataResult );
app.get ('/stats/certbystatus/:year' , getCertByStatus);
app.get ('/stats/certbyextensor/:year' , getCertExtensores);
app.get ('/stats/getDetCert/:ids', getDetCert);
//app.post ('/stats/getDetCert/', getDetCert);

}
