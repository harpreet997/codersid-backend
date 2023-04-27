const mongoose = require('mongoose')

const BatchSchema = new mongoose.Schema({
    batchName: {
        type: String,
        required: [true, 'must provide batch name'],
        trim: true,
        maxlength: [20, 'name can not be more than 20 characters'],
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('BatchModal', BatchSchema)