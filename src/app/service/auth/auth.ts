import NextAuth from "next-auth"
import { prisma } from "../db-util"
import { authConfig } from "../../../../auth.config"

export const getAdminUser = async (username: string) => {
  return await prisma.adminUser.findFirst({
    where: {username}
  })
}

export const { signIn, signOut, auth } = NextAuth(authConfig)

export const getLoginState = async () => {
  return auth().then((state) => state !== null)
}