"use client"

import React, { useEffect, useState } from "react"
import { SessionProvider } from "next-auth/react"

import "../styles/globals.css"
import "mapbox-gl/dist/mapbox-gl.css"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <SessionProvider>{children}</SessionProvider>
            </body>
        </html>
    )
}
