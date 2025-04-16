import { signinSchema } from '@/app/lib/schema'
import type { NextAuthConfig } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs';
import { prisma } from '@/app/service/db-util';

const loginRoute = '/admin/login'
const adminRoute = '/admin'

export const authConfig: NextAuthConfig = {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validatedCredentials = signinSchema.safeParse(credentials)
        if (validatedCredentials.error) return null

        const { username, password } = validatedCredentials.data;
        // NextAuth初期化時にエラーが出るため直接クエリを実行する
        // https://github.com/nextauthjs/next-auth/discussions/11276
        // const user = await getAdminUser(username)
        const user = await prisma.adminUser.findFirst({
            where: {username}
        })

        if (!user) return null

        const isMatchedPassword = await bcrypt.compare(password, user.password);
        if (isMatchedPassword) return user

        return null
      },
    }),
  ],
  pages: {
    signIn: '/',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isLoginRoute = nextUrl.pathname === loginRoute
      const isAdminRoute = nextUrl.pathname.startsWith(adminRoute)

      if (isLoginRoute && isLoggedIn) return Response.redirect(new URL('/admin', nextUrl))
      if (!isAdminRoute || isLoginRoute) return true;

      if (isLoggedIn) return true

      return false
    },
  },
}
