const mongoose = require("mongoose") 
const ballSchema = mongoose.Schema({ 
    ballType: { type: String, minLength: 5 }, 
    price: { type: Number, min: 100, max: 10000 },
})

module.exports = mongoose.model("Balls", 
ballSchema)