var express = require('express'); 
var router = express.Router(); 

// Require controller modules.
var api_controller = require('../controllers/api'); 
var ball_controller = require('../controllers/ball'); 
 
/// API ROUTE /// 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// ball ROUTES /// 
 
// POST request for creating a ball.  
router.post('/ball', ball_controller.ball_create_post); 
 
// DELETE request to delete ball. 
router.delete('/ball/:id',ball_controller.ball_delete); 

// PUT request to update ball. 
router.put('/ball/:id', 
ball_controller.ball_update_put); 
 
// GET request for one ball. 
router.get('/ball/:id', ball_controller.ball_detail);
 
// GET request for list of all ball items. 
router.get('/ball', ball_controller.ball_view_all_Page); 
 
module.exports = router;