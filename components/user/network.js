const express = require('express');
const router = express.Router();
const response = require('./../../network/response');
const controller = require('./controller');



router.get('/', async (req, res) => {
    try {
        const userName = req.query.name || null;
        const rta = await controller.getUser(userName);
        response.success(req, res, rta, 201);
    } catch (e) {
        response.error(req, res, 'Unexpected error', 500, e)
    }
})
router.post('/', async (req, res) => {
    try {
        const name = req.body.name
        const rta = await controller.add(name);
        response.success(req, res, rta, 201);
    } catch (e) {
        response.error(req, res, 'Unexpected error', 500, e)
    }

})


module.exports = router