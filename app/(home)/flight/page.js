import { Hero } from "@/app/components/Hero";
import { Search } from "@/app/components/Search";
import { getFlights } from "@lib/api";
import Image from "next/image";
import { Destinations } from "@/app/components/Destinations";

export default async function Page() {
  const flights = await getFlights();

  return (
    <section className="">
      <Hero page={"flight"}></Hero>
      <Search flights={flights}></Search>
      <div className={"mt-[80px] flex flex-col gap-y-6"}>
        <div className={"flex mx-[140px]"}>
          <div className={"flex flex-col gap-y-4"}>
            <p className={"font-semi-bold text-[32px]"}>
              Let&rsquo;s go places together
            </p>
            <p className={"text-base"}>
              Discover the lasted offers and news and start planning your next
              trip with us.
            </p>
          </div>

          <button
            className={
              "w-[80px] h-[40px] border border-mint-green self-center ml-auto"
            }
          >
            See All
          </button>
        </div>

        <Image
          src={"/images/map-flight.svg"}
          alt={""}
          width={1440}
          height={886}
        ></Image>
      </div>

      <Destinations></Destinations>
    </section>
  );
}
