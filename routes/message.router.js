const express = require('express')
const router = express.Router();

router.get('/',(req, res) => {
    res.send('Lista de mensajes')
});

router.post('/',(req, res) => {
    const body = req.body
    const query = req.query
    res.json({...body, ...query})
});

module.exports = router;