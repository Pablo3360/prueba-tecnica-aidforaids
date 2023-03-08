const express = require('express');
const router = express.Router();

const users = require('../apiServices/users/routes');

router.use('/users', users);

module.exports = router;
