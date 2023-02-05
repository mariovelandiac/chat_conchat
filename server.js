const express = require('express');
const bodyParser = require('body-parser')
const routerApi = require('./routes/index')

// crear aplicacion
var app = express();
// añadir parseo para las peticiones y respuestas, convierte todo a JSON?
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
// Iniciar aplicación con el router asignado
routerApi(app)



app.listen(3000);
console.log('la aplicación está escuchando en http:localhost:3000')