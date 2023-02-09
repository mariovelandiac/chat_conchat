const express = require('express');
// crear aplicacion
const app = express();
// conectar a servidor http
const server = require('http').Server(app);

const cors = require('cors')
const bodyParser = require('body-parser');
const router = require('./network/routes');
const socket = require('./socket');
const db = require('./db');
const {config} = require('./config/config')


// conexión con base de datos
db();

//creación de módulo cors
app.use(cors());

// conexión con socket
socket.connect(server)

// añadir parseo para las peticiones y respuestas, convierte todo a JSON?
app.use(bodyParser.json());


// Iniciar aplicación con el router asignado
router(app)

// servidor estático
app.use(config.publicRoute, express.static('public/'))

server.listen(parseInt(config.port), ()=>{
  console.log(`la aplicación está escuchando en http:localhost:${process.env.PORT}`);
});

