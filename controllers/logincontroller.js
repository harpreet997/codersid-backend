const jwt = require('jsonwebtoken')
const { BadRequestError } = require('../errors/bad-request');

const login = async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    throw new BadRequestError('Please provide email and password')
  }

  const id = new Date().getDate()

  const token = jwt.sign({ id, email }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })

  res.status(200).json({ token })
}



module.exports = {
  login 
}