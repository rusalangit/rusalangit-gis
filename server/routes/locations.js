const express = require("express")
const {
	getLocations,
	getLocation,
	createLocation,
	deleteLocation,
	updateLocation,
} = require("../controllers/locationController")

const router = express.Router()

// GET all locations
router.get("/", getLocations)

// GET single location
router.get("/:id", getLocation)

// POST a new location
router.post("/", createLocation)

// DELETE a location
router.delete("/:id", deleteLocation)

// UPDATE a location
router.patch("/:id", updateLocation)

module.exports = router
