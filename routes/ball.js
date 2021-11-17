var express = require('express');
const ball_controlers= require('../controllers/balls'); 
var router = express.Router();

/* GET home page. */
router.get('/', ball_controlers.ball_list);

module.exports = router;