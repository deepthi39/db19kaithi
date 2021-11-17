var ball = require('../models/ball'); 
 
// List of all balls

exports.ball_list = async function(req, res) { 
    try{ 
        theball = await ball.find(); 
        res.send(theball); 
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
 
// Handle ball create on POST. 
exports.ball_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: ball create POST'); 
}; 
 
// Handle ball delete form on DELETE. 
exports.ball_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: ball delete DELETE ' + req.params.id); 
}; 
 
// Handle ball update form on PUT.
exports.ball_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await ball.findById( req.params.id)
// Do updates of properties
if(req.body.ballColor)
toUpdate.ballColor = req.body.ballColor;
if(req.body.age) toUpdate.age = req.body.age;
if(req.body.name) toUpdate.name = req.body.name;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};

exports.ball_view_all_Page = async function(req, res) { 
    try{ 
        console.log('here')
        theball = await ball.find(); 
        res.render('ball', { title: 'ball Search Results', results: theball }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle ball create on POST. 
exports.ball_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new ball(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"ballColor":"Green", "age":10, "name":"Neem"} 
    console.log('the first'+req.body.ballColor)
    console.log('the second'+ req.body.age)
    document.ballColor = req.body.ballColor;
    console.log(document.ballColor)
    document.age = req.body.age; 
    document.name = req.body.name; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};

// for a specific ball.
exports.ball_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await ball.findById( req.params.id)
    res.send(result)
    } catch (error) {   
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
};