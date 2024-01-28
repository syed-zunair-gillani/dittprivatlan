import CredentialsProvider from "next-auth/providers/credentials";

interface ICredentialsProps {
     email: string,
     password: string
}

export const authOptions = {
     providers: [
          CredentialsProvider({
               name: "Credentials",
               id: "credentials",
               pages: {
                    signIn: "/auth/login",
               },
               session: {
                    strategy: "jwt",
               },
               credentials: {},
               async authorize(credentials: ICredentialsProps) {
                    console.log('credentials', credentials)
                    if (!credentials?.email || !credentials.password) {
                         return null;
                    }
                    const user = { id: 1, name: 'test', email: 'test@gmail.com' }

                    if (user) {
                         // Any object returned will be saved in `user` property of the JWT
                         return user
                    } else {
                         // If you return null then an error will be displayed advising the user to check their details.
                         return null
                    }
               }
          })
     ],
     callbacks: {
          session: ({ session, token }: any) => {
               return {
                    ...session,
                    user: {
                         ...session.user,
                         id: token.id,
                         randomKey: token.randomKey,
                    },
               };
          },
          jwt: ({ token, user }: any) => {
               if (user) {
                    const u = user as unknown as any;
                    return {
                         ...token,
                         id: u.id,
                         randomKey: u.randomKey,
                    };
               }
               return token;
          },
     },
     secret: "process.env.NEXTAUTH_SECRET"
}