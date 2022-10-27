const express = require("express")

// Controller Function
const {
    signinUser,
    signupUser,
    getAllUsers,
} = require("../controllers/userController")

const router = express.Router()

// Get All Users
router.get("/", getAllUsers)

// Sign In Route
router.post("/signin", signinUser)

//Sign Up Route
router.post("/signup", signupUser)

module.exports = router
