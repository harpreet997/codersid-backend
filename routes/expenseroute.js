const express = require('express');
const multer = require('multer');
const expenseRoute = express();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      return cb(null, "./uploads")
    },
    filename: function (req, file, cb) {
      return cb(null, `${Date.now()}-${file.originalname}`)
    }
  })

const upload = multer({ storage: storage});

const {getAllExpenses, addExpense, deleteExpense} = require('../controllers/expensecontroller')

expenseRoute.get('/', getAllExpenses);
expenseRoute.post('/', addExpense);
expenseRoute.delete('/:id', deleteExpense)
module.exports = expenseRoute;