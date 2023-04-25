const jwt = require('jsonwebtoken')
const User = require('../models/usermodal');

const login = async (req, res) => {
  try {
    const { email, password } = req.body
    
  if (!email || !password) {
    res.status(400).json({ msg: "Please enter email and password" })
  }
  
  else {
    const id = new Date().getDate()

    const token = jwt.sign({ id, email }, process.env.JWT_SECRET, {
      expiresIn: '30d',
    })

    res.status(200).json({ token, role: "admin" })
  }
  } catch (error) {
    console.log(error);
    res.status(400).json({msg: "User not found"})
  }
  
}



module.exports = {
  login
}