
  

var mongoose = require('mongoose'),  
    Schema = mongoose.Schema;  
  
var planSchema = new Schema({ 
	name		: 	{ type : String },
	upload 		: 	{ type : Number },
	download	:	{ type : Number },
	unidad		: 	{ type : String }
});  
  
module.exports = mongoose.model('plans', planSchema); 


  
var roomSchema = new Schema({ 
	_id 	: 	{ type : Number },
	nombre	: 	{ type : String }
});  
  
module.exports = mongoose.model('room', planSchema); 	



var cpeSchema = new Schema({ 
	name : { type : String },
	model : { type : String },
	description : { type : String },
	mark : { type : String },
	type_cpe : { type : String },
	family : { type : String },
	wifi : { type : String },
	docsis : { type : String },
	status :  { type : Boolean }
	
});  
  
module.exports = mongoose.model('cpe', cpeSchema); 	



var extensoresSchema = new Schema({ 
	tipo 	         	: 	{ type : String },
	modelo	        	:	{ type : String },
    status              :   { type : Boolean }
});  
  
module.exports = mongoose.model('extensors', planSchema); 	



