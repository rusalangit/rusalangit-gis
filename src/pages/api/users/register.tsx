import { NextApiRequest, NextApiResponse } from "next"
import bcrypt from "bcrypt"

import prisma from "../../../lib/prisma"

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    try {
        switch (req.method) {
            case "POST": {
                const { email, password } = req.body

                const createUser = async (email: string, password: string) => {
                    const user = await prisma.user.create({
                        data: {
                            email,
                            password,
                            role: "collaborator",
                        } as {
                            email: string
                            password: string
                            role: string
                        },
                    })
                    return user
                }

                const userExist = !!(await prisma.user.findFirst({
                    where: { email: email },
                }))

                if (email || password) {
                    if (!userExist) {
                        const salt = bcrypt.genSaltSync(10)
                        const hashedPassword = bcrypt.hashSync(password, salt)

                        const user = await createUser(email, hashedPassword)
                        return res.status(200).json({
                            message: "User Registered",
                            user,
                        })
                    } else {
                        return res
                            .status(500)
                            .json({ message: "Credential already exists" })
                    }
                } else {
                    return res
                        .status(500)
                        .json({ message: "Field cannot be empty" })
                }
            }

            default:
                break
        }
    } catch (error) {
        return res.status(500).json("Error")
    }
}
