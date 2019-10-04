const express = require('express');
const controllers = require('./controllers');
const router = express.Router();

router.post('/users', controllers.users.create);

module.exports = router;
