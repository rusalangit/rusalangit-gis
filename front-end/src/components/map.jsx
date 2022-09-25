import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet"

const Map = () => {
	const basePosition = [-6.6099, 106.77969]

	return (
		<>
			<MapContainer center={basePosition} zoom={18}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors&nbsp&nbsp&nbsp&nbsp'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker position={basePosition}>
					<Tooltip>
						OksigenTujuh. <br /> Rusalangit HQ.
					</Tooltip>
				</Marker>
			</MapContainer>
		</>
	)
}

export default Map
