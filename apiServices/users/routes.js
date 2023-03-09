const express = require('express');
const controller = require('./controller');
const { image } = require('../../middleware/image');
const isAuthenticated = require('../../middleware/isAuthenticated.js');

const router = express.Router();

router.post('/register', controller.createUser);
router.post('/login', controller.loginUser);
router.put('/perfil', isAuthenticated, image, controller.perfilUser);

module.exports = router;
