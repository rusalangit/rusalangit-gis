import { useState } from "react"
import { useLocationsContext } from "../hooks/useLocationsContext"

const AddLocationForm = () => {
	const { dispatch } = useLocationsContext()
	const [title, setTitle] = useState("")
	const [latitude, setLatitude] = useState("")
	const [longitude, setLongitude] = useState("")
	const [error, setError] = useState(null)

	const handleSubmit = async (e) => {
		e.preventDefault()

		const location = { title, latitude, longitude }

		const response = await fetch(
			"https://rusalangit-gis-backend.vercel.app/api/locations",
			{
				method: "POST",
				body: JSON.stringify(location),
				headers: {
					"Content-Type": "application/json",
				},
			}
		)

		const json = await response.json()

		if (!response.ok) {
			setError(json.error)
		}

		if (response.ok) {
			setTitle("")
			setLatitude("")
			setLongitude("")
			setError(null)
			console.log("Location added", json)
			dispatch({ type: "CREATE_LOCATION", payload: json })
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<h3>Form Pengajuan Lahan</h3>
			<label htmlFor="title">Title</label>
			<input
				name="title"
				type="text"
				onChange={(e) => {
					setTitle(e.target.value)
				}}
				value={title}
			></input>
			<label htmlFor="latitude">Latitude</label>
			<input
				name="latitude"
				type="text"
				onChange={(e) => {
					setLatitude(e.target.value)
				}}
				value={latitude}
			></input>
			<label htmlFor="longitude">Longitude</label>
			<input
				name="longitude"
				type="text"
				onChange={(e) => {
					setLongitude(e.target.value)
				}}
				value={longitude}
			></input>
			<input type="submit" />
			{error && <div className="error">{error}</div>}
		</form>
	)
}

export default AddLocationForm
