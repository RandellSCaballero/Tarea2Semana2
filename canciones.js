var express = require('express');
var path = require('path')
var router = express.Router(); //es para crear una miniaplicacion

/////MIDDLEWARES/////

 
//METODOS DE RUTA

// define the home page route
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'lista.html'))
})

router.post('/', function (req, res) {
    res.send('Respuesta a POST!');
  });

router.put('/', function (req, res) {
    res.send('Respuesta a PUT!');
  });

router.delete('/', function (req, res) {
    res.send('Respuesta a DELETE!');
  });
 
  // define the about route
router.get('/about', function(req, res) {
  res.send('About de Personas, tiempo = ' + req.tiempo);
});

module.exports = router;