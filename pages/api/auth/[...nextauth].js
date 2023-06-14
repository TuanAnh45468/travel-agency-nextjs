import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@lib/db";

// const transporter = nodemailer.createTransport({
//   host: process.env.EMAIL_SERVER_HOST,
//   port: process.env.EMAIL_SERVER_PORT,
//   auth: {
//     user: process.env.EMAIL_SERVER_USER,
//     pass: process.env.EMAIL_SERVER_PASSWORD,
//   },
//   secure: true,
// });

// async function sendVerificationRequest({ identifier, url }) {
//   transporter.sendMail({
//     from: `Travel Agency ${process.env.EMAIL_FROM}`,
//     to: identifier,
//     subject: "Your sign-in link for Travel Agency",
//     html: `<h1>${process.env.NEXTAUTH_URL}/${url}</h1>`,
//   });
// }

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
      maxAge: 10 * 60,
    }),
    // ...add more providers here],
  ],
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: "/login",
  },
};
export default NextAuth(authOptions);
// export { handler as GET, handler as POST };
