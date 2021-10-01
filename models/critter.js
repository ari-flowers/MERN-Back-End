const mongoose = require('mongoose')

const critterSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number
  },
  species: {
    type: String,
    default: 'unknown',
  },
  domesticated: {
    type: Boolean
  },
  image: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  }
}, {timestamps: true})

module.exports = mongoose.model('Critter', critterSchema)
