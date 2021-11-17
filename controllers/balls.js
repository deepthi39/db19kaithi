var Balls = require("../models/balls");

// List of all ball

exports.ball_list = async function (req, res) {
  try {
    theBalls = await Balls.find();
    res.send(theBalls);
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};

// for a specific ball.
exports.ball_detail = function (req, res) {
  res.send("NOT IMPLEMENTED: ball detail: " + req.params.id);
};

// Handle ball create on POST.
exports.ball_create_post = function (req, res) {
  res.send("NOT IMPLEMENTED: ball create POST");
};

/*
// Handle ball delete form on DELETE.
exports.ball_delete = function (req, res) {
  res.send("NOT IMPLEMENTED: ball delete DELETE " + req.params.id);
}; */

/*
// Handle ball update form on PUT. 
exports.ball_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: ball update PUT' + req.params.id); 
}; */

exports.ball_view_all_Page = async function (req, res) {
  try {
    theBalls = await Balls.find();
    res.render("ball", {
      title: "ball Search Results",
      results: theBalls,
    });
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};

// Handle Costume create on POST.
exports.ball_create_post = async function (req, res) {
  console.log(req.body);
  let document = new Balls();
  // We are looking for a body, since POST does not have query parameters.
  // Even though bodies can be in many different formats, we will be picky
  // and require that it be a json object
  // {"costume_type":"goat", "cost":12, "size":"large"}
  document.ballType = req.body.ballType;
  console.log(document.ballType);
  document.price = req.body.price;
  document.capacity = req.body.capacity;
  try {
    let result = await document.save();
    res.send(result);
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};

// for a specific ball.
exports.ball_detail = async function (req, res) {
  console.log("detail" + req.params.id);
  try {
    result = await Balls.findById(req.params.id);
    res.send(result);
  } catch (error) {
    res.status(500);
    res.send(`{"error": document for id ${req.params.id} not found`);
  }
};

exports.ball_update_put = async function (req, res) {
  console.log(`update on id ${req.params.id} with body 
    ${JSON.stringify(req.body)}`);
  try {
    let toUpdate = await Balls.findById(req.params.id);
    // Do updates of properties
    if (req.body.ballType) toUpdate.ballType = req.body.ballType;
    if (req.body.price) toUpdate.price = req.body.price;
    if (req.body.capacity) toUpdate.capacity = req.body.capacity;
    let result = await toUpdate.save();
    console.log("Sucess " + result);
    res.send(result);
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`);
  }
};

exports.ball_delete = async function (req, res) {
  console.log("delete " + req.params.id);
  try {
    result = await Balls.findByIdAndDelete(req.params.id);
    console.log("Removed " + result);
    res.send(result);
  } catch (err) {
    res.status(500);
    res.send(`{"error": Error deleting ${err}}`);
  }
};