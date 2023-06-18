import Image from "next/image";

export const FlightDetailCard = ({ flight, airline }) => {
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
    <>
      <div className={"flex w-full"}>
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
    </>
  );
};
