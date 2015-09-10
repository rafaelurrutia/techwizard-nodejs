
var mongoose = require('mongoose'),  
    Schema = mongoose.Schema;  
  
var roomSchema = new Schema({ 
	code 		:   { type : Number },
	name		: 	{ type : String , unique : true }
	
});  

  
module.exports = mongoose.model('rooms', roomSchema); 	


