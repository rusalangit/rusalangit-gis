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
                const getLocations = async () => {
                    const locations = await prisma.location.findMany({})
                    return locations
                }

                const users = await getLocations()
                return res.status(200).json(users)
            }
            // Create a new user
            case "POST": {
                const createLocation = async (
                    name: string,
                    latitude: string,
                    longitude: string,
                    description: string,
                    ownerId: string,
                    accepted: string,
                ) => {
                    const location = await prisma.location.create({
                        data: {
                            name,
                            latitude,
                            longitude,
                            description,
                            ownerId,
                        },
                    })
                    return location
                }

                try {
                    const { name, latitude, longitude, description, ownerId } =
                        req.body
                    const accepted = "false"
                    const user = await createLocation(
                        name,
                        latitude,
                        longitude,
                        description,
                        ownerId,
                        accepted,
                    )
                    return res
                        .status(200)
                        .json({ message: "Location added", user })
                } catch (error) {
                    return res
                        .status(500)
                        .json({ message: "Fill out the blanks" })
                }
            }
            // Update an existing user
            case "PUT": {
                const updateLocation = async (
                    id: string,
                    updateData: object,
                ) => {
                    const location = await prisma.location.update({
                        where: {
                            id,
                        },
                        data: {
                            ...updateData,
                        },
                    })
                    return location
                }

                const { id, ...updateData } = req.body
                const user = await updateLocation(id, updateData)
                return res.status(200).json(user)
            }

            case "DELETE": {
                const deleteLocation = async (id: string) => {
                    const location = await prisma.location.delete({
                        where: {
                            id,
                        },
                    })
                    return location
                }

                const { id } = req.body
                const user = await deleteLocation(id)
                return res.status(200).json(user)
            }
            default:
                break
        }
    } catch (error) {
        return res.status(500).json("No error")
    }
}
