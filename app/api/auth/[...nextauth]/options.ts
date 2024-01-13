import type { NextAuthOptions } from "next-auth";

import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import EmailProvider from "next-auth/providers/email";

import type { Adapter } from "next-auth/adapters";

import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/app/utils/db";

interface UserSession {
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
  id?: number; // Adjust the type according to your actual user ID type
}

export const options = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    // EmailProvider({
    //   server: {
    //     host: process.env.EMAIL_SERVER_HOST,
    //     port: process.env.EMAIL_SERVER_PORT,
    //     auth: {
    //       user: process.env.EMAIL_SERVER_USER,
    //       pass: process.env.EMAIL_SERVER_PASSWORD,
    //     },
    //   },
    //   from: process.env.EMAIL_FROM,
    // }),
    // CredentialsProvider({
    //   name: "Credentials",
    //   credentials: {
    //     email: { type: "text" },
    //     password: { type: "password" },
    //   },
    //   async authorize(credentials, req) {
    //     const user = { id: "42", email: "ahmed@mail.com", password: "011" };

    //     return user;
    //   },
    // }),
  ],
  adapter: PrismaAdapter(prisma) as Adapter,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session, user }) {
      return session;
    },
  },
} satisfies NextAuthOptions;
