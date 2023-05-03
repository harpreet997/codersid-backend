const mongoose = require('mongoose')

const PaymentSchema = new mongoose.Schema({
    studentname: {
        type: String,
    },
    batchname: {
        type: String,
    },
    course: {
        type: String,
    },
    emailid: {
        type: String,
    },
    contactdetails: {
        type: Number,
    },
    Amount: {
        type: Number,
    },
    PaymentType: {
        type: String,
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