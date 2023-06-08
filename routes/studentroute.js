const express = require('express');
const router = express.Router()
const {getAllStudents, addStudent, editStudent, getSingleStudentDetails} = require('../controllers/studentcontroller')

router.route('/').get(getAllStudents).post(addStudent);
router.route('/:id').patch(editStudent);
router.route('/:id').get(getSingleStudentDetails);

module.exports = router;