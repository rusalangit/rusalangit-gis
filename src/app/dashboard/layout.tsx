"use client"

import React from "react"
import Footer from "../../components/footer"
import Header from "../../components/header"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const { data: session, status } = useSession()
    const router = useRouter()

    if (status === "loading") {
        return <p>Loading...</p>
    }

    if (status === "unauthenticated") {
        router.replace("/signin")
    }

    return (
        <main className="flex flex-row w-screen h-screen">
            <Header />
            <div className="flex flex-col w-full h-full">
                <div className="w-full h-[90vh]">{children}</div>
                <Footer />
            </div>
        </main>
    )
}
