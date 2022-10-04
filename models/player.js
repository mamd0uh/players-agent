// load mongoose
const mongoose = require('mongoose')

// add a shortcut to Schema
const Schema = mongoose.Schema

// create our Schema
const playerSchema = new Schema({
    playerImg: {type: String},
    name: { type: String, required: true }, 
    date: { type: String, required: true },
    nationality: { type: String, required: true },  
    position: { type: String, required: true },
    available: Boolean
})

// create a Model from our Schema
const Player = mongoose.model('Player', playerSchema)

// export our Model
module.exports = Player;