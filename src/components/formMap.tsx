"use client"

import Map, { Marker } from "react-map-gl"
import "mapbox-gl/dist/mapbox-gl.css"
import { HiMapPin } from "react-icons/hi2"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function FormMap() {
    return (
        <div className="w-full h-full">
            <Map
                mapboxAccessToken="pk.eyJ1Ijoibm90LXh5Z2VuIiwiYSI6ImNsYnB3ZjRzejAwemIzcG50YzkyZnY5cTgifQ.v5c1qNugzRC5x2e5WSB1EQ"
                initialViewState={{
                    latitude: -6.6099,
                    longitude: 106.77969,
                    zoom: 15,
                }}
                style={{ width: "100%", height: "50vh" }}
                mapStyle="mapbox://styles/mapbox/streets-v11"
            ></Map>
        </div>
    )
}
