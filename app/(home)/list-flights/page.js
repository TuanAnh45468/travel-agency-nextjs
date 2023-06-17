"use client";
import { useSearchParams } from "next/navigation";
import { FlightCard } from "@/app/components/FlightCard";
import { useEffect, useState } from "react";
import { getFlightByParams } from "@lib/api";
import { SidebarSearch } from "@/app/components/SidebarSearch";

export default function Page() {
  const searchParams = useSearchParams();
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tripType = searchParams.get("selectedTripType");
        const origin = searchParams.get("origin");
        const destination = searchParams.get("destination");
        const departureTime = searchParams.get("departureTime");
        const queryParams = new URLSearchParams({
          tripType,
          origin,
          destination,
          departureTime,
        }).toString();

        setSearchData(await getFlightByParams(queryParams));
      } catch (error) {
        console.error("Error retrieving flights: ", error);
      }
    };
    fetchData();
  }, [searchParams]);

  return (
    <div className={"flex w-full justify-center  gap-x-6"}>
      {!searchData && (
        <h1 className={"font-bold text-6xl"}>There is no flight.</h1>
      )}
      <SidebarSearch className={"mt-[48px]"}></SidebarSearch>
      <FlightCard searchData={searchData}></FlightCard>
    </div>
  );
}
