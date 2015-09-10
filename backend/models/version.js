

var mongoose = require('mongoose'),  
    Schema = mongoose.Schema;  
  
var versionSchema = new Schema({ 
	name_client	: 	{ type : String , required : true },
	email 	: 	{ type : String },
	version :	{ type : String, required : true },
  url_download : { type : String },
	date_upload	:	{ type : Date},
	date_download	:	{ type : Date  }
});  
  

module.exports = mongoose.model('versions', versionSchema); 

