import { useLocationsContext } from "../../hooks/useLocationsContext"

const DeleteButton = ({ locationId }) => {
    const { dispatch } = useLocationsContext()

    const fetchLocations = async () => {
        const response = await fetch(
            "https://rusalangit-gis-backend.vercel.app/api/locations"
        )
        const json = await response.json()
        if (response.ok) {
            dispatch({ type: "SET_LOCATIONS", payload: json })
        }
    }

    const handleDeleteClick = async () => {
        const response = await fetch(
            "https://rusalangit-gis-backend.vercel.app/api/locations/" +
                locationId,
            {
                method: "DELETE",
            }
        )

        const json = await response.json()

        if (response.ok) {
            dispatch({ type: "DELETE_LOCATION", payload: json })
            fetchLocations()
        }
    }

    return (
        <button
            onClick={handleDeleteClick}
            className="bg-red-600 font-bold text-white px-4 py-2 rounded-md mx-2"
        >
            Delete
        </button>
    )
}

export default DeleteButton
