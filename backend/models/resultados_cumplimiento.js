

var mongoose = require('mongoose'),  
    Schema = mongoose.Schema;  
  
var reportsSchema = new Schema({ 
    codigo_tecnico   : { type : String},
    rut_cliente     : { type : String },
    id_tecnico    : { type : String },
    tipo_OT: { type : String},
    mac_cpe : { type : String },
    fecha_certificado: { type : Date},
    plan_contratado : {type : String},
    mail_recibido : { type : String},
    nombre_receptor : {type : String},
    parentesco_receptor : {type:String},
    ubicacion_cpe : {type : String },
    estado: {type: String},
    id_certificado: {type: String},
    enviado: {type: String},
    resultados: { type : Object }
});  
  
module.exports = mongoose.model('resultadocertificacions', reportsSchema); 	


