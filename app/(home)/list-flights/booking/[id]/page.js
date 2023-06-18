"use client";
import { useEffect, useState } from "react";
import { getAirlineById, getFlightById } from "@lib/api";
import { FlightDetailCard } from "@/app/components/FlightDetailCard";
import Image from "next/image";

export default function Page({ params }) {
  const [flight, setFlight] = useState({});
  const [airline, setAirline] = useState({});
  const [isButton1Clicked, setIsButton1Clicked] = useState(false);
  const [isButton2Clicked, setIsButton2Clicked] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedFlight = await getFlightById(params.id);
        setFlight(fetchedFlight);

        const fetchedAirline = await getAirlineById(fetchedFlight.airlineId);
        setAirline(fetchedAirline);
      } catch (error) {
        console.error("Error fetching flight and airline data:", error);
      }
    };

    fetchData();
  }, [params.id]);

  const handleClickButton1 = () => {
    setIsButton1Clicked(true);
    setIsButton2Clicked(false);
  };

  const handleClickButton2 = () => {
    setIsButton2Clicked(true);
    setIsButton1Clicked(false);
  };
  return (
    <div className={"flex gap-x-[64px] mt-[86px]"}>
      <div className={"w-[790px] h-[349px]"}>
        <FlightDetailCard flight={flight} airline={airline}></FlightDetailCard>
        <div className={"flex flex-col gap-y-4 mt-[40px]"}>
          <button
            className={`w-full h-[80px] ${
              isButton1Clicked ? "bg-mint-green" : "bg-white"
            }  flex flex-col justify-center pl-4 rounded-lg`}
            onClick={handleClickButton1}
          >
            <span className={"font-bold"}>Pay in full</span>
            <span>Pay the total and you are all set</span>
          </button>

          <button
            className={`w-full h-[80px] ${
              isButton2Clicked ? "bg-mint-green" : "bg-white"
            }  flex flex-col justify-center px-4 rounded-lg`}
            onClick={handleClickButton2}
          >
            <span className={"font-bold"}>Pay part now, part later</span>
            <span className={"text-left"}>
              Pay $207.43 now, and the rest ($207.43) will be automatically
              charged to the same payment method on Nov 14, 2022. No extra fees.
            </span>
          </button>
        </div>
      </div>

      <div className={"w-[450px] h-[469.5px] flex flex-col gap-y-[32px]"}>
        <div className={"flex gap-x-6"}>
          <Image
            src={"/images/flight-booking.svg"}
            alt={""}
            width={120}
            height={120}
          ></Image>
          <div className={"flex flex-col gap-y-5"}>
            <div>
              <span className={"text-gray"}>Economy</span>
              <br />
              <span className={"font-semi-bold text-xl"}>
                {airline.name} A380 Airbus
              </span>
            </div>

            <div className={"flex items-center gap-x-2"}>
              <span
                className={
                  "w-[40px] h-[32px] border border-mint-green flex items-center justify-center"
                }
              >
                {flight.points}
              </span>
              <span className={"font-bold text-[12px]"}>Very Good</span>
              <span>{flight.reviews} reviews</span>
            </div>
          </div>
        </div>

        <p>
          Your booking is protected by <strong>golobe</strong>{" "}
        </p>

        <div className="overflow-x-auto">
          <table className="table table-xs table-pin-rows table-pin-cols">
            <thead>
              <tr>
                <th></th>
                <td>Price Detail</td>
                <td>Price</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Base Fare</td>
                <td>$400</td>
              </tr>
              <tr>
                <th>2</th>
                <td>Discount</td>
                <td>$400</td>
              </tr>
              <tr>
                <th>3</th>
                <td>Taxes</td>
                <td>$400</td>
              </tr>
              <tr>
                <th>4</th>
                <td>Service Fee</td>
                <td>$400</td>
              </tr>
              <tr>
                <th>6</th>
                <td>Total</td>
                <td>$1600</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
