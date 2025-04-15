import NextAuth from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: 'admin',
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const user = credentials
        if (user) {
          return {
            id: '29472084752894723890248902',
          }
        } else {
          return null
        }
      },
    }),
  ],
}
export default NextAuth(authOptions)