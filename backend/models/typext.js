
var mongoose = require('mongoose'),  
    Schema = mongoose.Schema;  

var extTypeSchema = new Schema({ 
	code : { type : Number },
	name : { type : String ,  unique : true , require : true }	
});  
  
module.exports = mongoose.model('typexts', extTypeSchema); 	
