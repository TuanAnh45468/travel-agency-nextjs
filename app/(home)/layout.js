import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import { getServerSession } from "next-auth";
import { authOptions } from "/pages/api/auth/[...nextauth]";
import { AccessDenied } from "@/app/components/AccessDenied";

export default async function HomeLayout({ children }) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <AccessDenied></AccessDenied>;
  }

  return (
    <main className={"flex flex-col items-center"}>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </main>
  );
}
