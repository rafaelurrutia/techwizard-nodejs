

var mongoose = require('mongoose'),  
    Schema = mongoose.Schema;  

var cpeTypeSchema = new Schema({ 
	code : { type : Number ,  unique : true },
	name : { type : String ,  unique : true , require : true }	
});  
  
module.exports = mongoose.model('typcpes', cpeTypeSchema); 	
