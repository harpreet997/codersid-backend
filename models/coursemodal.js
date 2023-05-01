const mongoose = require('mongoose')

const CourseSchema = new mongoose.Schema({
    courseName: {
        type: String,
        required: [true, 'must provide course name'],
        trim: true,
        maxlength: [30, 'course name can not be more than 30 characters'],
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('CourseModal', CourseSchema)