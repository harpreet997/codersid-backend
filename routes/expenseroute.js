const express = require('express');
const router = express.Router()
const {getAllExpenses, addExpense} = require('../controllers/expensecontroller')

router.route('/').get(getAllExpenses).post(addExpense);

module.exports = router;