import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: '4bbcdf5aad8aa14e7dc0',
      clientSecret: '9248fb610eb900ff53cbbc2fa3187781dd37e004',
    }),
  ],
  secret : 'love+1004soapqu'
};
export default NextAuth(authOptions); 