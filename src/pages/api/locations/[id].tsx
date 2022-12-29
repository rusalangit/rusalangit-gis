import { NextApiRequest, NextApiResponse } from "next"

import prisma from "../../../lib/prisma"

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    try {
        switch (req.method) {
            // Fetch an existing user
            case "GET": {
                const getLocation = async (id: string) => {
                    const location = await prisma.location.findUnique({
                        where: { id },
                    })
                    return location
                }
                const { id } = req.query
                const user = await getLocation(id as string)
                return res.status(200).json(user)
            }
        }
    } catch (error) {
        return res.status(500).json("No error")
    }
}
