const mongoose = require("mongoose") 
const ballSchema = mongoose.Schema({ 
    ballType: String, 
    price: Number,
    weight: String
})

module.exports = mongoose.model("Balls", 
ballSchema)