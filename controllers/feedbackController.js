const Feedback = require('../models/feedbackModal')
const FeedbackCategory = require('../models/feedbackCategory')
const asyncWrapper = require('../middleware/async')

module.exports = {
    createFeedback: asyncWrapper(async (req, res) => {
        try {
            const feedback = await Feedback.create(req.body)
            if (!feedback) {
                return next(createCustomError(`Please fill all the required fields`, 500))
            }
            else {
                res.status(201).json({ msg: "feedback Added successfully" })
            }
        } catch (error) {
            res.status(400).json({ msg: "feedback Already Exists" })
        }
    }),

    getSingleFeedback: asyncWrapper(async (req, res) => {
        try {
            const feedback = await Feedback.findOne({ _id: req.params.id })
            res.json({ id: feedback })
        }
        catch {
            res.status(500).json("something went wrong")
        }
    }),

    getAllFeedback: asyncWrapper(async (req, res) => {
        try {
            const feedback = await Feedback.find()
            res.status(200).json(feedback)
        }
        catch {
            res.status(500).json("something went wrong")
        }
    }),

    updateFeedback: asyncWrapper(async (req, res) => {
        const { id: feedbackID } = req.params
        const feedback = await Feedback.findOneAndUpdate({ _id: feedbackID },
            req.body, {
            new: true,
            runValidators: true,
        })
        try {
            if (!feedback) {
                res.status(400).json({ msg: `No feedback found with id: ${feedbackID}` })
            }
            else {
                res.status(200).json({ msg: "Feedback Updated Successfully" })
            }
        } catch (error) {
            res.status(500).json({ msg: "Invalid feedback id" })
        }
    })
    ,
    createFeedbackCategory: asyncWrapper(async (req, res) => {
        try {
            const feedbackCategory = await FeedbackCategory.create(req.body)
            if (!feedbackCategory) {
                return next(createCustomError(`Please fill all the required fields`, 500))
            }
            else {
                res.status(201).json({ msg: "feedback Added successfully" })
            }
        } catch (error) {
            res.status(400).json({ msg: "feedback Already Exists" })
        }
    }),

    getAllFeedbackCategory: asyncWrapper(async (req, res) => {
        try {
            const category = await FeedbackCategory.find().sort({ createdAt: -1 })
            res.status(200).json(category)
        }
        catch {
            res.status(500).json("something went wrong")
        }
    }),

    deleteFeedbackCategory: asyncWrapper(async (req, res) => {
        const { id: categoryID } = req.params
        const category = await FeedbackCategory.findOneAndDelete({ _id: categoryID })
        try {
            if (!category) {
                res.status(400).json({ msg: `No batch found with id: ${categoryID}` })
            }
            else {
                res.status(200).json({ msg: "Category Deleted Successfully" })
            }
        } catch (error) {
            res.status(500).json({ msg: "Invalid category id" })
        }
    }),


}