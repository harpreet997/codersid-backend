const mongoose = require('mongoose')

const PaymentSchema = new mongoose.Schema({
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
    },
    registrationfees: {
        type: Number,
    },
    secondInstallmentfees: {
        type: Number,

    },
    thirdInstallmentfees: {
        type: Number,
    },
    fourthInstallmentfees: {
        type: Number,
        default: 0
    },
    PaymentMode: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Payment', PaymentSchema)