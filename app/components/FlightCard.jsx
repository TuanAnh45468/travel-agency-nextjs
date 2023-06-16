import Image from "next/image";
import Link from "next/link";

export const FlightCard = ({ searchData }) => {
  function formatTime(dateString) {
    const date = new Date(dateString);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const period = hours < 12 ? "am" : "pm";
    const adjustedHours = hours > 12 ? hours - 12 : hours;
    const formattedTime = `${adjustedHours}:${
      minutes < 10 ? "0" + minutes : minutes
    } ${period}`;
    return formattedTime;
  }

  return (
    <div class={"flex flex-col mt-[48px]"}>
      <div class={"flex gap-x-[48px] ml-auto mb-[48px]"}>
        <div>
          <span class={"font-medium text-base"}>Cheapest</span>
          <br />
          <span class={"text-gray text-sm"}>$99 .2h 18m</span>
        </div>
        <div>
          <span class={"font-medium text-base underline"}>Best</span>
          <br />
          <span class={"text-gray text-sm"}>$99 .2h 18m</span>
        </div>
        <div>
          <span class={"font-medium text-base"}>Quickest</span>
          <br />
          <span class={"text-gray text-sm"}>$99 .2h 18m</span>
        </div>
        <button className={"flex items-center gap-x-2"}>
          <Image
            src={"/images/icons/menu.svg"}
            width={24}
            height={24}
            alt={""}
          ></Image>
          <span>Other sort</span>
        </button>
      </div>
      {searchData.map((flight) => (
        <div class={"w-[840px] h-[268.5px] flex"} key={flight.id}>
          <Image
            src={flight.logo}
            alt={""}
            className={"self-start"}
            width={160}
            height={110.81}
          ></Image>
          <div class={"w-full flex flex-col gap-y-4 pl-[24px]"}>
            <div class={"flex items-center gap-x-2"}>
              <span
                class={
                  "w-[40px] h-[32px] font-medium border border-mint-green flex items-center justify-center rounded-md"
                }
              >
                {flight.points}
              </span>
              <p>
                <span class={"font-bold"}>Very Good </span>
                <span>{flight.reviews} reviews</span>
              </p>
              <div class={"ml-auto flex flex-col text-gray"}>
                <span>starting from</span>
                <span class={"text-slamon font-bold text-2xl"}>$104</span>
              </div>
            </div>

            <div>
              <div class={"flex font-bold gap-x-[40px] items-center"}>
                <div class={"text-base"}>
                  <input
                    type="checkbox"
                    checked="checked"
                    readOnly={true}
                    className="checkbox checkbox-sm rounded-sm mr-3"
                  />

                  <span class={""}>{formatTime(flight.departureTime)}</span>
                  <span>-</span>
                  <span> {formatTime(flight.arrivalTime)}</span>
                </div>

                <span class={"text-sm text-gray"}>non stop</span>
                <span class={"text-base"}>{flight.totalHours} hours</span>
              </div>
            </div>
            <hr />
            <div class={"flex gap-x-4"}>
              <div
                class={
                  "w-[48px] h-[48px] border border-mint-green flex items-center justify-center rounded-md"
                }
              >
                <Image
                  src={"/images/icons/heart.svg"}
                  alt={""}
                  width={20}
                  height={20}
                ></Image>
              </div>
              <Link
                href={"#"}
                className={
                  "w-[536px] h-[48px] bg-mint-green text-sm font-bold flex justify-center items-center rounded-md"
                }
              >
                View Deals
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
