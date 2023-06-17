"use client";
import { useEffect, useState } from "react";
import { getAirlineById, getFlightById } from "@lib/api";
import Link from "next/link";
import Image from "next/image";

export default function Page({ params }) {
  const [flight, setFlight] = useState({});
  const [airline, setAirline] = useState({});

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

  function formatTime(dateString) {
    const date = new Date(dateString);
    const formattedTime = date.toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
    return formattedTime;
  }

  return (
    <div className={"w-[1232px] mt-[97px]"}>
      <div className={"flex justify-between w-full"}>
        <div className={"flex flex-col gap-y-4"}>
          <div className={"font-bold text-[24px]"}>
            {airline.name} A380 Airbus
          </div>

          <div className={"flex items-center gap-x-2"}>
            <span
              className={
                "w-[40px] h-[32px] font-medium border border-mint-green flex items-center justify-center rounded-md"
              }
            >
              {flight.points}
            </span>
            <p>
              <span className={"font-bold"}>Very Good </span>
              <span>{flight.reviews} reviews</span>
            </p>
          </div>
        </div>

        <div className={"flex flex-col gap-y-4"}>
          <span className={"font-bold text-[32px] text-slamon"}>$240</span>
          <div className={"flex gap-x-4"}>
            <button
              className={
                "w-[48px] h-[48px] border border-mint-green flex items-center justify-center"
              }
            >
              <Image
                src={"/images/icons/heart.svg"}
                alt={""}
                height={20}
                width={20}
              ></Image>
            </button>
            <button
              className={
                "w-[48px] h-[48px] border border-mint-green flex items-center justify-center"
              }
            >
              <Image
                src={"/images/icons/share.svg"}
                alt={""}
                height={20}
                width={20}
              ></Image>
            </button>
            <Link
              className={
                "w-[150px] h-[48px] font-semi-bold hover:bg-dark-mint-green hover:text-white bg-mint-green flex items-center justify-center"
              }
              href={"#"}
            >
              Book now
            </Link>
          </div>
        </div>
      </div>

      <Image
        src={"/images/flight-detail.svg"}
        alt={""}
        width={1232}
        height={395}
        className={"mt-[32px]"}
      ></Image>

      <div className={"mt-[40px]"}>
        <div className={"flex"}>
          <h3 className={"font-bold text-[24px]"}>Basic Economy Features</h3>
          <div className={"flex gap-x-6 ml-auto"}>
            <div className={"flex items-center gap-x-2"}>
              <input type="checkbox" id={"economy"} className="checkbox" />
              <label htmlFor={"economy"}>Economy</label>
            </div>

            <div className={"flex items-center gap-x-2"}>
              <input type="checkbox" id={"first-class"} className="checkbox" />
              <label htmlFor={"first-class"}>First class</label>
            </div>

            <div className={"flex items-center gap-x-2"}>
              <input type="checkbox" id={"business"} className="checkbox" />
              <label htmlFor={"business"}>Business class</label>
            </div>
          </div>
        </div>

        <div className={"flex justify-between mt-[24px]"}>
          <Image
            src={"/images/detail-gallery/img1.svg"}
            alt={""}
            width={120}
            height={120}
          ></Image>
          <Image
            src={"/images/detail-gallery/img2.svg"}
            alt={""}
            width={120}
            height={120}
          ></Image>
          <Image
            src={"/images/detail-gallery/img3.svg"}
            alt={""}
            width={120}
            height={120}
          ></Image>
          <Image
            src={"/images/detail-gallery/img4.png"}
            alt={""}
            width={120}
            height={120}
          ></Image>
          <Image
            src={"/images/detail-gallery/img5.svg"}
            alt={""}
            width={120}
            height={120}
          ></Image>
          <Image
            src={"/images/detail-gallery/img.svg"}
            alt={""}
            width={120}
            height={120}
          ></Image>
          <Image
            src={"/images/detail-gallery/img1.svg"}
            alt={""}
            width={120}
            height={120}
          ></Image>
          <Image
            src={"/images/detail-gallery/img2.svg"}
            alt={""}
            width={120}
            height={120}
          ></Image>
          <Image
            src={"/images/detail-gallery/img3.svg"}
            alt={""}
            width={120}
            height={120}
          ></Image>
        </div>

        <div
          className={
            "w-full h-[102px] bg-mint-green rounded-md flex flex-col pt-4 pl-4 mt-[40px]"
          }
        >
          <h3 className={"font-bold text-2xl"}>
            {airline.name} Airline Policies
          </h3>

          <div className={"flex mt-auto mb-[18px] gap-x-9"}>
            <div className={"flex items-center gap-x-4"}>
              <Image
                src={"/images/icons/watch.svg"}
                alt={""}
                width={24}
                height={24}
              ></Image>
              <p>Pre-flight cleaning, installation of cabin HEPA filters.</p>
            </div>

            <div className={"flex items-center gap-x-4"}>
              <Image
                src={"/images/icons/watch.svg"}
                alt={""}
                width={24}
                height={24}
              ></Image>
              <p>Pre-flight cleaning, installation of cabin HEPA filters.</p>
            </div>
          </div>
        </div>
      </div>

      <div className={"mt-[40px] flex flex-col"}>
        <div className={"flex"}>
          <p>
            <span className={"font-bold text-2xl"}>{airline.name}</span>
            <br />
            <span className={"text-gray"}>Airbus A320</span>{" "}
          </p>
          <div className={"flex gap-x-[48px] ml-auto"}>
            <Image
              src={"/images/icons/airplane.svg"}
              alt={""}
              width={24}
              height={24}
            ></Image>
            <Image
              src={"/images/icons/fast-food.svg"}
              alt={""}
              width={24}
              height={24}
            ></Image>
            <Image
              src={"/images/icons/wifi.svg"}
              alt={""}
              width={24}
              height={24}
            ></Image>
            <Image
              src={"/images/icons/watch.svg"}
              alt={""}
              width={24}
              height={24}
            ></Image>
            <Image
              src={"/images/icons/airline-seat.svg"}
              alt={""}
              width={24}
              height={24}
            ></Image>
          </div>
        </div>

        <div className={"flex items-center gap-x-[80px] self-center mt-[40px]"}>
          <div className={"flex gap-x-4 items-center"}>
            <span className={"font-semi-bold text-2xl"}>
              {formatTime(flight.departureTime)}
            </span>
            <span className={"text-gray"}>({flight.originCode})</span>
          </div>
          <div className={"flex items-center gap-x-6"}>
            <Image
              src={"/images/icons/line-left.svg"}
              alt={""}
              width={36}
              height={0}
            ></Image>
            <Image
              src={"/images/icons/airplane.svg"}
              alt={""}
              width={48}
              height={48}
            ></Image>
            <Image
              src={"/images/icons/line-right.svg"}
              alt={""}
              width={36}
              height={0}
            ></Image>
          </div>
          <div className={"flex gap-x-4 items-center"}>
            <span className={"font-semi-bold text-2xl"}>
              {formatTime(flight.arrivalTime)}
            </span>
            <span className={"text-gray"}>({flight.destinationCode})</span>
          </div>
        </div>
      </div>
    </div>
  );
}
