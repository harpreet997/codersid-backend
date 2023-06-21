
const Test = require('../models/testmodal');
const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/custom-error')

const getAllTest = asyncWrapper(async (req, res) => {
    const authToken = req.headers.authorization;
    if(!authToken)
    {
        res.status(401).json({msg: 'Unauthorize user'})
    }
    else{
    const Tests = await Test.find({})
    res.status(200).json({ Tests })
    }
})

const getSingleTest = async (req, res) => {
    const test = await Test.findOne({ _id: req.params.id })
    res.json({ id: test })
}

const createTest = asyncWrapper(async (req, res) => {
    try {
        const test = await Test.create(req.body)
    if (!test) {
        return next(createCustomError(`Please fill all the required fields`, 500))
    }
    else {
        res.status(201).json({ msg: "Test Added successfully" })
    }
    } catch (error) {
        // res.status(400).json({ msg: error.errors })
        console.log(error);
    }  
})

const deleteTest = asyncWrapper(async (req, res) => {
    const { id: testID } = req.params
    const test = await Test.findOneAndDelete({ _id: testID })
    try {
        if (!test) {
            res.status(400).json({ msg: `No question found with id: ${testID}` })
        }
        else {
            res.status(200).json({ msg: "Test Deleted Successfully" })
        }
    } catch (error) {
        res.status(500).json({ msg: "Invalid test id" })
    }
})

const updateTest = asyncWrapper(async (req, res, next) => {
    const { id: testID } = req.params
    const test = await Test.findOneAndUpdate({ _id: testID }, req.body, {
        new: true,
        runValidators: true,
    })
    if (!test) {
        return next(createCustomError(`No test found with id : ${testID}`, 400))
    }
    else {
        res.status(200).json({ msg: "Exipry Date Updated Successfully" })
    }
})


module.exports = {
    getAllTest,
    createTest,
    deleteTest,
    getSingleTest,
    updateTest
}