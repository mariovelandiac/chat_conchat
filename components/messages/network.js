const express = require('express');
const router = express.Router();
const response = require('./../../network/response');
const Message = require('./controller');
const controller = new Message();
const multer = require('multer');
const storage = require('./../../public/files/storage')
const upload = multer({
  storage: storage
})

router.get('/',async (req, res) => {
    try {
        const query = req.query;
        // geting one chat
        const chat = query.chat || null
        const rta = await controller.getMessage(chat);
        response.success(req, res, rta, 200);
    } catch(e) {
        response.error(req, res, 'Unexpected error', 500, e)
    }
});

router.post('/',
  upload.single('file'),
  async (req, res) => {
    try {
        const body = req.body
        const rta = await controller.addMessage(body.chat, body.user, body.message, req.file);
        response.success(req, res, rta, 201)
    } catch (e) {
        response.error(req, res, e.message, 400, 'La información no está completa')
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const changes = req.body;
        const rta = await controller.update(id, changes);
        response.success(req, res, rta, 201)
    } catch (e) {
        response.error(req, res, 'Error Interno', 500, e)
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const {id} = req.params
        await controller.deleteMessage(id)
        response.success(req, res, `Mensaje ${id} eliminado`, 201)
    } catch (e) {
        response.error(req, res, 'Error Interno', 500, e)
    }
})

module.exports = router
