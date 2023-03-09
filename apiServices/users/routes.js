const express = require('express');
const controller = require('./controller');
const { image } = require('../../middleware/image');

const router = express.Router();

router.post('/register', controller.createUser);
router.post('/login', controller.loginUser);
router.put('/perfil/:id', image, controller.perfilUser);

module.exports = router;
