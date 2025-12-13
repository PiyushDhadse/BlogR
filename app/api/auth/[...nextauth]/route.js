import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if(account.provider = "github"){
        // connect to the database
        const client = mongoose.connect()
      }
    },
  },
};
export const GET = NextAuth(authOptions);
export const POST = NextAuth(authOptions);
export const PUT = NextAuth(authOptions);
