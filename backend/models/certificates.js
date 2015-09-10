
var mongoose = require('mongoose'),  
    Schema = mongoose.Schema;  
  
var certificadoSchema = new Schema({ 
  General: [{
    idem_servicio   : { type : String},
    rut_cliente     : { type : String },
    id_tecnico    : { type : String },
    mail_cliente    : { type : String},
    status: { type : String},
    tipo_OT: { type : String},
    presencia_wifi: { type : String},
    fecha_certificado: { type : Date},
    fecha_activo : { type : Date },
    nombre_receptor : { type : String },
    parentesco : { type : String},
    pisos : { type : String },
    orden_tecnica :  { type : String},
    comentario: { type : String },
    plan: {
      nombre: { type : String},
      subida: { type : Number},
      bajada: { type : Number}
    },
    wifi_propia: { type : String}
  }],
  Locaciones:[{
    tipo_vivienda: { type : String },
    habitaciones: { type : Object  }
  }],
  CPE:[{
    tipo: { type : String},
    modelo: { type : String},
    mac: { type : String},
    frecuencia : { type : String},
    ubicacion: { type : String},
    ubicacion_aceptada: { type : String},
    observacion: { type : String}
  }],
  Pruebas_ST: [{ 
    nacional:{     
        subida : { type : Number},
        bajada : {type: Number}
    },
    internacional :{
       
        subida : { type : Number},
        bajada: { type: Number}
    }
       }],
  Pruebas_Wifi: [{ 
                habitacion: { type : Object }
                }], 
   Extensores: { type : Object },
   Comentarios: []
});  
  
module.exports = mongoose.model('certificates', certificadoSchema); 	
