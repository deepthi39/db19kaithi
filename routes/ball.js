var express = require('express');
const ball_controlers= require('../controllers/balls'); 
var router = express.Router();

// A little function to check if we have an authorized user and continue on 
//or 
// redirect to login. 

const secured = (req, res, next) => {
    console.log(req) 
    if (req.user){ 
      return next(); 
    }
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 
/* GET home page. */
router.get('/', ball_controlers.ball_view_all_Page);

router.get('/detail', ball_controlers.ball_view_one_Page); 

router.get('/create',secured, ball_controlers.ball_create_Page); 

router.get('/update',secured,ball_controlers.ball_update_Page);

router.get('/delete',secured, ball_controlers.ball_delete_Page);

module.exports = router;