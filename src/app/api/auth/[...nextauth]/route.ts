import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";


const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "SingIn",
      credentials: {
        email: { type: "text" },
        password: { type: "password" },
        first_name: { type: "text" },
        lastname: { type: "text" },
        tel: { type: "text" },
      },
      async authorize(credentials) {
        if (!credentials) {
          throw new Error("Invalid credentials");
        }
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      return { ...session, ...user };
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
    signOut: "/login",
    error: "/error",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST, authOptions };
