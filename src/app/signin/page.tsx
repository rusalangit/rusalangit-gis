"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { signIn, useSession } from "next-auth/react"

export default function Page() {
    const session = useSession()
    const [isLoading, setIsLoading] = useState(false)
    console.log(session)

    const router = useRouter()

    useEffect(() => {
        if (session.status === "authenticated") {
            router.push("/dashboard")
        }
    }, [router, session])

    const handleSubmit = async (e: any) => {
        e.preventDefault()

        setIsLoading(true)
        await signIn("google")
    }

    return (
        <div className="w-screen h-screen flex flex-row">
            <div className="basis-1/2 flex w-full h-full object-cover">
                <Image
                    src="/img/background.jpg"
                    width={0}
                    height={0}
                    sizes={"100"}
                    className="absolute left-0 top-0 w-screen h-screen object-cover object-right-bottom -z-10"
                    alt="Background"
                />
            </div>
            <div className="basis-1/2 w-full flex justify-center items-center rounded-l-3xl bg-rusalangit-lightgold text-rusalangit-black1">
                <div className="w-2/3">
                    <h1 className="text-3xl font-black my-3">RusalangitGIS</h1>
                    <h2 className="text-2xl font-bold mt-3 mb-6 text-rusalangit-darkgreen">
                        Masuk
                    </h2>
                    <form
                        className="flex flex-col gap-3"
                        onSubmit={handleSubmit}
                    >
                        <button
                            disabled={isLoading}
                            className="bg-white text-rusalangit-darkgreen w-full p-3 justify-self-center rounded-lg font-bold"
                            type="submit"
                        >
                            Masuk dengan Google
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
