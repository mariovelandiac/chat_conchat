const express = require('express')
const messageRouter = require('./message.router');

function routerAPI(app) {
    const router = express.Router();
    app.get('/', (req, res) => {
        res.send('Bienvenido')
    })
    app.use('/', router)
    router.use('/message', messageRouter);
}


module.exports = routerAPI;