var express = require('express'); 
var router = express.Router(); 

// Require controller modules.
var api_controller = require('../controllers/api'); 
var ball_controller = require('../controllers/balls'); 
 
/// API ROUTE /// 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a Costume.  
router.post('/balls', ball_controller.ball_create_post); 
 
// DELETE request to delete Costume. 
router.delete('/balls/:id',ball_controller.ball_delete); 
 
// PUT request to update Costume. 
router.put('/balls/:id',
ball_controller.ball_update_put); 
 
// GET request for one Costume. 
router.get('/balls/:id', ball_controller.ball_detail);
 
// GET request for list of all Costume items.
router.get('/balls', ball_controller.ball_view_all_Page); 

router.get('/balls/:id', ball_controller.ball_detail); 
module.exports = router; 