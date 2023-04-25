
const Student = require('../models/studentmodal');
const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/custom-error')

const getAllStudents = asyncWrapper(async (req, res) => {
    const authToken = req.headers.authorization;

    if(!authToken)
    {
        res.status(401).json({msg: 'Unauthorize user'})
    }
    else {
    const Students = await Student.find({}).sort({createdAt: -1})
    res.status(200).json({ Students })
    }
})

const addStudent = asyncWrapper(async (req, res) => {
    const student = await Student.create(req.body)
    if (!student) {
        return next(createCustomError(`Please fill all the required fields`, 500))
    }
    else {
        res.status(201).json({ msg: "Student Added successfully" })
    }
})


module.exports = {
    getAllStudents,
    addStudent,
}