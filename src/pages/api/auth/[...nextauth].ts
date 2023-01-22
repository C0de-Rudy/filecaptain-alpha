import NextAuth, { type NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
// Prisma adapter for NextAuth, optional and can be removed
// import { PrismaAdapter } from "@next-auth/prisma-adapter";

//import { env } from "../../../env/server.mjs";
//import { prisma } from "../../../server/db";

export const authOptions: NextAuthOptions = {
  callbacks: {  
    session({ session}) {
      console.log(session)
      return session;
    },
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      //redirectUri: env.GOOGLE_REDIRECT_URL,
      //fields: ['email', 'password'],
    }),
  ],
};
console.log(process.env)
export default NextAuth(authOptions);