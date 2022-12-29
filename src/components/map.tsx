"use client"

import Map, { Marker } from "react-map-gl"
import "mapbox-gl/dist/mapbox-gl.css"
import { HiMapPin } from "react-icons/hi2"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function GISMap() {
    const [locations, setLocations] = useState([])

    useEffect(() => {
        const fetchLocations = async () => {
            const res = await fetch("/api/locations")
            const locations = await res.json()

            setLocations(locations)
        }

        fetchLocations()
    }, [])

    return (
        <div className="w-full h-full">
            <Map
                mapboxAccessToken="pk.eyJ1Ijoibm90LXh5Z2VuIiwiYSI6ImNsYnB3ZjRzejAwemIzcG50YzkyZnY5cTgifQ.v5c1qNugzRC5x2e5WSB1EQ"
                initialViewState={{
                    latitude: -6.6099,
                    longitude: 106.77969,
                    zoom: 15,
                }}
                style={{ width: "100%", height: "100vh" }}
                mapStyle="mapbox://styles/mapbox/streets-v11"
            >
                {locations.map((location: any, index: any) => {
                    return (
                        <Marker
                            key={index}
                            longitude={location.longitude}
                            latitude={location.latitude}
                            anchor="bottom"
                            style={{ display: "relative" }}
                        >
                            <HiMapPin className="h-8 w-8 z-10 text-rusalangit-darkgreen" />
                            <Link
                                href={`/dashboard/${location.id}`}
                                className="absolute -top-1/2 -right-2/3 bg-white p-3 font-semibold rounded-md opacity-0 hover:opacity-100"
                            >
                                {location.name}
                            </Link>
                        </Marker>
                    )
                })}
            </Map>
        </div>
    )
}
