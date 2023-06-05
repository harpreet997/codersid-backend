const mongoose = require('mongoose')

const TestSchema = new mongoose.Schema({
    testname: {
        type: String,
    },
    category: {
        type: String,
    },
    questionslist: [{
        
    }],
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Test', TestSchema)