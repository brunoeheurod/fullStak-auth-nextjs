import { authOptions } from "@/authOptions";
import { Backend_URL } from "@/lib/Constants";
import { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";


// async function refreshToken(token: JWT): Promise<JWT> {
//   const res = await fetch(Backend_URL + "/auth/refresh", {
//     method: "POST",
//     headers: {
//       authorization: `Refresh ${token.backendTokens.refreshToken}`,
//     },
//   });
//   // console.log("refreshed");

//   const response = await res.json();

//   return {
//     ...token,
//     backendTokens: {
//       accessToken: response.accessToken,
//       refreshToken: token.backendTokens.refreshToken,
//       expiresIn: response.expiresIn,
//     }
//   }
// }

// export const authOptions: NextAuthOptions = {
//   // pages: {
//   //   signIn: "/login",
//   // },
//   secret: process.env.NEXTAUTH_SECRET,
//   providers: [
//     CredentialsProvider({
//       name: "Credenciais",
      

//       credentials: {
        
//         username: {
//           label: "Usuário",
//           type: "text",
//           placeholder: "Email",
//         },
//         password: { label: "Senha", type: "password" },
      

//       },
//       async authorize(credentials, req) {
//         if (!credentials?.username || !credentials?.password) return null;
//         const { username, password } = credentials;

//         const res = await fetch(Backend_URL + "/auth/login", {
//           method: "POST",
//           body: JSON.stringify({
//             username,
//             password,
//           }),
//           headers: {
//             "Content-Type": "application/json",
//           },
//         });
//         if (res.status === 401) {
//           console.log(res.statusText);

//           return null;
//         }

//         const user = await res.json();
//         return user;
//       },
//     }),
//   ],
//   pages: {
//     signIn: '/sign-in',
//   },

//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) return {...token, ...user}
//       if (new Date().getTime() < token.backendTokens.expiresIn) return token;


//       return await refreshToken(token);
//     },

//     async session({ token, session}) {
//       // console.log(token.user)
//       if (token) {
//       session.user = token.user
//       session.backendTokens = token.backendTokens;
//       }

//       return session;
//     },

//     // async redirect({ url, baseUrl }) {

//     //   return "/"
//     // },

//   }
// };


const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
