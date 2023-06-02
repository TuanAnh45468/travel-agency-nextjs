import { Navbar } from "@/app/components/Navbar";

export default function HomeLayout({ children }) {
  return (
    <main>
      <Navbar></Navbar>
      {children}
    </main>
  );
}
