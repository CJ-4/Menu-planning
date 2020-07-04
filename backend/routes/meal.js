var express = require('express');
var router = express.Router();

var mealController = require('../controllers/mealController');

//Require Mongoose
var mongoose = require('mongoose');

/* Creates users listing. */
router.post('/meal', mealController.meal_create);
router.get('/meal', mealController.meal_get);


module.exports = router;
