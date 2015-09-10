


var mongoose = require('mongoose'),  
    Schema = mongoose.Schema;  

var userSchema = new Schema({ 
	username	: 	{ type : String , required : true, unique : true },
	name 		: 	{ type : String },
	lastname	:	{ type : String },
	password	:	{ type : String  , required : true},
	email		:	{ type : String },
	phone		:	{ type : String },
	group		:	{ type : String },//[Group]
	active		:	{ type : String },
	date 		: 	{ 
						regdate : { type : Date},
						enddate : Date
					},
	expira 		: { type : String }

});  
  

module.exports = mongoose.model('users', userSchema); 


