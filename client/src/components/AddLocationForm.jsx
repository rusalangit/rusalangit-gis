import { useState } from "react"
import { useLocationsContext } from "../hooks/useLocationsContext"
import { Navigate, useNavigate } from "react-router-dom"

const AddLocationForm = () => {
    const navigate = useNavigate()
    const { dispatch } = useLocationsContext()

    const [title, setTitle] = useState("")
    const [latitude, setLatitude] = useState("")
    const [longitude, setLongitude] = useState("")
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const location = { title, latitude, longitude }

        console.log(emptyFields)
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
            setEmptyFields(json.emptyFields)
        }

        if (response.ok) {
            setTitle("")
            setLatitude("")
            setLongitude("")
            setError(null)
            setEmptyFields([])
            console.log("Location added", json)
            dispatch({ type: "CREATE_LOCATION", payload: json })
            navigate("/database")
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1 className="font-black text-3xl my-2">Form Pengajuan Lahan</h1>
            <div className="flex flex-row my-6">
                <label htmlFor="title" className="font-medium text-xl w-1/6">
                    Nama Lahan
                </label>
                <input
                    name="title"
                    type="text"
                    onChange={(e) => {
                        setTitle(e.target.value)
                    }}
                    value={title}
                    className={
                        emptyFields.includes("title")
                            ? "bg-red-300 border border-red-600 w-1/2 rounded-md p-2"
                            : "bg-slate-200 border border-slate-30 w-1/2 rounded-md p-2"
                    }
                ></input>
            </div>
            <div className="flex flex-row my-6">
                <label htmlFor="latitude" className="font-medium text-xl w-1/6">
                    Latitude
                </label>
                <input
                    name="latitude"
                    type="text"
                    onChange={(e) => {
                        setLatitude(e.target.value)
                    }}
                    value={latitude}
                    className={
                        emptyFields.includes("latitude")
                            ? "bg-red-300 border border-red-600 w-1/2 rounded-md p-2"
                            : "bg-slate-200 border border-slate-30 w-1/2 rounded-md p-2"
                    }
                ></input>
            </div>
            <div className="flex flex-row my-6">
                <label
                    htmlFor="longitude"
                    className="font-medium text-xl w-1/6"
                >
                    Longitude
                </label>
                <input
                    name="longitude"
                    type="text"
                    onChange={(e) => {
                        setLongitude(e.target.value)
                    }}
                    value={longitude}
                    className={
                        emptyFields.includes("longitude")
                            ? "bg-red-300 border border-red-600 w-1/2 rounded-md p-2"
                            : "bg-slate-200 border border-slate-30 w-1/2 rounded-md p-2"
                    }
                ></input>
            </div>
            <div className="flex w-4/6 justify-end">
                <input
                    type="submit"
                    className="px-6 py-3 bg-green-400 rounded-md font-bold text-white"
                />
            </div>
            {error && (
                <div className="w-4/6 p-6 border border-red-600 text-red-600 bg-red-200 my-8 rounded-md">
                    {error}
                </div>
            )}
        </form>
    )
}

export default AddLocationForm
