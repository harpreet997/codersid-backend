
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
        var expensebody = new Expense({
            categoryName: req.body.categoryName,
            expenseName: req.body.expenseName,
            vendor: req.body.vendor,
            amount: req.body.amount,
            // bill: `/uploads/${req.file.filename}`
        })
        
        const expense = await expensebody.save();
    if(!expense)
    {
        res.status(400).json({ msg : "Please fill all the fields"})
    }
    else {
        res.status(201).json({ expense,  msg: "Expense Created successfully" })
    }
    } catch (error) {
        console.log(error);
    }
})

const deleteExpense = asyncWrapper(async (req, res) => {
    const { id: expenseID } = req.params
    const expense = await Expense.findOneAndDelete({ _id: expenseID })
    try {
        if (!expense) {
            res.status(400).json({msg : `No batch found with id: ${expenseID}`})
        }
        else {
            res.status(200).json({ msg: "Expense Deleted Successfully" })
        }
    } catch (error) {
        res.status(500).json({msg : "Invalid expense id"})
    }
})


module.exports = {
    getAllExpenses,
    addExpense,
    deleteExpense
}