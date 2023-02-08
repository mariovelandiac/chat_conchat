const express = require('express');
const router = express.Router();
const response = require('./../../network/response');
const controller = require('./controller');



router.get('/:userId', async (req, res) => {
    try {
        const {userId} = req.params
        const rta = await controller.getChat(userId);
        response.success(req, res, rta, 201);
    } catch (e) {
        response.error(req, res, 'Unexpected error', 500, e)
    }
})

router.post('/', async (req, res) => {
    try {
        const users = req.body.users;
        const rta = await controller.add(users);
        response.success(req, res, rta, 201);
    } catch (e) {
        response.error(req, res, 'Unexpected error', 500, e)
    }

})


module.exports = router
