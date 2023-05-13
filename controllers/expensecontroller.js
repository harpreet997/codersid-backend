
const Expense = require('../models/expensemodal');
const asyncWrapper = require('../middleware/async')

const getAllExpenses = asyncWrapper(async (req, res) => {
    const authToken = req.headers.authorization;
    if(!authToken)
    {
        res.status(401).json({msg: 'Unauthorize user'})
    }
    else{
    const Expenses = await Expense.find({})
    res.status(200).json({ Expenses })
    }
})

const addExpense= asyncWrapper(async (req, res) => {
    try {
        const expense = await Expense.create(req.body)
    if(!expense)
    {
        res.status(400).json({ msg : "Please fill all the fields"})
    }
    else {
        res.status(201).json({ expense,  msg: "Expense Created successfully" })
    }
    } catch (error) {
        res.status(400).json({ msg: "Expense already exists" })
    }
})


module.exports = {
    getAllExpenses,
    addExpense,
}