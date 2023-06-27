const express = require('express');
const router = express.Router()
const {getAllTest, createTest, deleteTest, getSingleTest, updateTest, deleteAssessmentQuestion, updateAssessmentQuestion} = require('../controllers/testcontroller')

router.route('/').get(getAllTest).post(createTest);
router.route('/:id').get(getSingleTest).delete(deleteTest).post(updateTest)
router.route('/deletequestion/:id').delete(deleteAssessmentQuestion)
router.route('/updatequestion/:id').patch(updateAssessmentQuestion)
module.exports = router;