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
                const getUser = async (id: string) => {
                    const user = await prisma.user.findUnique({
                        where: { id },
                    })
                    return user
                }
                const { id } = req.query
                const user = await getUser(id as string)
                return res.json(user)
            }
        }
    } catch (error) {
        return res.status(500).json("No error")
    }
}
