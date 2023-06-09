import "./globals.css";
import { Gothic_A1, Montserrat } from "next/font/google";
import { NextAuthProvider } from "@/app/providers";

const gothic = Gothic_A1({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-gothic",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Travel Agency",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={montserrat.className}>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
