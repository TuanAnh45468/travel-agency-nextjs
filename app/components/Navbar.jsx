import Image from "next/image";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { SignoutBtn } from "@/app/components/SignoutBtn";

export const Navbar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="navbar bg-base-100 font-montserrat px-[104px]">
      <div className="navbar-start">
        <Link href={"/flight"}>
          <div className={"btn btn-ghost normal-case text-sm"}>
            <Image
              src={"/images/icons/airplane.svg"}
              alt={""}
              width={24}
              height={24}
            ></Image>
            Find Flight
          </div>
        </Link>

        <Link href={"/hotel"}>
          <div className={"btn btn-ghost normal-case text-sm"}>
            <Image
              src={"/images/icons/icon_bed.svg"}
              alt={""}
              width={24}
              height={24}
            ></Image>
            Find Stays
          </div>
        </Link>
      </div>
      <div className="navbar-center lg:flex">
        <Image
          src={"/images/logo.svg"}
          alt={""}
          width={110.36}
          height={36}
        ></Image>
      </div>
      <div className="navbar-end">
        <SignoutBtn></SignoutBtn>
      </div>
    </div>
  );
};
