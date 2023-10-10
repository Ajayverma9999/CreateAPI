const express = require('express');
const router = express.Router();
const {add_user,} = require('../controller/index')
const {login} = require('../controller/index')

router.post('/create_user',add_user);

router.post('/login',login );

module.exports = router;