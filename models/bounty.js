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
    isLiving: {
        type: Boolean,
        required: false
    },
    bountyAmount: {
        type: Number,
        required: false,
    }

})

module.exports = mongoose.model("Bounty", bountySchema)