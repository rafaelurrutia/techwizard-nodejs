

var mongoose = require('mongoose'),  
    Schema = mongoose.Schema;  

// sessions_down

var parametrosSchema = new Schema({
	wired_test : { type : Boolean }, 
	
	url_down 		: { type : String },
	time_out_down 	: { type : Number },
	sessions_down 	: { type : Number },
	accepttest_down : { type : Number },
	
	url_up 			: { type : String },
	time_out_up 	: { type : Number },
	sessions_up 	: { type : Number },
	accepttest_up : { type : Number },
	
	url_ping : { type : String },
	num_ping : { type : Number },
	
	url_dns 		: { type : String },
	url_traceroute 	: { type : String },
	url_speedtest 	: { type : String },
	
	vumeter : { type : Number },
	speedTest : { type : String },
	
	speedtest_size : { type : Number },
    speedtest_position : { type : String },
    
    hops_traceroute 	: { type : Number },
    
	Pruebas_ST: { 
    nacional:{     
        valor_aceptado : { type : Number},
    },
    internacional :{   
        valor_aceptado : { type : Number},
    },
    
    
    
    
       }
	
});  

/*
	
	copia de respaldo echo por la saury

var parametrosSchema = new Schema({
        wired_test : { type : Boolean }, 
	url_down : { type : String },
	time_out_down : { type : Number },
	url_ping : { type : String },
	num_ping : { type : Number },
	vumeter : { type : Number },
	speedTest : { type : String },
	Pruebas_ST: { 
    nacional:{     
        valor_aceptado : { type : Number},
    },
    internacional :{
       
        valor_aceptado : { type : Number},

    }
       }
	
}); 	
	
*/
  
module.exports = mongoose.model('parametros', parametrosSchema); 	

