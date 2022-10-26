const mongoose = require("mongoose")
const Location = require("../models/locationModel")

// GET all locations
const getLocations = async (req, res) => {
	const location = await Location.find({}).sort({ createdAt: -1 })

	res.status(200).json(location)
}

// GET a single location
const getLocation = async (req, res) => {
	const { id } = req.params

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: "No such location" })
	}

	const location = await Location.findById(id)

	if (!location) {
		return res.status(404).json({ error: "No such location" })
	}

	res.status(200).json(location)
}

// Create a new location
const createLocation = async (req, res) => {
	const { title, latitude, longitude } = req.body

	// Add document to database
	try {
		const location = await Location.create({ title, latitude, longitude })
		res.status(200).json(location)
	} catch (error) {
		res.status(400).json({ error: error.message })
	}
}

// DELETE a location
const deleteLocation = async (req, res) => {
	const { id } = req.params

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: "No such location" })
	}

	const location = await Location.findOneAndDelete({ _id: id })

	if (!location) {
		return res.status(404).json({ error: "No such location" })
	}

	res.status(200).json(location)
}

// UPDATE a location
const updateLocation = async (req, res) => {
	const { id } = req.params

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: "No such location" })
	}

	const location = await Location.findOneAndUpdate(
		{ _id: id },
		{
			...req.body,
		}
	)

	if (!location) {
		return res.status(404).json({ error: "No such location" })
	}

	res.status(200).json(location)
}

module.exports = {
	getLocations,
	getLocation,
	createLocation,
	deleteLocation,
	updateLocation,
}
