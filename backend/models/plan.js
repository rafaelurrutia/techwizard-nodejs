
var mongoose = require('mongoose'),  
    Schema = mongoose.Schema;  
  
var planSchema = new Schema({ 
	name		: 	{ type : String,required : true, unique : true},
	upload 		: 	{ type : Number, required : true},
	download	:	{ type : Number, required : true},
	unidad		: 	{ type : String	}

});  
  
module.exports = mongoose.model('plans', planSchema); 	


