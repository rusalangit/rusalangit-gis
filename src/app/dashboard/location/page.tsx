"use client"

import { useState } from "react"
import GISMap from "../../../components/map"

export default function Page() {
    const [namaLokasi, setNamaLokasi] = useState("")
    const [deskripsiLokasi, setDeskripsiLokasi] = useState("")
    const [longitude, setLongitude] = useState("")
    const [latitude, setLatitude] = useState("")

    const handleSubmit = async (e: any) => {
        e.preventDefault()

        const user = await fetch("/api/locations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                namaLokasi,
                deskripsiLokasi,
                longitude,
                latitude,
            }),
        })
    }

    return (
        <div className="px-12 py-6">
            <h1 className="font-bold text-3xl my-3">Ajukan Lokasi</h1>
            <form className="w-full">
                <div className="flex flex-col w-1/2">
                    <label>Nama Lokasi</label>
                    <input
                        type="text"
                        className="border"
                        value={namaLokasi}
                        onChange={(e) => {
                            setNamaLokasi(e.target.value)
                        }}
                    />
                </div>
                <div className="flex flex-col w-1/2">
                    <label>Deskripsi Lokasi</label>
                    <input
                        type="text"
                        className="border"
                        value={deskripsiLokasi}
                        onChange={(e) => {
                            setDeskripsiLokasi(e.target.value)
                        }}
                    />
                </div>
                <div className="flex flex-row w-full">
                    <div className="flex flex-col w-1/2">
                        <label>Longitude</label>
                        <input
                            type="text"
                            className="border"
                            value={longitude}
                            onChange={(e) => {
                                setLongitude(e.target.value)
                            }}
                        />
                    </div>
                    <div className="flex flex-col w-1/2">
                        <label>Latitude</label>
                        <input
                            type="text"
                            className="border"
                            value={latitude}
                            onChange={(e) => {
                                setLatitude(e.target.value)
                            }}
                        />
                    </div>
                </div>
                <button
                    onClick={() => {
                        handleSubmit
                    }}
                >
                    Submit
                </button>
                <div className="w-full h-1/3">
                    <GISMap />
                </div>
            </form>
        </div>
    )
}
