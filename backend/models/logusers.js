


var mongoose = require('mongoose'),  
    Schema = mongoose.Schema;  

var logusersSchema = new Schema({ 
	username		: 	{ type : String , required : true, unique : true },
	name 			: 	{ type : String },
	email			:	{ type : String },
	group			:	{ type : String },
	active			:	{ type : String },
	date_conexion 	: 	{ type : Date  	},
	agent 			:   { type : String },
	session 		: 	{ type : String }

	});  
  

module.exports = mongoose.model('logusers', logusersSchema); 


