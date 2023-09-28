const express = require('express');
const router = express.Router();
const {add_user} = require('../controller/index')

router.post('/create_user',add_user);

module.exports = router;