const express = require('express');
const controller = require('./controller');

const router = express.Router();

router.get('/', controller.books);
router.post('/create', controller.createBook);
router.put('/stock/:id', controller.updateStock);
router.post('/distributor', controller.createDistributor);
// router.put('/compra', controller.registerCompra);

module.exports = router;
