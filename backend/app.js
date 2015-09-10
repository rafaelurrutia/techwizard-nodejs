
  
var express  = require("express"),
    app      = express(),
    http     = require("http"),
    server   = http.createServer(app),
    mongoose = require('mongoose'); 


app.configure(function () {
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.logger('dev'));   
});

process.env.TZ = 'UTC-4'; // TimeZone Chile
console.log(new Date().toString());


var isodate = new Date().toISOString()
console.log (isodate + " / isodate");


//Producción Registro de Logs
app.use(function(req, res, next){
        var date = new Date;
        console.log('%s -- %s %s', date ,req.method, req.url);
        if (req.method == 'POST') {
                var body = '';
                req.on('data', function (data) {
                        body += data;
                });
                req.on('end', function () {
                        console.log('%s -- %s',date,body);
                });
        }
        next();
});




app.all('/', function(req, res,next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.get('/update_app/', function (req, res) {
  res.download('/var/www/sites/techwizard_vtr/backend/app/Install.exe', 'Install.exe', function(err){
  //  res.download('/var/www/site/Techwizard.com/backend/app/Install.exe', 'Install.exe', function(err){
  if (err) {
    console.log("ERROR DESCARGA");
    console.log(err);
    res.send(false);
  } else {
    console.log("Descargando ultima version....");
    res.send(403, 'Sorry! you cant see that.');

    // decrement a download credit etc
  }
  });

});

app.get('/manual/', function (req, res) {
  res.download('/var/www/sites/techwizard_vtr/backend/app/Manual_de_usuarios.docx', 'Manual_de_usuarios.docx', function(err){
  //  res.download('/var/www/site/Techwizard.com/backend/app/Manual_de_usuario.docx', 'Manual_de_usuario.docx', function(err){
  if (err) {
    console.log("ERROR DESCARGA MANUAL");
    console.log(err);
    res.send(false);
  } else {
    console.log("Descargando Manual de usuario Techwizard ...");
    res.send(403, 'Sorry! you cant see that.');

    // decrement a download credit etc
  }
  });

});

var version = "1.4.12.1"; 

app.get('/', function (req, res){
  res.send("Techwizard VTR en puerto 3100");
});


routes = require('./routes/route')(app);
/*

app.configure('local', function () {
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
    mongoose.connect('mongodb://bsw:bsw2014@localhost:27017/techwizard_dev', function(err, res) {
    if(err) {
      console.log('ERROR: connecting to Database. ' + err);
    } else {
      console.log('Connected to Database local');
    }
    });
});
 
 // mongoose.connect('mongodb://username:password@host:port/database?options...');

app.configure('development', function () {
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
    mongoose.connect('mongodb://190.82.87.10/techwizard_dev', function(err, res) {
    if(err) {
      console.log('ERROR: connecting to Database. ' + err);
    } else {
      console.log('Connected to Database development');
    }
    });
}); 
 
app.configure('production', function () {
  app.use(express.errorHandler());
  mongoose.connect('mongodb://localhost/techwizard_dev', function(err, res) {
    if(err) {
      console.log('ERROR: connecting to Database. ' + err);
    } else {
      console.log('Connected to Database production');
    }
    });
}); */


mongoose.connect('mongodb://localhost/techwizard_vtr', function(err, res) {
    if(err) {
      console.log('ERROR: connecting to Database. ' + err);
    } else {
      console.log('Connected to Database techwizardVTR Development');
    }
    });





server.listen(3100, function() {
  console.log("Node server running on port 3100");
});
