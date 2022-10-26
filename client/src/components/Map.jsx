import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet"
import { useEffect, useState } from "react"
import { useLocationsContext } from "../hooks/useLocationsContext"

const Map = () => {
	const { locations, dispatch } = useLocationsContext()
	const basePosition = [-6.6099, 106.77969]

	useEffect(() => {
		const fetchLocations = async () => {
			const response = await fetch("http://localhost:4000/api/locations")
			const json = await response.json()

			if (response.ok) {
				dispatch({ type: "SET_LOCATIONS", payload: json })
			}
		}

		fetchLocations()
	}, [])

	return (
		<>
			<MapContainer center={basePosition} zoom={18}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors&nbsp&nbsp&nbsp&nbsp'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				{locations &&
					locations.map((location) => {
						return (
							<Marker
								position={[
									location.latitude,
									location.longitude,
								]}
								key={location._id}
							>
								<Tooltip>{location.title}</Tooltip>
							</Marker>
						)
					})}
			</MapContainer>
		</>
	)
}

export default Map
