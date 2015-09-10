

var mongoose = require('mongoose'),  
    Schema = mongoose.Schema;  
  
var groupSchema = new Schema({ 
	name	    : 	{ type : String,  unique : true  },
	tipo_id 	: 	{ type : String  },
	activo    :	  { type : String },
  privileges : { type : String }
});  
  

module.exports = mongoose.model('grupos', groupSchema); 

