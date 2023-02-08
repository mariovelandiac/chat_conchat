const express = require('express');
const bodyParser = require('body-parser');
const router = require('./network/routes');
const db = require('./db');

// conexión con base de datos
db();

// crear aplicacion
var app = express();

// añadir parseo para las peticiones y respuestas, convierte todo a JSON?
app.use(bodyParser.json());


// Iniciar aplicación con el router asignado
router(app)

// servidor estático
app.use('/app', express.static('public/src'))

app.listen(3000);   
console.log('la aplicación está escuchando en http:localhost:3000')