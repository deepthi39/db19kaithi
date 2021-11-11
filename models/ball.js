const mongoose = require("mongoose") 
const ballSchema = mongoose.Schema({ 
    ballType: String, 
    price: Number, 
    color: String 
}) 
 
module.exports = mongoose.model("balls", 
ballSchema)