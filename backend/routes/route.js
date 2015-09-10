

module.exports = function(app){  
    
    require('../webservices/login')(app); 
    require('../webservices/general')(app);
    require('../webservices/certificados')(app);
    require('../webservices/data')(app);
    require('../webservices/version')(app);
    require('../webservices/groups')(app);
    require('../webservices/parametros')(app);
    require('../webservices/reports')(app);
    require('../webservices/user')(app);


}


