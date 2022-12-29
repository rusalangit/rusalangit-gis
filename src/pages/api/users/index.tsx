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
                const getUsers = async () => {
                    const users = await prisma.user.findMany({})
                    return users
                }

                const users = await getUsers()
                return res.json(users)
            }
            // Update an existing user
            case "PUT": {
                const updateUser = async (id: string, updateData: object) => {
                    const user = await prisma.user.update({
                        where: {
                            id,
                        },
                        data: {
                            ...updateData,
                        },
                    })
                    return user
                }

                const { id, ...updateData } = req.body
                const user = await updateUser(id, updateData)
                return res.json(user)
            }
            // Delete an existing user
            case "DELETE": {
                const deleteUser = async (id: string) => {
                    const user = await prisma.user.delete({
                        where: {
                            id,
                        },
                    })
                    return user
                }

                const { id } = req.body
                const user = await deleteUser(id)
                return res.json(user)
            }
            default:
                break
        }
    } catch (error) {
        return res.status(500).json("No error")
    }
}
