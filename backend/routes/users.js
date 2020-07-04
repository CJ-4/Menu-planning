var express = require('express');
var router = express.Router();

var userController = require('../controllers/userController');

//Require Mongoose
var mongoose = require('mongoose');

/* Creates users listing. */
router.post('/users', userController.user_create);
router.get('/users/:_id', userController.user_get);
router.post('/users/login', userController.user_login);

module.exports = router;
