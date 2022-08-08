//npm init
//npm install express --save

var canciones = require('./canciones');
var acerca = require('./acerca')
var express = require('express');
var path = require('path');
var app = express();

app.listen(3000, function () { //escucha en el puerto 3000
  console.log('Escuchando en puerto 3000!');
});

////////MIDDLEWARE GENERAL////
app.use(function (req, res, next) {
  console.log('middleware server.js');
  next();
});

app.use(express.static(path.join(__dirname, 'public')));

///////ROUTER//////
app.use('/canciones', canciones);

////////////

app.use('/acerca', acerca);

///////////

app.use(function(req, res, next) {
  res.status(404).send('Esa pagina no existe!');
});

////////////

/* app.get('/',function (req, res) {
	res.send('Pagina principal -GET');
});

app.get('/pagina2',function (req, res) {
	res.send('Pagina 2 -GET');
}); */