const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'must provide name'],
    trim: true,
    maxlength: [20, 'name can not be more than 20 characters'],
    unique: true
  },
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
})

module.exports = mongoose.model('UserModal', UserSchema)