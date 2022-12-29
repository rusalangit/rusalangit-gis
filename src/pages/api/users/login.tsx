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

                const userExist = !!(await prisma.user.findFirst({
                    where: { email: email },
                }))

                if (email || password) {
                    if (userExist) {
                        const existingUser = await prisma.user.findUnique({
                            where: { email: email },
                        })

                        const userPassword = existingUser?.password as string

                        const validPassword = bcrypt.compare(
                            password,
                            userPassword,
                        )
                        if (!validPassword) {
                            res.status(403)
                            throw new Error("Invalid login credentials.")
                        }

                        return res.status(200).json({
                            message: "User Logged in",
                            {
                                
                            },
                            existingUser,
                        })
                    } else {
                        return res
                            .status(500)
                            .json({ message: "Credential is not exists" })
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
