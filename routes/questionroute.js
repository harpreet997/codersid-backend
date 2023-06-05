const express = require('express');
const router = express.Router()
const {getAllQuestions, createQuestion, deleteQuestion, deleteAllQuestion} = require('../controllers/questioncontroller')

router.route('/').get(getAllQuestions).post(createQuestion);
router.route('/:id').delete(deleteQuestion)
router.route('/').delete(deleteAllQuestion)

module.exports = router;