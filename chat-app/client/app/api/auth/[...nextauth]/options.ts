/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username:",
          type: "text",
          placeholder: "Username",
        },
        password: {
          label: "Password:",
          type: "text",
        },
      },
      async authorize(credentials, req) {
        return credentials as any;
      },
    }),
  ],
  pages: {
    signIn: "/signIn",
    // signOut: "/signOut",
  },
};
