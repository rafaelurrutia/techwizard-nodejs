


var mongoose = require('mongoose'),  
    Schema = mongoose.Schema;  

var userSchema = new Schema({ 
	username		: 	{ type : String , required : true, unique : true },
	name 			: 	{ type : String },
	lastname		:	{ type : String },
	password		:	{ type : String  , required : true},
	email			:	{ type : String },
	phone			:	{ type : String },
	group			:	{ type : String },//[Group]
	active			:	{ type : String },
	date 			: 	{ 
						regdate : { type : Date},
						enddate : { type : Date}
						},
	expira 			: { type : String } , // Indica si el usuario Expira o no , true / false
	entry			: { type : Number } , //Contador de Ingresos 
	block			: { type : String } ,  //Indica si un usuario esta Bloqueado true = Bloqueado false = No Bloqueado
	time_block		: { type : Date   } ,
	last_session 	: { type : Date   } ,	 // ultimo dia que inicio sesion.
	total_entry_success : {type : Number },
	total_entry_refuse :  { type : Number }

});  
  

module.exports = mongoose.model('users', userSchema); 


