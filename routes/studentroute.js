const express = require('express');
const router = express.Router()
const {getAllStudents, addStudent} = require('../controllers/studentcontroller')

router.route('/').get(getAllStudents).post(addStudent);

module.exports = router;