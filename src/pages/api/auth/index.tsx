import prisma from "../../../lib/prisma"
import { hashToken } from "../../../lib/hashTokens"

// used when we create a refresh token.
export async function addRefreshTokenToWhitelist({
    jti,
    refreshToken,
    userId,
}: {
    jti: any
    refreshToken: any
    userId: any
}) {
    return await prisma.refreshToken.create({
        data: {
            hashedToken: hashToken(refreshToken),
            userId,
        },
    })
}

// used to check if the token sent by the client is in the database.
export async function findRefreshTokenById(id: any) {
    return await prisma.refreshToken.findUnique({
        where: {
            id,
        },
    })
}

// soft delete tokens after usage.
export async function deleteRefreshToken(id: any) {
    return await prisma.refreshToken.update({
        where: {
            id,
        },
        data: {
            revoked: true,
        },
    })
}

export async function revokeTokens(userId: any) {
    const res = await prisma.refreshToken.updateMany({
        where: {
            userId,
        },
        data: {
            revoked: true,
        },
    })
    return res
}
