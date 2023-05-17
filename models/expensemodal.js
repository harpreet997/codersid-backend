const mongoose = require('mongoose')

const ExpenseSchema = new mongoose.Schema({
    categoryName: {
        type: String,
        required: [true, 'must provide category name'],
        trim: true,
    },
    expenseName: {
        type: String,
        required: [true, 'must provide expense name'],
        trim: true,
        unique: true
    },
    vendor: {
        type: String,
        required: [true, 'must provide vendor email'],
        trim: true,
    },
    amount: {
        type: Number,
        required: [true, 'must provide amount'],
        trim: true,
    },
    bill: {
        public_id: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true
        }
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('ExpenseModal', ExpenseSchema)