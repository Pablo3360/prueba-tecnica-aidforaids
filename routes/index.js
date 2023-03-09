const express = require('express');
const router = express.Router();
const isAuthenticated = require('../middleware/isAuthenticated.js');

const users = require('../apiServices/users/routes');
const book = require('../apiServices/book/routes');
const cart = require('../apiServices/cart/routes');

router.use('/users', users);
router.use('/book', isAuthenticated, book);
router.use('/cart', isAuthenticated, cart);

module.exports = router;
