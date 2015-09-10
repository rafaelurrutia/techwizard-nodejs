//  Manejo de Control de Versiones del Producto


module.exports = function(app) {

  var version = require('../models/version.js');

  checkVersion = function(req, res) {

    version.find({"name_client" : req.body.client_name}, function(err, result) {
    
    if (!err){
       console.log("... Verificando Version --> Version Obtenida ");
       console.log(result[0].version);
      // res.send(result);
       if(result[0].version == req.body.version_actual ){ //si las versiones estan actualizadas
        var response = {
              version : result[0].version,
              status : "false", 
              code : "601"
            } ;

            res.send(response);
      }else{ //la version no esta actualizada
           var response = {
             version : result[0].version,
             url_download : result[0].url_download,
             status : "true", 
             code : "602",

            } ;

            res.send(response);

      }

    }
    else 
    {
        
        var response = {
            status : "false", 
            code : "300"
          } ;

        res.send(response);
    }

    });  

  };

  getVersion = function(req, res) {

    var client = req.params.client_name;

    if( client == ""){
    version.find(function(err, result) {
        if(!err) {
          console.log('GET /getVersion' + result);
          //console.log (user);
          res.send(result);
        } else {
          console.log('ERROR: ' + err);
        }
      });
    }
    else {

      console.log("falta");
    }
  };


  setVersion = function(req, res) {
    var newVersion = new version({
      name_client:  req.body.rut,
      email:        req.body.email,
      version :     req.body.version

    });

    user.save(function(err) {
      if(!err) {
        console.log('Created');
      } else {
        console.log('ERROR: ' + err);
      }
    });



  };


  setDownload = function (req, res) {

  };


  getHistory = function (req, res) {

  };


  //Link routes and functions
  app.post('/checkVersion/', checkVersion);
  app.get('/getVersion/:', getVersion);
  app.post('/setVersion/', setVersion);
  app.get('/setDownload/', setDownload); 
  app.get ('/getHistory/' , getHistory);

}

