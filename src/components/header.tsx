"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { signOut, useSession } from "next-auth/react"

import {
    HiMenuAlt2,
    HiOutlineServer,
    HiOutlineUser,
    HiLogout,
    HiOutlineTemplate,
} from "react-icons/hi"
import { HiMapPin } from "react-icons/hi2"

const userMenuData = [
    {
        title: "Lokasiku",
        path: "/dashboard/location",
        icon: <HiMapPin className="h-10 w-10" />,
    },
]
const adminMenuData = [
    {
        title: "Database",
        path: "/dashboard/database",
        icon: <HiOutlineServer className="h-10 w-10" />,
    },
]

export default function Header() {
    const session = useSession()
    const router = useRouter()

    const [sidebar, setSidebar] = useState(false)

    return (
        <header className="h-full flex justify-center bg-rusalangit-lightgold">
            <nav className="my-8 flex flex-col gap-4 px-6">
                <div className="flex flex-row gap-6 items-center">
                    <h1
                        className={`text-2xl font-black ${
                            sidebar ? "block" : "hidden"
                        }`}
                    >
                        Rusalangit GIS
                    </h1>
                    <button
                        onClick={() => {
                            setSidebar(!sidebar)
                        }}
                        className="bg-rusalangit-darkgreen rounded-md p-3 flex justify-center items-center"
                    >
                        <HiMenuAlt2 className="h-10 w-10 text-white" />
                    </button>
                </div>
                <div
                    className={` flex-row gap-2 justify-center items-center py-3 my-3 rounded-md text-white ${
                        sidebar ? "bg-rusalangit-lightbrown flex" : "hidden"
                    }`}
                >
                    <div className="h-10 w-10 bg-slate-400 rounded-full"></div>
                    <h2 className={`py-2 ${sidebar ? "block" : "hidden"}`}>
                        Hi, <span className="font-bold">Dhaffa Agus</span>
                    </h2>
                </div>
                <Link
                    href="/dashboard"
                    className="flex flex-row p-3 gap-4 hover:bg-white rounded-md"
                >
                    <HiOutlineTemplate className="h-10 w-10" />
                    <h2
                        className={`py-2 font-semibold ${
                            sidebar ? "block" : "hidden"
                        }`}
                    >
                        Dashboard
                    </h2>
                </Link>
                {userMenuData.map((item, index) => {
                    return (
                        <Link
                            key={index}
                            href={item.path}
                            className="flex flex-row p-3 gap-4 hover:bg-white rounded-md"
                        >
                            {item.icon}
                            <h2
                                className={`py-2 font-semibold ${
                                    sidebar ? "block" : "hidden"
                                }`}
                            >
                                {item.title}
                            </h2>
                        </Link>
                    )
                })}
                <Link
                    href="/dashboard/profile"
                    className="flex flex-row p-3 gap-4 hover:bg-white rounded-md"
                >
                    <HiOutlineUser className="h-10 w-10" />
                    <h2
                        className={`py-2 font-semibold ${
                            sidebar ? "block" : "hidden"
                        }`}
                    >
                        Profil
                    </h2>
                </Link>
                <button
                    onClick={() => {
                        signOut()
                        router.push("/")
                    }}
                    className="flex flex-row p-3 gap-4 hover:bg-white rounded-md"
                >
                    <HiLogout className="h-10 w-10" />
                    <h2
                        className={`py-2 font-semibold ${
                            sidebar ? "block" : "hidden"
                        }`}
                    >
                        Keluar
                    </h2>
                </button>
            </nav>
        </header>
    )
}
