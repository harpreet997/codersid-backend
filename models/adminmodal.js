const mongoose = require('mongoose')

const AdminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'must provide email address'],
    trim: true,
    maxlength: [20, 'name can not be more than 20 characters'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'must provide password'],
    trim: true,
    maxlength: [20, 'name can not be more than 20 characters'],
  },
  role: {
    type: String,
    default: "user",
    trim: true,
    maxlength: [20, 'name can not be more than 20 characters'],
  },
  
  
})

module.exports = mongoose.model('User', AdminSchema)