const express = require('express');
const router = express.Router();
const isAuthenticated = require('../middleware/isAuthenticated.js');

const users = require('../apiServices/users/routes');
const book = require('../apiServices/book/routes');
const sales = require('../apiServices/sales/routes');

router.use('/users', users);
router.use('/book', isAuthenticated, book);
router.use('/sales', isAuthenticated, sales);

module.exports = router;
