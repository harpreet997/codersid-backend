const mongoose = require('mongoose')

const CourseSchema = new mongoose.Schema({
    courseName: {
        type: String,
        required: [true, 'must provide course name'],
        trim: true,
        maxlength: [20, 'name can not be more than 20 characters'],
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('CourseModal', CourseSchema)