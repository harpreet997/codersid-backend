
const User = require('../models/usermodal');
const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/custom-error')

const getAllUsers = asyncWrapper(async (req, res) => {
    const authToken = req.headers.authorization;
    if(!authToken)
    {
        res.status(401).json({msg: 'Unauthorize user'})
    }
    else{
    const Users = await User.find({})
    res.status(200).json({ Users })
    }
})

const addUser = asyncWrapper(async (req, res) => {
    try {
    const {email, password} = req.body
    if(email === "" || password === "")
    {
        res.status(400).json({ msg : "Please fill all the required fields"})
    }
    else {
        const user = await User.create(req.body)
        res.status(201).json({ msg: "User Added successfully", role: "user" })
    }
    } catch (error) {
        res.status(400).json({ msg: "User already exists" })
    }
})


module.exports = {
    getAllUsers,
    addUser,
}