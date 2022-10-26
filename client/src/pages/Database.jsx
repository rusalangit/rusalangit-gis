import { Link } from "react-router-dom"
import DeleteButton from "../components/ui/DeleteButton"
import { useLocationsContext } from "../hooks/useLocationsContext"

const Database = () => {
    const { locations } = useLocationsContext()

    return (
        <div className="flex flex-col w-full">
            <div className="flex flex-row justify-between items-center my-6">
                <h1 className="font-black text-3xl">Database</h1>
                <Link
                    to="/form-pengajuan-penambahan"
                    className="px-4 py-2 bg-green-400 rounded-md font-bold text-white"
                >
                    Tambah Lahan
                </Link>
            </div>

            <table className="border-collapse border-slate-400">
                <thead>
                    <tr>
                        <th className="bg-slate-800 text-white py-4">
                            Nama Lahan
                        </th>
                        <th className="bg-slate-800 text-white py-4">
                            Latitude
                        </th>
                        <th className="bg-slate-800 text-white py-4">
                            Longitude
                        </th>
                        <th className="bg-slate-800 text-white py-4">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {locations &&
                        locations.map((location, index) => {
                            return (
                                <tr key={index}>
                                    <td className="bg-slate-300 p-2">
                                        {location.title}
                                    </td>
                                    <td className="bg-slate-300 p-2 text-center">
                                        {location.latitude}
                                    </td>
                                    <td className="bg-slate-300 p-2 text-center">
                                        {location.longitude}
                                    </td>
                                    <td className="bg-slate-300 p-2 text-center">
                                        <button className="bg-yellow-300 font-bold text-white px-4 py-2 rounded-md mx-2">
                                            Edit
                                        </button>
                                        <DeleteButton
                                            locationId={location._id}
                                        />
                                    </td>
                                </tr>
                            )
                        })}
                </tbody>
            </table>
        </div>
    )
}

export default Database
