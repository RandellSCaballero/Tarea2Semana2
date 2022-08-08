var express = require('express');
var path = require('path')
var router = express.Router(); //es para crear una miniaplicacion

/////MIDDLEWARES/////

 
//METODOS DE RUTA

// define the home page route
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'acerca.html'))
})

module.exports = router;