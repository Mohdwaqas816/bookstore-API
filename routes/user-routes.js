const express = require('express');
const { userRegistration, userLogin } = require('../controller/user-contoller');
// create express router
const router = express.Router();

// all routes that are related to users only
router.post('/register', userRegistration);
router.post('/login', userLogin);

module.exports = router;
