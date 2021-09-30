const mongoose = require('mongoose')

const critterSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Integer
  },
  species: {
    type: String,
    required: true,
    default: 'unknown',
  },
  domesticated: {
    type: Boolean
  },
  image: {
    type: String,
    default: ''
  }
}, {timestamps: true})

module.exports = mongoose.model('critter', critterSchema)
