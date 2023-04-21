const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({
  studentname: {
    type: String,
    required: [true, 'must provide product student name'],
    trim: true,
    maxlength: [20, 'name can not be more than 20 characters'],
  },
  batchname: {
    type: String,
    required: [true, 'must provide product batch name'],
    trim: true,
    maxlength: [20, 'name can not be more than 20 characters'],
  },
  course: {
    type: String,
    required: [true, 'must provide course name'],
    trim: true,
    maxlength: [20, 'name can not be more than 20 characters'],
  },
  emailid: {
    type: String,
    required: [true, 'must provide email id'],
    trim: true,
    maxlength: [20, 'name can not be more than 20 characters'],
  },
  contactdetails: {
    type: Number,
    required: [true, 'must provide contact details'],
  },
  address: {
    type: String,
    required: [true, 'must provide address'],
    trim: true,
    maxlength: [20, 'name can not be more than 20 characters'],
  },
  totalfees: {
    type: Number,
    required: [true, 'must provide total fees'],
  },
  admissionDate: {
    type: String,
    required: [true, 'must provide admission date'],
  } 
})

module.exports = mongoose.model('Student', StudentSchema)