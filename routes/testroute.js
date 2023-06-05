const express = require('express');
const router = express.Router()
const {getAllTest, createTest, deleteTest} = require('../controllers/testcontroller')

router.route('/').get(getAllTest).post(createTest);
router.route('/:id').delete(deleteTest)

module.exports = router;