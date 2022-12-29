import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import prisma from "../../../lib/prisma"
import { PrismaAdapter } from "@next-auth/prisma-adapter"

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    callbacks: {
        async signIn({ account, profile }) {
            console.log(account)
            if (account.provider === "google") {
                return true
            }
        },
    },
    pages: {
        signIn: "/signin",
    },
    session: async ({ session }) => {
        return session
    },
    redirect: async (url, _baseUrl) => {
        return Promise.resolve("/")
    },
}

export default NextAuth(authOptions)
