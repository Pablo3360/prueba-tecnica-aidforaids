const express = require('express');
const router = express.Router();

const users = require('../apiServices/users/routes');
const book = require('../apiServices/book/routes');

router.use('/users', users);
router.use('/book', book);

module.exports = router;
