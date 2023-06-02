import { Navbar } from "@/app/components/Navbar";

export default function HomeLayout({ children }) {
  return (
    <main className={"flex flex-col items-center"}>
      <Navbar></Navbar>
      {children}
    </main>
  );
}
