const mongoose = require('mongoose')
const Schema = mongoose.Schema


//Bounty Blueprint 
const bountySchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: false
    },
    type: {
        type: String,
        required: true
    },
    isAlive: {
        type: Boolean,
        required: false
    },
    price: {
        type: Number,
        required: false,
    }

})

module.exports = mongoose.model("Bounty", bountySchema)