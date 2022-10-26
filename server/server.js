require("dotenv").config()

const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const locationRoutes = require("./routes/locations")

// Express App
const app = express()

// Middleware
app.use(express.json())

app.use((req, res, next) => {
	console.log(req.path, req.method)
	next()
})

// Routes
app.use(cors())
app.use("/api/locations", locationRoutes)

// Connect to database
mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		// Listen for requests
		app.listen(process.env.PORT, () => {
			console.log(
				"Connected to Database. Listening on port",
				process.env.PORT
			)
		})
	})
	.catch((error) => {
		console.log(error)
	})

process.env