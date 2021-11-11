var balls = require('../models/ball'); 
 
// List of all ball

exports.ball_list = async function(req, res) { 
    try{ 
        theballs = await balls.find(); 
        res.send(theballs); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};
 
// for a specific ball. 
exports.ball_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: ball detail: ' + req.params.id); 
}; 
 
 
// Handle ball delete form on DELETE. 
exports.ball_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: ball delete DELETE ' + req.params.id); 
}; 
 
// Handle ball update form on PUT. 
exports.ball_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: ball update PUT' + req.params.id); 
};

exports.ball_view_all_Page = async function(req, res) { 
    try{ 
        theballs = await balls.find(); 
        res.render('ball', { title: 'ball Search Results', results: theballs }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle Costume create on POST. 
exports.ball_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new balls(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.ballType = "tennis";
    console.log(document.ballType)
    document.price = 200; 
    document.color = "Blue"; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};