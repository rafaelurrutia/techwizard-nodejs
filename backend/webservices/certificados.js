

module.exports = function(app) {

var Certificate =  require('../models/certificates.js');

var Results =  require ('../models/resultados_cumplimiento.js');

var User = require('../models/user.js');

var nodemailer  =  require("nodemailer");

var smtpTransport = require('nodemailer-smtp-transport');

var Request = require('request');

var data =  new Object();

var express = require("express");

var auth = express.basicAuth(function(user, pass){
  return (user == "baking" && pass == "bakingintraway");
});



/* parámetro fstr: %Y - año , %m - mes, %d - día, %H - hora, %M - minuto, %S - segundo parámetro utc: true, calcula la fecha y hora local */ 
Date.prototype.format = function(fstr, utc) { 
var that = this; 
utc = utc ? 'getUTC' : 'get'; 
return fstr.replace (/%[YmdHMS]/g, function (m) { 
switch (m) {
case '%Y': return that[utc + 'FullYear'] (); 
case '%m': m = 1 + that[utc + 'Month'] (); 
break;
case '%d': m = that[utc + 'Date'] (); 
break; 
case '%H': m = that[utc + 'Hours'] ();
break; 
case '%M': m = that[utc + 'Minutes'] (); 
break;
case '%S': m = that[utc + 'Seconds'] (); 
break; 
default: return m.slice (1);
 } 
 return ('0' + m).slice (-2); }); 
}; 

// de megabytes (mb) a kilobytes (kb) 
function mbToKb(MB) { return MB * 1024; }

// de kilobytes (kb) a megabytes (mb)
function kbToMb(KB) { return KB / 1024; }

function line (NM) { 
	for (i=0 ; i<NM ; i++){
		console.log("---------------------------------------------------------------------------");
	}
}


function headerMailSinWifi(fechacertificado, myObjectResult , year){

	//console.log(myObjectResult);

	line(2);

	var html = '<html><head><meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1"/><title></title><style type="text/css">body,td,th {font-family: Arial, Helvetica, sans-serif;	font-size: 10px;color: #000;}';
	html += 'body {	background-color: #FFF;	margin-left: 0px;margin-top: 0px;	margin-right: 0px;	margin-bottom: 0px;}</style></head><body>';
	html += '<table width="80%" border="0" cellspacing="0" cellpadding="0"><tr><td align="center" valign="middle" bgcolor="#FFFFFF"><table width="600" border="0" cellspacing="0" cellpadding="0"><tr>';
	html += '<td bgcolor="#FFFFFF"><table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td width="29" height="176" rowspan="2" bgcolor="#FFFFFF">&nbsp;</td><td width="116" height="110" bgcolor="#FFFFFF"><a href="http://vtr.com/" target="_blank"><img src="http://valorizacionvtr.cl/emails/2014/11/medicion_wifi/images/img_02.gif" alt="vtr.com" width="116" height="110" border="0" style="display:block" /></a></td>';
	html +=	'<td width="455" height="110" align="left" valign="middle" bgcolor="#FFFFFF"><img src="http://valorizacionvtr.cl/emails/2014/11/medicion_wifi/images/img_03.gif" alt="v&iacute;velo hoy" width="275" height="110" style="display:block" /></td>';												
	html += '</tr><tr><td width="571" height="66" colspan="2" align="left" valign="middle" bgcolor="#FFFFFF"><p style="font-family:Arial, Helvetica, sans-serif; font-size:12px; text-align:left; color:#000; margin-bottom:0; margin-left:0; margin-right:0; margin-top:0">Estimado Cliente:</p></td>';
	html += '</tr></table>'; 


	html += '<table width="100%" border="0" cellspacing="0" cellpadding="0"><tr bgcolor="#FFFFFF"><td width="29" height="422" rowspan="3">&nbsp;</td><td width="253" height="82"><img src="http://valorizacionvtr.cl/emails/2014/11/medicion_wifi/images/img_06.gif" alt="LA COBERTURA WIFI DE SU HOGAR HA SIDO CERTIFICADA" width="253" height="82" style="display:block" /></td>';
	if (year == "2014"){
	html += '<td width="318" height="422" rowspan="3"><img src="http://valorizacionvtr.cl/emails/2014/11/medicion_wifi/images/img_07.jpg" alt="cobertura wifi certificado 2014" width="318" height="422" style="display:block" /></td></tr>';
	}else{
	html += '<td width="318" height="422" rowspan="3"><img src="http://valorizacionvtr.cl/emails/2014/11/medicion_wifi/images/img_07_b.jpg" alt="cobertura wifi certificado 2015" width="318" height="422" style="display:block" /></td></tr>';	
	}
	html += '<tr bgcolor="#FFFFFF"><td width="253" height="89" align="left" valign="top"><p style="font-family:Arial, Helvetica, sans-serif; font-size:10px; text-align:left; color:#000; margin-bottom:0; margin-left:0; margin-right:0; margin-top:0">El d&iacute;a '+fechacertificado+' hemos certificado la cobertura WIFI de tu plan '+myObjectResult.plan_contratado+', recibido conforme por '+ myObjectResult.nombre_receptor +', ('+myObjectResult.parentesco_receptor+').</td></tr>';


	var htmlheader = html

	return htmlheader;

}


function headerMail(fechacertificado , myObjectResult , frec , year ){

	//console.log(myObjectResult);

	line(2);

	var html = '<html><head><meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1"/><title></title><style type="text/css">body,td,th {font-family: Arial, Helvetica, sans-serif;	font-size: 10px;color: #000;}';
	html += 'body {	background-color: #FFF;	margin-left: 0px;margin-top: 0px;	margin-right: 0px;	margin-bottom: 0px;}</style></head><body>';
	html += '<table width="80%" border="0" cellspacing="0" cellpadding="0"><tr><td align="center" valign="middle" bgcolor="#FFFFFF"><table width="600" border="0" cellspacing="0" cellpadding="0"><tr>';
	html += '<td bgcolor="#FFFFFF"><table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td width="29" height="176" rowspan="2" bgcolor="#FFFFFF">&nbsp;</td><td width="116" height="110" bgcolor="#FFFFFF"><a href="http://vtr.com/" target="_blank"><img src="http://valorizacionvtr.cl/emails/2014/11/medicion_wifi/images/img_02.gif" alt="vtr.com" width="116" height="110" border="0" style="display:block" /></a></td>';
	html +=	'<td width="455" height="110" align="left" valign="middle" bgcolor="#FFFFFF"><img src="http://valorizacionvtr.cl/emails/2014/11/medicion_wifi/images/img_03.gif" alt="v&iacute;velo hoy" width="275" height="110" style="display:block" /></td>';												
	html += '</tr><tr><td width="571" height="66" colspan="2" align="left" valign="middle" bgcolor="#FFFFFF"><p style="font-family:Arial, Helvetica, sans-serif; font-size:12px; text-align:left; color:#000; margin-bottom:0; margin-left:0; margin-right:0; margin-top:0">Estimado Cliente:</p></td>';
	html += '</tr></table>'; 


	html += '<table width="100%" border="0" cellspacing="0" cellpadding="0"><tr bgcolor="#FFFFFF"><td width="29" height="422" rowspan="3">&nbsp;</td><td width="253" height="82"><img src="http://valorizacionvtr.cl/emails/2014/11/medicion_wifi/images/img_06.gif" alt="LA COBERTURA WIFI DE SU HOGAR HA SIDO CERTIFICADA" width="253" height="82" style="display:block" /></td>';
	if (year == "2014"){
	html += '<td width="318" height="422" rowspan="3"><img src="http://valorizacionvtr.cl/emails/2014/11/medicion_wifi/images/img_07.jpg" alt="cobertura wifi certificado 2014" width="318" height="422" style="display:block" /></td></tr>';
	}else{
	html += '<td width="318" height="422" rowspan="3"><img src="http://valorizacionvtr.cl/emails/2014/11/medicion_wifi/images/img_07_b.jpg" alt="cobertura wifi certificado 2015" width="318" height="422" style="display:block" /></td></tr>';	
	}
	html += '<tr bgcolor="#FFFFFF"><td width="253" height="89" align="left" valign="top"><p style="font-family:Arial, Helvetica, sans-serif; font-size:10px; text-align:left; color:#000; margin-bottom:0; margin-left:0; margin-right:0; margin-top:0">El d&iacute;a '+fechacertificado+' hemos certificado la cobertura WIFI de tu plan '+myObjectResult.plan_contratado+', recibido conforme por '+ myObjectResult.nombre_receptor +' ('+myObjectResult.parentesco_receptor+').<br />El rango obtenido es el siguiente:</p></td></tr>';
				
	html += '<tr bgcolor="#FFFFFF">	<td width="253" height="251" align="center" valign="top"><table width="100%" border="0" cellspacing="0" cellpadding="0"><tr bgcolor="#FFFFFF"><td align="center" valign="top"><table width="147"  border="0" cellspacing="0" cellpadding="0" style="border-color:#F00; border-style:solid; border-width:1px">';
	html += '<tr><td height="30" colspan="2" align="center" valign="middle" bgcolor="#FFFFFF"><p style="font-family:Arial, Helvetica, sans-serif; font-size:9px; font-weight:bold; text-align:center; color:#000; margin-bottom:0; margin-left:0; margin-right:0; margin-top:0">CERTIFICADO <br />WIFI POR HABITACION</p></td>';
	html +=	'</tr><tr><td width="74" height="25" align="center" valign="middle" bgcolor="#FFFFFF"><p style="font-family:Arial, Helvetica, sans-serif; font-size:9px; text-align:center; color:#000; margin-bottom:0; margin-left:0; margin-right:0; margin-top:0">RED 2,4 GHZ</p></td>';
	
	if (frec == "true"){ //frec = 2.4 y 5.0 es True Muestra titulo 5.0 Hz
		html +=	'<td width="73" height="25" align="center" valign="middle" bgcolor="#FFFFFF"><p style="font-family:Arial, Helvetica, sans-serif; font-size:9px; text-align:center; color:#000; margin-bottom:0; margin-left:0; margin-right:0; margin-top:0">RED 5 GHZ</p></td>';
	}

	html +=	'</tr><tr><td colspan="2" bgcolor="#FFFFFF"><img src="http://valorizacionvtr.cl/emails/2014/11/medicion_wifi/images/line_1.gif" alt="download image" width="147" height="9" style="display:block" /></td></tr>';
	html += '<tr><td colspan="2" bgcolor="#FFFFFF"><table width="100%" border="0" cellspacing="0" cellpadding="0">';

	var htmlheader = html;

	return htmlheader;

}

function footerMail(myObjectResult){

	var html = '<p></p><table></table><table width="100%" border="0" cellspacing="0" cellpadding="0">';
	html += '<tr>';
	html += '<td width="29" height="90" rowspan="2" bgcolor="#FFFFFF">&nbsp;</td><td width="542" height="67" align="left" valign="top" bgcolor="#FFFFFF"><p style="font-family:Arial, Helvetica, sans-serif; font-size:10px; text-align:justify; color:#000; margin-bottom:0; margin-left:0; margin-right:0; margin-top:0">Los porcentajes que indicamos hacen referencia a la cobertura al momento de la medici&oacute;n de la se&ntilde;al WiFi realizada con equipos VTR acordes a la tecnolog&iacute;a que ofrecemos. Para obtener el mejor desempe&ntilde;o te sugerimos que constantemente actualices los dispositivos que conectas a WiFi seg&uacute;n los avances de la tecnolog&iacute;a.</p></td>';
	html +=	'<td width="29" height="90" rowspan="2" bgcolor="#FFFFFF">&nbsp;</td></tr><tr><td width="542" height="23" align="center" valign="middle" bgcolor="#FFFFFF" style="border-bottom-color:#89ADC1; border-bottom-style:solid; border-bottom-width:1px"><p style="font-family:Arial, Helvetica, sans-serif; font-size:10px; text-align:center; color:#000; margin-bottom:0; margin-left:0; margin-right:0; margin-top:0">PARA OBTENER EL MEJOR RENDIMIENTO, TEN EN CUENTA LO SIGUIENTE:</p></td>';
	html +=	'</tr></table><table width="100%" border="0" cellspacing="0" cellpadding="0"><tr align="center" bgcolor="#FFFFFF"><td width="29" height="100" align="center">&nbsp;</td><td width="149" height="100" align="left"><p style="font-family:Arial, Helvetica, sans-serif; font-size:9px; text-align:justify; color:#000; margin-bottom:0; margin-left:0; margin-right:0; margin-top:0">No debes mover el m&oacute;dem de '+myObjectResult.ubicacion_cpe+' para no afectar la certificaci&oacute;n realizada en tu hogar. </p></td>';
	html += '<td width="49" height="100"><img src="http://valorizacionvtr.cl/emails/2014/11/medicion_wifi/images/senal.gif" alt="download image" width="22" height="17" style="display:block" /></td><td width="146" height="100" align="left"><p style="font-family:Arial, Helvetica, sans-serif; font-size:9px; text-align:justify; color:#000; margin-bottom:0; margin-left:0; margin-right:0; margin-top:0">La distancia entre el m&oacute;dem y tu dispositivo har&aacute; que var&iacute;e la intensidad WiFi que percibas.</p></td>';
	html += '<td width="49" height="100"><img src="http://valorizacionvtr.cl/emails/2014/11/medicion_wifi/images/senal.gif" alt="download image" width="22" height="17" style="display:block" /></td>';
	html += '<td width="149" height="100" align="left"><p style="font-family:Arial, Helvetica, sans-serif; font-size:9px; text-align:justify; color:#000; margin-bottom:0; margin-left:0; margin-right:0; margin-top:0">El material del que est&aacute;n construidos los muros y obst&aacute;culos f&iacute;sicos existentes en tu hogar pueden disminuir tu se&ntilde;al WiFi.</p></td>';
	html +=	'<td width="29" height="100">&nbsp;</td></tr>';
	html += '</table><table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td width="120" height="128" rowspan="3" align="right" valign="bottom" bgcolor="#FFFFFF"><img src="http://valorizacionvtr.cl/emails/2014/11/medicion_wifi/images/img_21.gif" alt="mail seguro" width="120" height="128" style="display:block" /></td><td width="480" height="62" colspan="2" align="left" valign="bottom" bgcolor="#FFFFFF"><p style="font-family:Arial, Helvetica, sans-serif; font-size:9px; text-align:justify; color:#000; margin-bottom:0; margin-left:0; margin-right:0; margin-top:0"> Visita nuestro sitio www.vtr.com/wifi, donde encontrar&aacute;s todas las soluciones y tips que tenemos para<br />';
	html += 'ampliar la cobertura de tu hogar y as&iacute; disfrutes una mejor experiencia.<br />En VTR jam&aacute;s te pediremos datos personales a trav&eacute;s de correo electr&oacute;nico y siempre te alertaremos<br />por posibles fraudes o &quot;phishing&quot; que se est&eacute;n realizando. Si tienes consultas o sugerencias, vis&iacute;tanos <br />en VTR.com o en nuestro chat online de Sucursal Virtual de VTR.</p></td>';
	html += '</tr><tr><td width="480" height="11" colspan="2" bgcolor="#FFFFFF"><img src="http://valorizacionvtr.cl/emails/2014/11/medicion_wifi/images/img_23.gif" alt="download image" width="480" height="11" style="display:block" /></td></tr><tr><td width="287" height="55" align="left" valign="middle" bgcolor="#171513"><p style="font-family:Arial, Helvetica, sans-serif; font-size:9px; text-align:left; color:#FFF; margin-bottom:0; margin-left:0; margin-right:0; margin-top:0; line-height:12px !important">Todos los derechos reservados VTR Global S.A.<br />';
	html +=	'<a href="http://vtr.com/politicas.php" target="_blank" style="color:#FFF">Condiciones de uso</a>|<a href="http://vtr.com/normas.php" target="_blank" style="color:#FFF">Norma</a>|<a href="http://vtr.com/formularios2/svirtual-formulario/" target="_blank" style="color:#FFF">Contacto</a>|<a href="http://vtrinternetsegura.cl/" target="_blank" style="color:#FFF">VTR Internet Seguro</a></p></td><td width="193" height="55" bgcolor="#171513"><img src="http://valorizacionvtr.cl/emails/2014/11/medicion_wifi/images/img_25.gif" alt="vtr" width="193" height="55" style="display:block" /></td></tr></table>';
	html += '</td></tr></table></td></tr></table></body></html>';

	var htmlFooter = html;

	return htmlFooter;

}

/* Calculo de Velocidad y % de Cumplimiento segun frecuencia 

Unidad de Medida = Kbps (Kb por segundo)
	
	Parametros de Entrada:
	

	vel_nac_cpe 			= 	Velocidad nacional via CPE bajada
	vel_plan				=   Velocidad del Plan Contratado (Descarga)			
	frec_cpe				= 	Frencuencia CPE
	vel_nac_wifi24			= 	Velocidad nacional via WiFi 2.4 GHz 
	vel_nac_wifi50			=	Velocidad nacional via WiFi 5.0 GHz 
	


	Parametros de Salida:

	calculo_cpe 	= 	% Cumplimiento Cable
	calculo_wifi24  =	% Cumplimiento WiFi en 2.4 GHz
	calculo_wifi50  = 	% Cumplimiento WiFi en 5.0 GHz
	 _______________________
	| 		General 		|
	|-----------------------|
	| vel_plan				|
	| frec_cpe				|
	|_______________________|

	Formula 1: % cumpliento Cable

	calculo_cpe =      vel_nac_cpe
					------------------
					   	vel_plan

	Formula 2: % Cumplimiento WiFi en 2.4 GHz:

*/
 
function_calculo_cpe =  function ( vnc  , vp , fr , vel_wifi ) {

var calculo_cpe ;
var calculo_wifi;


var vel_plan = vp;
var vel_nac_cpe = vnc;
var frec_cpe = fr;
var vel_nac_wifi = vel_wifi;

var result = new Array();

	//console.log("Parametros que recibe :   " + "Velocidad Nacional via CPE " +vnc + "MB- Velocidad Plan Contratado- " + vp+ "MB- Frecuencia: " + fr +"Hz -Velocidad_Wifi: "+ vel_nac_wifi +"MB" )
	calculo_cpe =  ((vel_nac_cpe / vel_plan)*100);
	calculo_cpe = (calculo_cpe > 100 )? 100 : calculo_cpe;

	calculo_wifi = (vel_nac_wifi / (Math.min(vel_plan , vel_nac_cpe)) ) ; 	
	calculo_wifi = (calculo_wifi.toFixed(2)*100);
	calculo_wifi = (calculo_wifi > 100 ) ? 100 : calculo_wifi;
	//console.log ("% Cumplimiento wifi en Frecuencia= " + fr + " - " + calculo_wifi + "%");

	result['porcentaje_cunplimiento_cpe'] = calculo_cpe;
	result['porcentaje_cumplimiento_wifi'] = calculo_wifi

return (result);


} //end calculo_cpe


/*
*  Resultado:
*  Débil = 1
*  Moderado = 2
*  Potente = 3
*/


function_tabla_resultados =  function ( velocidad , intensidad ) {

var value_result;


if ((velocidad >= 0 && velocidad <= 30) && (intensidad >= 0 && intensidad <= 30)){
	value_result = 1;
} 
else if ((velocidad >= 0 && velocidad <= 30) && (intensidad >= 30 && intensidad <= 65)){
	value_result = 1;
}
else if ((velocidad >= 0 && velocidad <= 30) && (intensidad >= 65 && intensidad <= 100)){
	value_result = 2;
}


else if ((velocidad >= 30 && velocidad <= 65) && (intensidad >= 0 && intensidad <= 30)){
	value_result = 1;
}
else if ((velocidad >= 30 && velocidad <= 65) && (intensidad >= 30 && intensidad <= 65)){
	value_result = 2;
}
else if ((velocidad >= 30 && velocidad <= 65) && (intensidad >= 65 && intensidad <= 100)){
	value_result = 2;
}



else if ((velocidad >= 65 && velocidad <= 100) && (intensidad >= 0 && intensidad <= 30)){
	value_result = 2;
}
else if((velocidad >= 65 && velocidad <= 100) && (intensidad >= 30 && intensidad <= 65)){
	value_result = 3;
}
else if ((velocidad >= 65 &&velocidad <= 100)&&(intensidad >= 65 && intensidad <= 100) ) {
	value_result = 3;
}

return value_result;

} // end function_tabla_resultados



/*____________________________________________________*/


/*
*	WS SetCertificado
*	req : 
*		certificado : Object,
*	res:
*		new Certificado
*		CODE
*		001: true
*		200: false
*
*/

setCertificado = function ( req , res ) {

	console.log("Consumiendo Webservices SetCertificado....");


	dataGen = req.body['General'];
	dataLoc = req.body['Locaciones'];
	dataCpe = req.body['CPE'];
	dataExt = req.body['Extensores'];



	var certificado = new Certificate({	
 		General:[{
    	idem_servicio 		 : dataGen['idem_servicio'],
	    rut_cliente    		 : dataGen['rut_cliente'],
	    id_tecnico			 : dataGen['ID_Tecnico'],
	    mail_cliente   		 : dataGen['mail_cliente'],
	    status				 : dataGen['status'],
	    tipo_OT				 : dataGen['tipo_OT'],
	    presencia_wifi		 : dataGen['presencia_wifi'],
	    fecha_certificado	 : dataGen['fecha_certificado'],
	    fecha_activo		 : dataGen['fecha_activo'],
	    nombre_receptor		 : dataGen['nombre_receptor'],
	    parentesco			 : dataGen['parentesco'],
	    pisos				 : dataGen['pisos'],
	    orden_tecnica		 : dataGen['orden_tecnica'],
	    plan:{
	    	nombre : dataGen['plan']['nombre'],
	    	subida : dataGen['plan']['subida'],
	    	bajada : dataGen['plan']['bajada']
	    },

   		wifi_propia: dataGen['wifi_propia']
 	}],
 	Locaciones:[{
 		tipo_vivienda 				 : dataLoc['tipo_vivienda'],
 		habitaciones				 : dataLoc['habitaciones'],
 	}],
 	CPE:[{
 		tipo 				 : dataCpe['tipo'],
 		modelo				 : dataCpe['modelo'],
 		mac				 : dataCpe['mac'],
 		frecuencia		 : dataCpe['frecuencia'],
 		ubicacion				 : dataCpe['ubicacion'],
 		ubicacion_aceptada				 : dataCpe['ubicacion_aceptada'],
 		observacion				 : dataCpe['observacion'],
		}],
	Extensores : dataExt,
    
    }); 


	

	certificado.save(function(err) {
	      if(!err) {
	      	//res.send(dataExt);
	        console.log('Certificado Creado');
	        	var response = {
	   		    status : "true", 
	    		code : "001"
	    	} ;
			res.send(response);  
	      } else {
	        console.log('ERROR AL CREAR CERTIFICADO: ' + err);
	        	var response = {
	   		    status : "false", 
	    		code : "200"
	    	} ;
			res.send(response);  
	      }
	}); 
};

/*
*	WS getCertificado
*	req : 
*		rut_cliente : String,
*	res:
*		Lista de todos los certificados asociados a ese req.rut_cliente
*		CODE
*		001: true
*		200: false
*
*/

getCertificado = function ( req , res ){

	console.log("Consumiendo Webservices getCertificado...");

	var cert = new Object();
	Certificate.find({"General.rut_cliente": req.body.rut_cliente , "General.status" : { $nin : [ "Cerrado" ] } }, function(err, certificados){
		if(!err){
			console.log("Certificados Disponibles Rut_cliente: "+ req.body.rut_cliente);
			res.send(certificados);
		}else{
			console.log('No existen Certificados asociados al RUT');
            var response = {
            status : "false", 
            code : "200"
            };
            res.send(response);
		}
	});
};

/*
*	WS getCertificado
*	req : 
*		rut_cliente : String,
*	res:
*		Lista de todos los certificados asociados a ese req.rut_cliente
*		CODE
*		001: true
*		200: false
*
*/


/*
getListCertificado = function ( req , res ){

	console.log("Consumiendo Webservices getCertificado...");

	var cert = new Object();
	Certificate.find({"General.rut_cliente": req.body.id_cliente , "General.status" : { $nin : [ "Cerrado" ] } }, function(err, certificados){
		if(!err){
			console.log("Certificados Disponibles Rut_cliente: "+ req.body.id_cliente);
			console.log(certificados);
			res.send(certifcados); 
		}else{
			console.log('No existen Certificados asociados al RUT');
            		var response = {
            			status : "false", 
            			code : "200",
            			err : err
            		};
            		res.send(response);
		}
	});
};
*/

getListCertificado = function(req, res){
  console.log("rut_cliente: " + req.body.rut_cliente);
  Request.post({ url: 'http://qa1.tw.bsw.cl/getListCertificate.php', headers: {'content-type': 'application/json'}, body: '{"rut_cliente":"'+req.body.rut_cliente+'"}'}, function(err, remoteResponse, remoteBody){
    if(err){
      return res.status(500).end('500');
    }else{
      res.set('Content-Type', "application/json");
      res.end(remoteBody);
    }
  });
};


getListCertificadoByIDtecnico = function ( req , res ){

	console.log("Consumiendo Webservices getListCertificadoByIdTecnico...");

	var cert = new Object();
	Certificate.find({"General.rut_cliente": req.params.idtecnico}, function(err, certificados){
		if(!err){
			console.log("Certificados Disponibles por Id_tecnico: "+ req.params.id_tecnico);
			//res.send(certificados);
			var response = {
							    status : "true", 
							    code : "001",
							    data : certificados,
							    } ;
							res.send(response); 
		}else{
			console.log('No existen Certificados asociados al RUT');
            var response = {
            status : "false", 
            code : "200"
            };
            res.send(response);
		}
	});
};


/*
*	WS addSpeedTest
*	req : 
*		rut_cliente : String,
*		status: String,
*		CPE.mac : String
*	res:
*		Agrega Prueba SpeedTest al CertificadoGeneral
*		Cambia Status Certificado
*		CODE
*		001: true
*		200: false
*
*/

addSpeedTest = function ( req , res ){

	console.log("Consumiendo Webservices addSpeedTest...");

	var st = new Object;
	st = req.body['Prueba_ST'];

			//res.send(st);
	console.log("addSpeedTest");

	if (req.body.status == "Creado") {

	var params = {"General.rut_cliente": req.body.rut_cliente, "General.status": req.body.status,"CPE.mac" :req.body.mac };

		var item = {
		    "nacional": {
		    	"subida": st.subidaN,
		    	"bajada": st.bajadaN
		    },
		    "internacional":{
		    	"subida": st.subidaI,
		    	"bajada": st.bajadaI
		    }
		};

	var statusa = "General.status_final";


	Certificate.findOneAndUpdate(params,{$push:{ Pruebas_ST : item }},{safe:true,upsert:true},function(err,cert){

		if(!err){

		console.log("AddSpeedTest");
		
		Certificate.findOneAndUpdate(params ,{$set:{ 'General.0.status' : req.body.status_final }},{safe:true,upsert:true},function(err,cert){

						if(!err){
						console.log("actualizar status");
							var response = {
							    status : "true", 
							    code : "001"
							    } ;
							res.send(response); 
						}else{
							console.log(err);
							var response = {
				            status : "false", 
				            code : "200",
				            err : err.message
				            };
				            res.send(response);
						}

			});		

	}else{
			console.log(err);
			var response = {
            status : "false", 
            code : "200",
            err: "No existe el certifcado"
            };
            res.send(response);
		}
	});



	} else {  // El estatus del Certificado no es CREADO

		var response = {
            status : "false", 
            code : "200",

            };
            res.send(response);
	}

};


/*
*	WS addPruebaWifi
*	req : 
*		rut_cliente : String,
*		CPE.mac : String
*	res:
*		Agrega Prueba Wifi al CertificadoGeneral
*		
*		CODE
*		001: true
*		200: false
*
*/

addPruebaWifi = function ( req , res ){

	console.log("Consumiendo Webservice AddPruebaWifi...");

	var st = new Object;
	st = req.body['Pruebas_WiFi'];

	//st =  utf8_encode(st);
	
    var fecha_serv = new Date();

	console.log("AddPruebaWifi");

	var params = {"General.rut_cliente": req.body.rut_cliente, "CPE.mac" :req.body.mac, "General.status": req.body.status};


	Certificate.findOneAndUpdate(params,{$push:{ 'Pruebas_Wifi.0.habitacion' : st }},{safe:true,upsert:true},function(err,cert){

		if(!err){
		console.log("Prueba Wifi Agregada Satisfactoriamente");
		
			var response = {
			    status : "true", 
			    code : "001"
			    } ;
			res.send(response); 
		}else{
			
			var response = {
            status : "false", 
            code : "200",
            err : err
            };
            res.send(response);
            console.log(response);
		}
	});

}

/*
*	WS updateStatus
*	req : 
*		General.rut_cliente : String,
*		CPE.mac : String,
*		General.status : String
*		status_final : String --> { "ACTIVO" }       
*
*	res:
*		Actualiza estado Certificado / Cambia Estado y Finaliza Certificado
*		Envia mail de certificación al cliente
*
*		CODE
*		001: true
*		200: false
*
*/

updateStatus2 = function ( req , res ){	
	line(2);

	console.log("Consumiendo Webservices Update Status...");

	var status_final = req.body.status_final;
	var fecha_activo =  new Date();
	
	var finalReport = {};

	var update = (req.body.status_final == "Activo" ) ? "{'General.0.status' : req.body.status_final, 'General.0.fecha_activo' : fecha_activo}" : "{'General.0.status' : req.body.status_final}";

	console.log(update);

	console.log("Change status Certificado to Active");

	var params = {"General.rut_cliente": req.body.rut_cliente, "CPE.mac" :req.body.mac , "General.status" : req.body.status_inicial};


if (req.body.status_final == "Activo"){ 
	Certificate.findOneAndUpdate(params ,{$set:{'General.0.status' : req.body.status_final, 'General.0.fecha_activo' : fecha_activo}},{safe:true,upsert:true},function(err,cert){

		if(!err) {

			console.log(cert);
			console.log("actualizar status "+ req.body.status_final);
			var response = {
			    status : "true", 
			    code : "001"
			    } ;
			res.send(response); 

			fechaCertificacion= fecha_activo.format ("%d/%m/%Y", true);
	//		console.log ("Fecha de Certificacion para envio de email  " + fechaCertificacion);
			// console.log(JSON.stringify(cert));

			var planContratado = cert.General[0].plan.nombre;
	//		console.log("Plan Contratado");

			//*************************************************************************************************//


			var pruebasWifi= cert.Pruebas_Wifi.length;
console.log("pruebasWIFI "+pruebasWifi);
line(3);
	if (pruebasWifi > 0){

			var numHabitacion = (cert.Pruebas_Wifi[0].habitacion).length;
	//		console.log("Numero de Habitaciones con Pruebas WiFi = " + numHabitacion);


			var habitacionObject = cert.Locaciones[0]['habitaciones']; // Objeto
			//console.log("" , habitacionObject);
			var totalHabitacion = [];
			var nameHabitacion = [];
			i = 0;
			for (totalHabitacion[i++] in  habitacionObject ){
				var lastItem = totalHabitacion.length - 1;
				nameHabitacion.push(habitacionObject[totalHabitacion[lastItem]]);
			}; // Convert Object to Array
	//		console.log (nameHabitacion);
			nameHabitacion = nameHabitacion.length;
	//		console.log("Numero de Habitaciones Añadidas = " + nameHabitacion);
			//*************************************************************************************************//
	

 			//var num = Math.round((kbToMb(20000)).toFixed(2));
 			//console.log("Plan Contratado:  "+num + " MB");

 			/** LLamada a la funcion para calcular % de Cumplimiento segun sea el caso **/
 			//	function_calculo_cpe =  function ( vnc  , vp , fr , vel_wifi_2 , vel_wifi_5 ) 

 			//Velocidad del Plan Contratado
			var vel_plan =  cert.General[0].plan.bajada;
		//	console.log("Velocidad Nacional Plan Contratado Descarga = " + vel_plan + " Kbps");
			vel_plan = Math.round((kbToMb(vel_plan)).toFixed(2));
		//	console.log("Velocidad Nacional Plan Contratado Descarga = " + vel_plan + " MB");

			// Velocidad Nacional via CPE (Bajada)
			var vel_nac_cpe = cert.Pruebas_ST[0].nacional.bajada;
		//	console.log("Velocidad Nacional via CPE de Descarga = " + vel_nac_cpe + " Kbps" );
			vel_nac_cpe = Math.round((kbToMb(vel_nac_cpe)).toFixed(2));
		//	console.log("Velocidad Nacional CPE  Descarga = " + vel_nac_cpe + " MB");

			//Frecuecia CPE
			var frec_cpe = (cert.CPE[0].frecuencia); 
		//	console.log("Frecuencia CPE = " + frec_cpe);

			//*************************************************************************************************//

 			var tabla_x_habitacion = {};

 			var tabla2 = {};
 			var tabla5 = {};
 			var resultado_tabla = {};
 			var j;

 			for ( j = 0 ; j < numHabitacion ; j++ ) {


 					var res_st_velocidad = cert.Pruebas_Wifi[0].habitacion[j]['Habitacion']['Prueba_ST']['bajadaN'];
 					var frec_wifi = cert.Pruebas_Wifi[0].habitacion[j]['Habitacion']['Frecuencia'] ;
 					var habitacion_act = cert.Pruebas_Wifi[0].habitacion[j]['Habitacion']['Ubicacion'];
 					var velocidad_prueba = Math.round((kbToMb(res_st_velocidad)).toFixed(2));
 					var porcentaje_intensidad = cert.Pruebas_Wifi[0].habitacion[j]['Habitacion']['Intensidad_Señal'];
 					var porcentaje_intensidad = porcentaje_intensidad.replace("%", "");
 					var resultado_operacion = function_calculo_cpe(vel_nac_cpe, vel_plan, frec_cpe, velocidad_prueba);
 
 					cumplimiento_cpe = resultado_operacion.porcentaje_cunplimiento_cpe;
 					cumplimiento_wifi = resultado_operacion.porcentaje_cumplimiento_wifi;
					
					resultado_tabla =  function_tabla_resultados (cumplimiento_wifi , porcentaje_intensidad );

					if (resultado_tabla == "1"){
		 				valor = "Débil";
		 			}else if (resultado_tabla == "2"){
		 				valor = "Moderado"
		 			}else if (resultado_tabla == "3"){
		 				valor = "Potente"
		 			}

		 			console.log("RESULTADO = " + valor);

		 			tabla_x_habitacion[j] ={ 
 											
 											  habitacion : cert.Pruebas_Wifi[0].habitacion[j]['Habitacion']['Ubicacion'] , 
 											  velocidad_cpe :  velocidad_prueba,
 											  intensidad : porcentaje_intensidad, 
 											  frecuencia :  frec_wifi,
 											  porc_cpe : cumplimiento_cpe,
 											  porc_wifi : cumplimiento_wifi,
 											  value_mail : resultado_tabla,
 											 

 											};


		 		if (frec_wifi == "2.4" ){	
		 			
		 			tabla2[j] ={ 
 											
 											  habitacion : cert.Pruebas_Wifi[0].habitacion[j]['Habitacion']['Ubicacion'] , 
 											  velocidad_cpe :  velocidad_prueba,
 											  intensidad : porcentaje_intensidad, 
 											  frecuencia :  frec_wifi,
 											  porc_cpe : cumplimiento_cpe,
 											  porc_wifi : cumplimiento_wifi,
 											  value_mail : resultado_tabla,
 											 

 											};
 											
				}	
	 			else {
		 			valueBollean	= "false" ;

 					tabla5[j] = { 
 											
 											  habitacion : cert.Pruebas_Wifi[0].habitacion[j]['Habitacion']['Ubicacion'] , 
 											  velocidad_cpe :  velocidad_prueba,
 											  intensidad : porcentaje_intensidad, 
 											  frecuencia :  frec_wifi,
 											  porc_cpe : cumplimiento_cpe,
 											  porc_wifi : cumplimiento_wifi,
 											  value_mail : resultado_tabla,
 											  

 											};
 										
 										};
 			

 			}; //end FOR
 			console.log(tabla2);
 			console.log(tabla5);


			line(3);

			/** Construccion de reporte final **/

			finalReport = new Results({	
		 		codigo_tecnico		 : cert.General[0].orden_tecnica,
			    rut_cliente    		 : cert.General[0].rut_cliente,
			    id_tecnico			 : cert.General[0].id_tecnico,
			    mac_cpe		   		 : cert.CPE[0].mac,   
			    tipo_OT				 : cert.General[0].tipo_OT,
			    fecha_certificado	 : cert.General[0].fecha_certificado,
			    mail_recibido		 : cert.General[0].mail_cliente,
			    nombre_receptor		 : cert.General[0].nombre_receptor,
			    parentesco_receptor	 : cert.General[0].parentesco,
			    ubicacion_cpe 		 : cert.CPE[0].ubicacion,
			    plan_contratado		 : planContratado,
			    estado				 : cert.General[0].status,
			    id_certificado       : cert._id,	
			    resultados 			 : tabla_x_habitacion
		    
		    }); 
			var dataResult = {};			
			dataResult = finalReport;
			
			
			finalReport.save(function(err) {
			      if(!err) {
			        console.log('Reporte Final Guardado ...');
			        	var response = {
			   		    status : "true", 
			    		code : "001"
			    	} ; 
			      } else {
			        console.log('ERROR AL CREAR Reporte de Resultados: ' + err);
			        	var response = {
			   		    status : "false", 
			    		code : "200"
			    	} ;
			      }
			});
			

	//var transport = nodemailer.createTransport("direct", {debug: false}); // Devel1.baking.cl

 			//Conexion desde producción para VTR

		var transport = nodemailer.createTransport('SMTP',{
                                           host: 'smtp.vtr.net',
                                           port: '25',
                                           auth: {
                                               user: 'certificacion.internet@vtr.net',
                                               pass: 'certiwifi1234'
                                           }
            }); 
					
		 		var myObject =  finalReport.resultados;
	console.log("Resultado final");
	console.log(myObject);
line(5);
		 		var frec;
				var d = new Date();
				var yearActual = d.getFullYear(); //Año Actual

		 		if (frec_cpe =="5.0"){
		 			frec = "true";
		 		}

		 		var html_mail = headerMail(fechaCertificacion , dataResult , frec , yearActual);
		html_mail+=	'<table>';
		html_mail+=	'<td>';
		html_mail+=	'<table>';	
		
		for ( var t in  tabla2){ 
	
								if (tabla2[t].value_mail == "1"){
									 imgM = "<img src='http://techwizarddev.baking.cl/img/mailVTR/2.png' alt='download image' width='10' height='9' style='display:block'/>";
								}else if (tabla2[t].value_mail == "2" ){
									 imgM = "<img src='http://techwizarddev.baking.cl/img/mailVTR/1.png' alt='download image' width='10' height='9' style='display:block'/>";
								}else if (tabla2[t].value_mail == "3" ){
									 imgM = "<img src='http://techwizarddev.baking.cl/img/mailVTR/4.png' alt='download image' width='10' height='9' style='display:block'/>";
								} 
			//	html_mail+= ' <div style="margin:2px 3px 2px 2px; padding: 5px 5px; width:150px; height:auto; float:left; font-size:10px"> ';
			//	html_mail+= ' <div style="display: block ; width: 24px; height:10px ; float: left; position: relative;">' + imgM +'</div> '+myObject[t].habitacion+' ('+  myObject[t].frecuencia +' Hz) <br/> </div>';
		
		html_mail+=	'<tr>';
		html_mail+=	'<td width="18" height="16" align="center" valign="middle" bgcolor="#FFFFFF">';
		html_mail+=	imgM;
		html_mail+=	'</td>';
		html_mail+=	'<td height="16" align="left" valign="middle" bgcolor="#FFFFFF">';
		html_mail+=	'<p style="font-family:Arial, Helvetica, sans-serif; font-size:9px; text-align:left; color:#000; margin-bottom:0; margin-left:0; margin-right:0; margin-top:0">'+tabla2[t].habitacion+'</p>';
		html_mail+=	'</td>';
		html_mail+=	'</tr>';

						} //end for		tabla2


		html_mail+=	'</table>';
		html_mail+=	'</td>';
		html_mail+=	'<td>';
		html_mail+=	'<table>';	

		for ( var s in  tabla5){ 
	
								if (tabla5[s].value_mail == "1"){
									 imgM = "<img src='http://techwizarddev.baking.cl/img/mailVTR/2.png' alt='download image' width='10' height='9' style='display:block'/>";
								}else if (tabla5[s].value_mail == "2" ){
									 imgM = "<img src='http://techwizarddev.baking.cl/img/mailVTR/1.png' alt='download image' width='10' height='9' style='display:block'/>";
								}else if (tabla5[s].value_mail == "3" ){
									 imgM = "<img src='http://techwizarddev.baking.cl/img/mailVTR/4.png' alt='download image' width='10' height='9' style='display:block'/>";
								}
	
		html_mail+=	'<tr>'; 
		html_mail+=	'<td width="18" height="16" align="center" valign="middle" bgcolor="#FFFFFF">';
		html_mail+=	imgM;
		html_mail+=	'</td>';
		html_mail+=	'<td height="16" align="left" valign="middle" bgcolor="#FFFFFF">';
		html_mail+=	'<p style="font-family:Arial, Helvetica, sans-serif; font-size:9px; text-align:left; color:#000; margin-bottom:0; margin-left:0; margin-right:0; margin-top:0">'+tabla5[s].habitacion+'</p>';
		html_mail+=	'</td>';
		html_mail+=	'</tr>';


			} //end for		tabla5


				html_mail+=	'</table>';
				html_mail+=	'</td>';
				html_mail+=	'</table>';
				html_mail += '</table></td></tr></table></td>'; 
				//referencia Semaforo
				html_mail += '<td width="13">&nbsp;</td><td align="center" valign="top"><table width="93" border="0" cellspacing="0" cellpadding="0" style="border-color:#F00; border-style:solid; border-width:1px"><tr><td width="93" height="40" align="center" valign="middle" bgcolor="#FFFFFF"><p style="font-family:Arial, Helvetica, sans-serif; font-size:9px; font-weight:bold; text-align:center; color:#000; margin-bottom:0; margin-left:0; margin-right:0; margin-top:0">REFERENCIA COBERTURA WIFI</p></td></tr><tr><td height="22" align="center" valign="bottom" bgcolor="#FFFFFF"><img src="http://valorizacionvtr.cl/emails/2014/11/medicion_wifi/images/line_2.gif" alt="download image" width="93" height="8" style="display:block" /></td></tr><tr><td height="171" align="center" valign="middle" bgcolor="#FFFFFF"><img src="http://valorizacionvtr.cl/emails/2014/11/medicion_wifi/images/grafico.gif" alt="REFERENCIA COBERTURA WIFI" width="79" height="166" style="display:block" /></td></tr></table></td>';
				html_mail += '</tr>	</table> 	</td> </tr> 	</table> ';
				html_mail += footerMail(dataResult);

}else {



	var d = new Date();
	var yearActual = d.getFullYear(); //Año Actual
	//var transport = nodemailer.createTransport("direct", {debug: true}); // Devel1.baking.cl
	
	var transport = nodemailer.createTransport('SMTP',{
                                           host: 'smtp.vtr.net',
                                           port: '25',
                                           auth: {
                                               user: 'certificacion.internet@vtr.net',
                                               pass: 'certiwifi1234'
                                           }
            }); 

	finalReport = new Results({	
		 		codigo_tecnico		 : cert.General[0].orden_tecnica,
			    rut_cliente    		 : cert.General[0].rut_cliente,
			    id_tecnico			 : cert.General[0].id_tecnico,
			    mac_cpe		   		 : cert.CPE[0].mac,   
			    tipo_OT				 : cert.General[0].tipo_OT,
			    fecha_certificado	 : cert.General[0].fecha_certificado,
			    mail_recibido		 : cert.General[0].mail_cliente,
			    nombre_receptor		 : cert.General[0].nombre_receptor,
			    parentesco_receptor	 : cert.General[0].parentesco,
			    ubicacion_cpe 		 : cert.CPE[0].ubicacion,
			    plan_contratado		 : planContratado,
			    estado				 : cert.General[0].status,
			    id_certificado       : cert._id	

			  	    }); 

			var dataResult = {};
			
			dataResult = finalReport;

						
			finalReport.save(function(err) {
			      if(!err) {
			        console.log('Reporte Final Guardado sin pruebas WIFI ...');
			        	var response = {
			   		    status : "true", 
			    		code : "001"
			    	} ; 
			      } else {
			        console.log('Error al guardar reporte sin pruebas wifi  ' + err);
			        	var response = {
			   		    status : "false", 
			    		code : "200"
			    	} ;
			      }
			}); 	
			

	var html_mail = headerMailSinWifi(fechaCertificacion, dataResult , yearActual);
	html_mail += footerMail(dataResult);
	console.log("No hay pruebas wifi asociadas al certificado");

	}	

	//_________________________________________________________________________________________________________________________________________________________________________//


						// setup e-mail data with unicode symbols
						var mailOptions = {
						    from: "certificacion.internet@vtr.net", // sender address
						    to: cert.General[0].mail_cliente, // list of receivers
						    subject: "VTR Certificación Internet", // Subject line
						    text: "Certificado VTR", // plaintext body
						    html: html_mail // html body
						}
line(2);
console.log(mailOptions);

						var idCert = cert._id;

						// send mail with defined transport object

					/*
					transport.sendMail(mailOptions, function(error, response){
						    if(error){
						    	Reports.findOneAndUpdate({"id_certificado": idCert}, {$set: {"enviado": "false"}}, function(err, report){
						    		if(!err){
						    			console.log("error registro resultados actualizado a enviado: false");
						    		}else{
						    			console.log("registro resultados actualizado a enviado: false");
						    		}
						    	});
						        console.log('Error occured');
						        console.log(error);
						        return;
						    }else{
						    	Reports.findOneAndUpdate({"id_certificado": idCert}, {$set: {"enviado": "true"}},function(err, report){
						    		if(!err){
						    			console.log("error registro resultados actualizado a enviado: true");
						    		}else{
						    			console.log("registro resultados actualizado a enviado: true");
						    		}
						    	});
						        console.log(response);
						        console.log('Message sent successfully!');
						    }

						    // if you don't want to use this transport object anymore, uncomment following line
						    //smtpTransport.close(); // shut down the connection pool, no more messages
						});
					*/
					
					var idTecnico = cert.General[0].id_tecnico;

                    if(req.body.id_tecnico != ""){
                    	idTecnico = req.body.id_tecnico;
                    }
                    
		/*
                    User.findOne({"username": idTecnico}, function(err, result){
						if(!err){
							if(result.email != ""){
								var mailOpt = {
										from: "certificacion.internet@vtr.net",
                                        to: result[0].email,
                                        subject: "VTR Certificación Internet",
                                        text: "Certificado VTR",
                                        html: html_mail
								};

								transport.sendMail(mailOpt, function(error, response){
                                	if(error){
                                    	console.log('Error occured');
                                        console.log(error);
                                        return;
                                   	}else{
                                    	console.log(response);
                                        console.log('Message sent successfully!');
                                    }
								});
							}
						}else{
							console.log("error al enviar copia a tecnico");
						}
					});
			*/
   					

	line(3);

}else{
			console.log(err);
			var response = {
            status : "false", 
            code : "200"
            };
            res.send(response);
		}
	});

	}else{
		Certificate.findOneAndUpdate(params ,{$set:{'General.0.status' : req.body.status_final}},{safe:true,upsert:true},function(err,cert){

		if(!err){
				console.log("actualizar status "+ req.body.status_final);
			var response = {
			    status : "true", 
			    code : "001"
			    } ;
			res.send(response); 
		}else{
			console.log(err);
			var response = {
            status : "false", 
            code : "200"
            };
            res.send(response);
		}

	});

	}
}




///////***************************************************************************//////////
updateStatus = function ( req , res ){

	console.log("Consumiendo Webservices Update Status...");

	var status_final = req.body.status_final;
	var fecha_activo =  new Date();

	var update = (req.body.status_final == "Activo" ) ? "{'General.0.status' : req.body.status_final, 'General.0.fecha_activo' : fecha_activo}" : "{'General.0.status' : req.body.status_final}";

	console.log("Change status Certificado");

	var params = {"General.rut_cliente": req.body.rut_cliente, "CPE.mac" :req.body.mac , "General.status" : req.body.status_inicial};

	if (req.body.status_final == "Activo") {
	Certificate.findOneAndUpdate(params ,{$set:{'General.0.status' : req.body.status_final, 'General.0.fecha_activo' : fecha_activo}},{safe:true,upsert:true},function(err,cert){

		if(!err){

			console.log("actualizar status "+ req.body.status_final);
		
			var response = {
			    status : "true", 
			    code : "001"
			    } ;
			res.send(response); 

			var transport = nodemailer.createTransport("direct", {debug: true}); // Devel1.baking.cl */

	 //Conexion desde producción de VTR

	/*				var transport = nodemailer.createTransport('SMTP',{
	                host: 'smtp.vtr.net',
	                port: '25',
	                auth: {
	                user: 'certificacion.internet@vtr.net',
	                pass: 'certiwifi1234'
	                }
	                });
	*/

					console.log('Direct transport configured');
						

						// setup e-mail data with unicode symbols
						var mailOptions = {
						    from: "certificacion.internet@intraway.cl", // sender address
						    to: cert.General[0].mail_cliente, // list of receivers
						    subject: "Certificado Internet", // Subject line
						    text: "Certificado Internet", // plaintext body
						    html: '<b> Estimado Cliente, </b> <p> Su Certificacion ha sido Exitosa, Atte Intraway' // html body
						}

						// send mail with defined transport object
						transport.sendMail(mailOptions, function(error, response){
						    if(error){
						        console.log('Error occured');
						        console.log(error);
						        return;
						    }else{
						        console.log(response);
						        console.log('Message sent successfully!');
						    }

						    // if you don't want to use this transport object anymore, uncomment following line
						    //smtpTransport.close(); // shut down the connection pool, no more messages
						});

			
	
		}else{
			console.log(err);
			var response = {
            status : "false", 
            code : "200"
            };
            res.send(response);
		}

	});

	}else{
		Certificate.findOneAndUpdate(params ,{$set:{'General.0.status' : req.body.status_final}},{safe:true,upsert:true},function(err,cert){

		if(!err){
				console.log("actualizar status "+ req.body.status_final);
			var response = {
			    status : "true", 
			    code : "001"
			    } ;
			res.send(response); 
		}else{
			console.log(err);
			var response = {
            status : "false", 
            code : "200"
            };
            res.send(response);
		}

	});

	}
}



/*
*	WS Update Certificado
*	req : 
*		rut_cliente : String,
*		CPE.mac : String,
*       
*	res:
*		Actualiza estado Certificado / Cambia Estado y Finaliza Certificado
*		
*		CODE
*		001: true
*		200: false
*
*/
updateCertificado = function ( req , res ){



	var newCert = new Object();

	newCert = req.body;

	console.log("Consumiendo Webservices UpdateCertificado");

	console.log("Certificado Actualizado " + newCert);



	var params = {"General.rut_cliente": newCert.General.rut_cliente, "CPE.mac" : newCert.CPE.mac, "General.status": { $not : /Cerrado/ } };

	console.log (params);

	Certificate.find(params, function(err,certData){
		
		if(!err){

			// res.send(certData);
			console.log('Buscando Certificado Actual'),
			idActual = certData[0]._id;	
			console.log("idActual" + idActual);

			console.log(certData);
			
		Certificate.findByIdAndRemove(idActual , function(err){
			    if (!err){
			      console.log("Certificado Borrado");
			      //res.send(newCert);

		dataGen = newCert['General'];
		dataLoc = newCert['Locaciones'];
		dataCpe = newCert['CPE'];
		dataExt = newCert['Extensores'];

		console.log("Extensor " + newCert['Extensores']);


	var certificado = new Certificate({	
		 		General:[{
		    	idem_servicio 		 : dataGen['idem_servicio'],
			    rut_cliente    		 : dataGen['rut_cliente'],
			    mail_cliente   		 : dataGen['mail_cliente'],
			    id_tecnico			 : dataGen['ID_Tecnico'],
			    status				 : "Creado",
			    tipo_OT				 : dataGen['tipo_OT'],
			    presencia_wifi		 : dataGen['presencia_wifi'],
			    fecha_certificado	 : dataGen['fecha_certificado'],
			    fecha_activo		 : dataGen['fecha_activo'],
			    nombre_receptor		 : dataGen['nombre_receptor'],
	    		parentesco			 : dataGen['parentesco'],
	   		 	pisos				 : dataGen['pisos'],
	    		orden_tecnica		 : dataGen['orden_tecnica'],
			    plan:{
			    	nombre : dataGen['plan']['nombre'],
			    	subida : dataGen['plan']['subida'],
			    	bajada : dataGen['plan']['bajada']
			    },

		   		wifi_propia: dataGen['wifi_propia']
		 	}],
		 	Locaciones:[{
		 		tipo_vivienda 				 : dataLoc['tipo_vivienda'],
		 		habitaciones				 : dataLoc['habitaciones'],
		 	}],
		 	CPE:[{
		 		tipo 				 : dataCpe['tipo'],
		 		modelo				 : dataCpe['modelo'],
		 		mac				 : dataCpe['mac'],
		 		frecuencia 		 : dataCpe['frecuencia'],
		 		ubicacion				 : dataCpe['ubicacion'],
		 		ubicacion_aceptada				 : dataCpe['ubicacion_aceptada'],
		 		observacion				 : dataCpe['observacion'],
				}],
			Extensores : dataExt,
			
		    }); 


	certificado.save(function(err) {
	      if(!err) {
	        console.log('Certificado Creado');
	        	var response = {
	   		    status : "true", 
	    		code : "001"
	    	} ;
			res.send(response);  
	      } else {
	        console.log('ERROR AL CREAR CERTIFICADO: ' + err);
	        	var response = {
	   		    status : "false", 
	    		code : "200"
	    	} ;
			res.send(response);  
	      }
	});




			    }else{
			    	console.log("no se actualizo el nuevo certificado");	
			        res.send(false);
			    }

			 });


		}else{ //no existe certificado asociado a ese RUT

			console.log(err);
			var response = {
            status : "false", 
            code : "200"
            };
            res.send(response);

		}


	}); 


} //End UpdateCertificado


/*
*	WS addExtensoresPruebaWifi
*	req : 
*		rut_cliente : String,
*		Extensores.mac : String,
		Status : String
*       
*	res:
*		Agrega Pruebas Wifi a los Extensores
*		
*		CODE
*		001: true
*		200: false
*
*/
addExtensoresPruebaWifi = function ( req , res ){

		console.log ('Agregando Pruebas Wifi a los Extensores');

		console.log('Consumiendo Webservices addExtensoresPruebaWifi....');

		var params = new Object();
		
		var params = {"General.rut_cliente": req.body.rut_cliente, "General.status": req.body.status};

		mac_extensor_actual = req.body.MAC_Extensor;
		

		console.log(params);

		actRoom = req.body.Pruebas_WiFi.Habitacion.Ubicacion; //ubicacion donde se van agregar las pruebas Wifi
		actRoom = actRoom.toLowerCase();

		itemPruebaWifi=req.body.Pruebas_WiFi; //Contenido de la Prueba WiFi

		var extensorArray = new Array();
		var i=0;



		Certificate.find(params,function(err,cert){

		if(!err){

			console.log(cert);

			idCertificado = cert[0]._id;

			var certActual =  new Array();
		
			console.log(idCertificado);

			
			console.log(certActual);

			certActual = cert[0].Extensores;

			//res.send(certActual);

			for ( var  item in certActual){
				extensorArray[i++] = certActual[item]['Ubicacion'];
			}


			console.log("ExtensorArray " + extensorArray.length );

			for ( var j= 0 ; j < extensorArray.length ; j++ ){

				console.log(actRoom);
				console.log("J --- "+ j);

				if ( (certActual[j].MAC) == req.body.MAC_Extensor){
						
						var certExte = new Object();
						
						certExte = certActual[j];
						//console.log (certExte);
						console.log("OK--- " + j);

						var extensorModificado = 'Extensores.' + j + '.Pruebas_Wifi';
						var extensorMAcModificado = "Extensores." + j + ".MAC";
						console.log(extensorModificado);

						var myObject = new Object;

						myObject[extensorModificado] = itemPruebaWifi;

						console.log ("Item Prueba Wifi");
						console.log (myObject);

					Certificate.findByIdAndUpdate( idCertificado , { $push: myObject }, {safe:true, upsert:true},function(err,resultCertMod){ 
						if(!err){
								var response = {
							    status : "true", 
							    code : "001"
							    } ;
								res.send(response);
						}else{
							res.send(false);
							console.log(err);
							console.log("No Se hizo el update en add prueba wifi extensores");
						}

					}); 


					break;
					
				}

			} 
		
		}else{
			console.log(err);
			var response = {
            status : "false", 
            code : "200"
            };
            res.send(response);
		}
});
 

 


}

setComentarios = function(req, res){
  		console.log("Agregando comentarios, usando setComments");
  		var params = new Object();
  		params = {"General.rut_cliente": req.body.rut_cliente, "General.status": req.body.status, "CPE.mac": req.body.mac};

  		console.log(params);

  		var id_tecnico = req.body.id_tecnico;
  		var mensaje = req.body.mensaje;
  		var id_certificado;

  		Certificate.find(params, function(err, cert){
    		var response;

    		if(!err){
      			id_certificado = cert[0]._id;
      			console.log("id certificado: " + id_certificado);
      
      			User.find({"username" : id_tecnico}, function(err, user){
        			console.log(user);
        			if(!err){
          				var comentario = new Object();
          				comentario["fecha"] = new Date();
          				comentario["tecnico"] = user[0].name;
          				comentario["mensaje"] = mensaje;

          				console.log("nombre tecnico: " + user[0].name);

          				Certificate.findByIdAndUpdate(id_certificado, { $push: { "Comentarios": comentario}}, {safe:true, upsert:true}, function(err, result){
            				if(!err){
              					response = {
                					status : "true",
                					code : 100
              					};
            				}else{
              					response = {
                					status : "false",
                					code : 400
              					};
            				}

           					 res.send(response);
          				});
        			}else{
          				response = {
            				status : "false",
            				code : 300
          				};

          				res.send(response);
        			}
      			});
    		}else{
      			response = {
        			status : "false",
        			code : 200
      			};
 
      			res.send(response);
    		}
  		});
	};
	
	getComentarios = function(req, res){
  		console.log("Obteniendo comentarios, usando getComments");
  		var params = new Object();
  		var id_certificado;
  		params = {"General.rut_cliente": req.body.rut_cliente, "General.status": req.body.status, "CPE.mac" : req.body.mac};

  		console.log(params);

  		Certificate.find(params, function(err, cert){
    		if(!err){
      			id_certificado = cert[0].id;
      			Certificate.findById(id_certificado, 'Comentarios', function(err, result){
        			if(!err){
          				res.send(result);
        			}else{
          				var response = {
            					status : "false",
            					code : 300
          				};

          				res.send(response);
        			}
      			});
    		}else{
      			var response = {
        				status : "false",
        				code : 200
      			};

      			res.send(response);
    		}
  		});
	};
	
	verificarEmail = function(req, res){
		
		var params = {"General.rut_cliente": req.body.rut_cliente, "CPE.mac": req.body.mac, "General.status": req.body.status};
		
		Certificate.findOne(params, function(err, cert){
			if(!err){
				var idCert = cert._id;
				
				Results.findOne({"id_certificado": idCert}, function(err, result){
					if(!err){
						if(cert._id == null){
							var response = {
								status : "false",
								code: 300
							};
							
							res.send(response);
						}else{
							var response;
						
							if(result.enviado == "true"){
								response = {
									status : "true",
									code: 400
								};	
							}else{
								response = {
									status : "false",
									code: 400
								};
							}
						
							res.send(response);
						}					
					}else{
						var response = {
							status : "false",
							code: 200
						};
						
						res.send(response); 
					}
				});
			}else{
				var response = {
					status: "false",
					code: 100
				};
				
				res.send(response);
			}
		});
 	};
	
	reenviarEmail = function(req, res){
		//var params = {"General.rut_cliente": req.body.rut_cliente, "CPE.mac": req.body.mac, "General.status": req.body.status};
                var response = {
                	status : "false",
                        code: 100
                };

                res.send(response);
		
		/*
		Certificate.findOne(params, function(err, cert){
			if(err){
				var response = {
					status : "false",
					code: 100
				};
				
				res.send(response);
			}else{
				if(cert._id == null){
					var response = {
						status : "false",
						code: 200
					};
					
					res.send(response);
				}else{
					var idCert = cert._id;
					var certFrec = cert.frecuencia;
				
					Results.findOne({"id_certificado": idCert}, function(err, result){
						if(err){
							var response = {
								status : "false"				
							};
						
							res.send(response);
						}else{
							var html_mail;
						
							if(result.resultados){
								var frec = "false";
								var fecha = new Date();
								var fecha_certificado = result.fecha_certificado.format("%d/%m/%Y", true);
							
								if(certFrec == "5.0"){
									frec = "true";
								}
							
								html_mail = headerMail(fecha_certificado, result, frec , fecha.getFullYear());
								html_mail+=	'<table>';
								html_mail+=	'<td>';
								html_mail+=	'<table>';
							
								for(var i in result.resultados){
									if(result.resultados[i].frecuencia == "2.4"){
										if(result.resultados[i].value_mail == "1"){
											imgM = "<img src='http://techwizard.bsw.cl/img/mailVTR/2.png' alt='download image' width='10' height='9' style='display:block'/>";
										}else if(result.resultados[i].value_mail == "2"){
											imgM = "<img src='http://techwizard.bsw.cl/img/mailVTR/1.png' alt='download image' width='10' height='9' style='display:block'/>";
										}else if(result.resultados[i].value_mail == "3"){
											imgM = "<img src='http://techwizard.bsw.cl/img/mailVTR/4.png' alt='download image' width='10' height='9' style='display:block'/>";
										}
									
										html_mail+=	'<tr>';
										html_mail+=	'<td width="18" height="16" align="center" valign="middle" bgcolor="#FFFFFF">';
										html_mail+=	imgM;
										html_mail+=	'</td>';
										html_mail+=	'<td height="16" align="left" valign="middle" bgcolor="#FFFFFF">';
										html_mail+=	'<p style="font-family:Arial, Helvetica, sans-serif; font-size:9px; text-align:left; color:#000; margin-bottom:0; margin-left:0; margin-right:0; margin-top:0">'+result.resultados[i].habitacion+'</p>';
										html_mail+=	'</td>';
										html_mail+=	'</tr>';
									}
								}
							
								html_mail += '</table>';
								html_mail += '</td>';
								html_mail += '<td>';
								html_mail += '<table>';
							
								for(var i in result.resultados){
									if(result.resultados[i].frecuencia == "5"){
										if(result.resultados[i].value_mail == "1"){
											imgM = "<img src='http://techwizard.bsw.cl/img/mailVTR/2.png' alt='download image' width='10' height='9' style='display:block'/>";
										}else if(result.resultados[i].value_mail == "2"){
											imgM = "<img src='http://techwizard.bsw.cl/img/mailVTR/1.png' alt='download image' width='10' height='9' style='display:block'/>";
										}else if(result.resultados[i].value_mail == "3"){
											imgM = "<img src='http://techwizard.bsw.cl/img/mailVTR/4.png' alt='download image' width='10' height='9' style='display:block'/>";
										}
									
										html_mail+=	'<tr>';
										html_mail+=	'<td width="18" height="16" align="center" valign="middle" bgcolor="#FFFFFF">';
										html_mail+=	imgM;
										html_mail+=	'</td>';
										html_mail+=	'<td height="16" align="left" valign="middle" bgcolor="#FFFFFF">';
										html_mail+=	'<p style="font-family:Arial, Helvetica, sans-serif; font-size:9px; text-align:left; color:#000; margin-bottom:0; margin-left:0; margin-right:0; margin-top:0">'+result.resultados[i].habitacion+'</p>';
										html_mail+=	'</td>';
										html_mail+=	'</tr>';
									}
								}
							
								html_mail += '</table>';
								html_mail += '</td>';
								html_mail += '</table>';
								html_mail += '</table></td></tr></table></td>'; 
								html_mail += '<td width="13">&nbsp;</td><td align="center" valign="top"><table width="93" border="0" cellspacing="0" cellpadding="0" style="border-color:#F00; border-style:solid; border-width:1px"><tr><td width="93" height="40" align="center" valign="middle" bgcolor="#FFFFFF"><p style="font-family:Arial, Helvetica, sans-serif; font-size:9px; font-weight:bold; text-align:center; color:#000; margin-bottom:0; margin-left:0; margin-right:0; margin-top:0">REFERENCIA COBERTURA WIFI</p></td></tr><tr><td height="22" align="center" valign="bottom" bgcolor="#FFFFFF"><img src="http://valorizacionvtr.cl/emails/2014/11/medicion_wifi/images/line_2.gif" alt="download image" width="93" height="8" style="display:block" /></td></tr><tr><td height="171" align="center" valign="middle" bgcolor="#FFFFFF"><img src="http://valorizacionvtr.cl/emails/2014/11/medicion_wifi/images/grafico.gif" alt="REFERENCIA COBERTURA WIFI" width="79" height="166" style="display:block" /></td></tr></table></td>';
								html_mail += '</tr></table></td></tr></table>';
								html_mail += footerMail(result);
							}else{
								var fecha = new Date();
								var fecha_certificado = result.fecha_certificado.format("%d/%m/%Y", true);
							
								html_mail = headerMailSinWifi(fecha_certificado, result, fecha.getFullYear());
								html_mail += footerMail(result);
							}
						
							var mailOptions = {
						    	from: "certificacion.internet@vtr.net",
						    	to: result.mail_recibido,
						    	subject: "VTR Certificación Internet",
						    	text: "Certificado VTR",
						    	html: html_mail
							};
						
							var transport = nodemailer.createTransport('SMTP',{
                        		host: 'smtp.vtr.net',
                            	port: '25',
                            	auth: {
                            		user: 'certificacion.internet@vtr.net',
                                	pass: 'certiwifi1234'
                            	}
            				});
            			
            				transport.sendMail(mailOptions, function(error, response){
								if(error){
									console.log('Error al enviar correo');
						    		console.log(error);
								}else{	
									console.log(response);
						    		console.log('Correo enviado');
								}
							});
						
							res.send(false);
						}
					});
				}
			}
		});
		*/
	};

app.post  ('/setCertificado/', setCertificado); 
app.post  ('/getCertificado/', getCertificado); 
app.post  ('/addSpeedTest/',   addSpeedTest);
app.post  ('/addPruebaWifi/',  addPruebaWifi);
app.post  ('/updateStatus/' ,  updateStatus2);
app.post  ('/getListCertificate/', auth, getListCertificado);
app.get   ('/getListCertificate/:idtecnico' , getListCertificadoByIDtecnico);
//app.post  ('/updateStatuss/' ,  updateStatus2);
app.post  ('/updateCertificado/' , updateCertificado);
app.post  ('/addExtensoresPruebaWifi/' , addExtensoresPruebaWifi );
app.post  ('/setComments/', setComentarios);
app.post  ('/getComments/', getComentarios);
app.post  ('/verifEmail/', verificarEmail);
app.post  ('/resendEmail/', reenviarEmail);
}

