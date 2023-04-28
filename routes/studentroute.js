const express = require('express');
const router = express.Router()
const {getAllStudents, addStudent, editStudent} = require('../controllers/studentcontroller')

router.route('/').get(getAllStudents).post(addStudent);
router.route('/:id').patch(editStudent);

module.exports = router;