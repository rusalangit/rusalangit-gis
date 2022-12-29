"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

import GISMap from "../components/map"

export default function Page() {
    const router = useRouter()

    return (
        <div className="h-screen">
            <div className="absolute top-0 left-0 w-full h-[10vh] flex justify-between items-center px-12 z-10 bg-rusalangit-lightgold">
                <h1 className="font-black text-2xl">RusalangitGIS</h1>
                <button
                    onClick={() => {
                        router.replace("/signin")
                    }}
                    className="bg-rusalangit-darkgreen text-white px-6 py-3 rounded-md font-semibold"
                >
                    Masuk
                </button>
            </div>
            <div className="w-full h-[90vh]">
                <GISMap />
            </div>
        </div>
    )
}
