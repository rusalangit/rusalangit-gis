const express = require("express")

// Controller Function
const { signinUser, signupUser } = require("../controllers/userController")

const router = express.Router()

// Sign In Route
router.post("/signin", signinUser)

//Sign Up Route
router.post("/signup", signupUser)

module.exports = router
