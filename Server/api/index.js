var express = require('express');
var router = express.Router();
var hotel = require('./controller');


router.get('/show-hotels' , hotel.SearchAll);


module.exports = router;