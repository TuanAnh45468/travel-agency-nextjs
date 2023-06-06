import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";

export default function HomeLayout({ children }) {
  return (
    <main className={"flex flex-col items-center"}>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </main>
  );
}
