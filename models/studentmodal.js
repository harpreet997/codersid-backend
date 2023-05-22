const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  studentname: {
    type: String,
    required: [true, 'must provide product student name'],
    trim: true,
    unique: true
  },
  batchname: {
    type: String,
    required: [true, 'must provide product batch name'],
    trim: true,
  },
  course: {
    type: String,
    required: [true, 'must provide course name'],
    trim: true,
  },
  emailid: {
    type: String,
    required: [true, 'must provide email id'],
    trim: true,
    unique: true
  },
  contactdetails: {
    type: Number,
    required: [true, 'must provide contact details'],
  },
  address: {
    type: String,
    required: [true, 'must provide address'],
    trim: true,
  },
  totalfees: {
    type: Number,
    required: [true, 'must provide total fees'],
  },

  registration: {
    registrationfees: {
      type: Number,
      required: [true, 'must provide registration fees'],
    },
    registrationDate: {
      type: String,
      required: [false, 'must provide registration Date'],
    },
    registrationPaymentStatus: {
      type: String,
      default: "unpaid"
    }
  },
  secondInstallment: {
    secondInstallmentfees: {
      type: Number,
      required: [true, 'must provide second installment fees'],
    },
    secondInstallmentDate: {
      type: String,
      required: [false, 'must provide second installment fees date'],
    },
    secondInstallmentPaymentStatus: {
      type: String,
      default: "unpaid"
    }
  },
  thirdInstallment: {
    thirdInstallmentfees: {
      type: Number,
      required: [true, 'must provide third installment fees'],
    },
    thirdInstallmentDate: {
      type: String,
      required: [false, 'must provide third installment fees date'],
    },
    thirdInstallmentPaymentStatus: {
      type: String,
      default: "unpaid"
    }
  },

  fourthInstallment: {
    fourthInstallmentfees: {
      type: Number,
      default: 0
    },
    fourthInstallmentDate: {
      type: String, 
      default: "" 
    },
    fourthInstallmentPaymentStatus: {
      type: String, 
      default: "Not Paid"    
    }
  },
  BalanceAmount: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('Student', StudentSchema)