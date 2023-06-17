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
    <div className={"flex flex-col mt-[48px]"}>
      <div className={"flex gap-x-[48px] ml-auto mb-[48px]"}>
        <div>
          <span className={"font-medium text-base"}>Cheapest</span>
          <br />
          <span className={"text-gray text-sm"}>$99 .2h 18m</span>
        </div>
        <div>
          <span className={"font-medium text-base underline"}>Best</span>
          <br />
          <span className={"text-gray text-sm"}>$99 .2h 18m</span>
        </div>
        <div>
          <span className={"font-medium text-base"}>Quickest</span>
          <br />
          <span className={"text-gray text-sm"}>$99 .2h 18m</span>
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
        <div className={"w-[840px] h-[268.5px] flex"} key={flight.id}>
          <Image
            src={flight.logo}
            alt={""}
            className={"self-start"}
            width={160}
            height={110.81}
          ></Image>
          <div className={"w-full flex flex-col gap-y-4 pl-[24px]"}>
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
              <div className={"ml-auto flex flex-col text-gray"}>
                <span>starting from</span>
                <span className={"text-slamon font-bold text-2xl"}>$104</span>
              </div>
            </div>

            <div>
              <div className={"flex font-bold gap-x-[40px] items-center"}>
                <div className={"text-base"}>
                  <input
                    type="checkbox"
                    checked="checked"
                    readOnly={true}
                    className="checkbox checkbox-sm rounded-sm mr-3"
                  />

                  <span className={""}>{formatTime(flight.departureTime)}</span>
                  <span>-</span>
                  <span> {formatTime(flight.arrivalTime)}</span>
                </div>

                <span className={"text-sm text-gray"}>non stop</span>
                <span className={"text-base"}>{flight.totalHours} hours</span>
              </div>
            </div>
            <hr />
            <div className={"flex gap-x-4"}>
              <div
                className={
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
                href={`/list-flights/${flight.id}`}
                className={
                  "w-[536px] h-[48px] bg-mint-green text-sm hover:bg-dark-mint-green hover:text-white font-bold flex justify-center items-center rounded-md"
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
