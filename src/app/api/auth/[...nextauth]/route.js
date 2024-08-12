import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { postLogin } from "../../../../services/auth/postLogin";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                usernameOrEmail: { label: "Username or Email", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                const response = await postLogin(credentials);
                const user = response.data.data.user;

                if (user) {
                    return user;
                } else {
                    throw user;
                }
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            return { ...token, ...user };
        },
        async session({ session, token }) {
            session.user = token;
            return session;
        }
    }
});

export { handler as GET, handler as POST }