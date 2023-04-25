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
  registrationfees: {
    type: Number,
    required: [true, 'must provide registration fees'],
  },
  registrationDate: {
    type: String,
    required: [true, 'must provide registration Date'],
  },
  secondfees: {
    type: Number,
    required: [true, 'must provide second installment fees'],
  },
  secondfeesDate: {
    type: String,
    required: [true, 'must provide second installment fees date'],
  },
  thirdfees: {
    type: Number,
    required: [true, 'must provide third installment fees'],
  },
  thirdfeesDate: {
    type: String,
    required: [true, 'must provide third installment fees date'],
  },
  admissionDate: {
    type: String,
    required: [true, 'must provide admission date'],
  }, 
  createdAt: {
    type: Date,
    default: Date.now()
  } 
})

module.exports = mongoose.model('Student', StudentSchema)