require("dotenv").config()

const User = require("../models/userModel")
const jwt = require("jsonwebtoken")

// Create Token
const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" })
}

const getAllUsers = async (req, res) => {
    const user = await User.find({}).sort({ createdAt: -1 })

    res.status(200).json(user)
}

// Signin User
const signinUser = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.signin(email, password)

        // Create Token
        const token = createToken(user._id)

        res.status(200).json({ email, token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// Signup User
const signupUser = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.signup(email, password)

        // Create Token
        const token = createToken(user._id)

        res.status(200).json({ email, token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = { signinUser, signupUser, getAllUsers }
