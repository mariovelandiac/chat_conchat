const express = require('express');
const router = express.Router();
const response = require('./../../network/response');
const Message = require('./controller');
const service = new Message()

router.get('/',async (req, res) => {
    try {
        const rta = await service.getMessages();
        response.success(req, res, rta, 200);
    } catch(e) {
        response.error(req, res, 'Unexpected error', 500, e)
    }
});

router.post('/',async (req, res) => {
    try {
        const body = req.body
        const query = req.query
        const rta = await service.addMessage(body.user, body.message);
        response.success(req, res, rta, 201)
    } catch (e) {
        response.error(req, res, e.message, 400, 'La información no está completa')
    }
});


module.exports = router