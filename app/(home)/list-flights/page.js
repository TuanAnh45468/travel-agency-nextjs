"use client";
import { useSearchParams } from "next/navigation";
import { FlightCard } from "@/app/components/FlightCard";
import { useEffect, useState } from "react";
import { getFlightByParams } from "@lib/api";

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
    <div class={"flex w-full items-center justify-center"}>
      {!searchData && <h1 class={"font-bold text-6xl"}>There is no flight.</h1>}

      <FlightCard searchData={searchData}></FlightCard>
    </div>
  );
}
