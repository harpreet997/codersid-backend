
const Payment = require('../models/paymentmodal');
const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/custom-error')

const getAllPayments = asyncWrapper(async (req, res) => {
    const authToken = req.headers.authorization;

    if(!authToken)
    {
        res.status(401).json({msg: 'Unauthorize user'})
    }
    else {
    const Payments = await Payment.find({})
    res.status(200).json({ Payments })
    }
})

const createPayment = asyncWrapper(async (req, res) => {
    try {
        const Payments = await Payment.find({})
        const length = Payments.length;
        let newPayment = {
            ...req.body,
            id: length + 1
        }
        const payment = await Payment.create(newPayment)
    if (!payment) {
        return next(createCustomError(`Please fill all the required fields`, 500))
    }
    else {
        res.status(201).json({ msg: "Payment Added successfully" })
    }
    } catch (error) {
        // res.status(400).json({ msg: error.errors })
        console.log(error);
    }  
})


module.exports = {
    getAllPayments,
    createPayment,
}