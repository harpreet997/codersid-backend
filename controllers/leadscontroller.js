
const Lead = require('../models/leadsmodal');
const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/custom-error')

const getAllLeads = asyncWrapper(async (req, res) => {
    const authToken = req.headers.authorization;

    if (!authToken) {
        res.status(401).json({ msg: 'Unauthorize user' })
    }
    else {
        const Leads = await Lead.find({}).sort({ createdAt: -1 })
        res.status(200).json({ Leads })
    }
})

const addLead = asyncWrapper(async (req, res) => {
    try {
        const lead = await Lead.create(req.body)
    if (!lead) {
        return next(createCustomError(`Please fill all the required fields`, 500))
    }
    else {
        res.status(201).json({ msg: "Lead Added successfully" })
    }
    } catch (error) {
        res.status(400).json({ msg: "Lead Already Exists" })
    }  
})

const editLead = asyncWrapper(async (req, res, next) => {
    const { id: leadID } = req.params
    const product = await Lead.findOneAndUpdate({ _id: leadID }, req.body, {
        new: true,
        runValidators: true,
    })
    if (!product) {
        return next(createCustomError(`No Lead with id : ${leadID}`, 400))
    }
    else {
        res.status(200).json({ msg: "Lead Updated Successfully" })
    }
})


module.exports = {
    getAllLeads,
    addLead,
    editLead
}