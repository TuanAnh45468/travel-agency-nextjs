import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { AccessDenied } from "@/app/components/AccessDenied";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return <AccessDenied></AccessDenied>;
  }
  return (
    <main className="">
      <h1>Main page</h1>
    </main>
  );
}
