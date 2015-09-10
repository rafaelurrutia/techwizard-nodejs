

var mongoose = require('mongoose'),  
    Schema = mongoose.Schema;  


var extensoresSchema = new Schema({ 
	name : { type : String , unique : true},
	model : { type : String },
	description : { type : String },
	frecuencia : { type : String },
	mark : { type : String },
	type_extensor : { type : Number },
	family : { type : String },
	wifi : { type : String },
	docsis : { type : String },
	status :  { type : Boolean }
	
});  
  
module.exports = mongoose.model('extensors', extensoresSchema); 	

