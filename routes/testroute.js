const express = require('express');
const router = express.Router()
const {getAllTest, createTest, deleteTest, getSingleTest, updateTest} = require('../controllers/testcontroller')

router.route('/').get(getAllTest).post(createTest);
router.route('/:id').get(getSingleTest).delete(deleteTest).post(updateTest)

module.exports = router;