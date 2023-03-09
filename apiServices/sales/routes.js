const express = require('express');
const controller = require('./controller');

const router = express.Router();

router.post('/addcart', controller.addBookCart);
router.post('/buy', controller.buyBook);

module.exports = router;
