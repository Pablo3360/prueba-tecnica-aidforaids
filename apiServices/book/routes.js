const express = require('express');
const controller = require('./controller');

const router = express.Router();

router.get('/', controller.books);
router.post('/create', controller.createBook);
// router.put('/stock', controller.updateStock);
// router.put('/compra', controller.registerCompra);

module.exports = router;
