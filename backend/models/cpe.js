

var mongoose = require('mongoose'),  
    Schema = mongoose.Schema;  


var cpeSchema = new Schema({ 
	name : { type : String, unique : true },
	model : { type : String },
	description : { type : String },
	frecuencia : { type : String },
	mark : { type : String },
	type_cpe : { type : Number },
	family : { type : String },
	wifi : { type : String },
	docsis : { type : String },
	status :  { type : Boolean }
	
});  
  
module.exports = mongoose.model('cpes', cpeSchema); 	

