import { DestinationCard } from "@/app/components/utils/DestinationCard";

export const Destinations = () => {
  const melbourne = {
    imageLink: "/images/destinations/melbourne.svg",
    name: "Melbourne",
    description: "An amazing journey",
    price: 700,
    type: "flight",
  };

  const paris = {
    imageLink: "/images/destinations/paris.svg",
    name: "Paris",
    description: "A Paris Adventure",
    price: 600,
    type: "flight",
  };

  const london = {
    imageLink: "/images/destinations/london.svg",
    name: "London",
    description: "London Eye Adventure",
    price: 350,
    type: "flight",
  };

  const columbia = {
    imageLink: "/images/destinations/columbia.svg",
    name: "Columbia",
    description: "Amazing streets",
    price: 700,
    type: "flight",
  };

  return (
    <div className={"mt-[80px] mx-[140px]"}>
      <div className={"flex "}>
        <div className={"flex flex-col gap-y-4"}>
          <h2 className={"text-[32px] font-semi-bold"}>Fall into travel</h2>
          <p className={"text-base"}>
            Going somewhere to celebrate this season? Whether you&apos;re going
            home or somewhere to roam, we&rsquo;ve go the travel tools to get
            you to your destination.
          </p>
        </div>
        <button
          className={
            "w-[80px] h-[40px] hover:bg-mint-green border border-mint-green self-center ml-auto"
          }
        >
          See All
        </button>
      </div>

      <div className={"flex gap-x-4 mt-[40px]"}>
        <DestinationCard {...melbourne}></DestinationCard>
        <DestinationCard {...paris}></DestinationCard>
        <DestinationCard {...london}></DestinationCard>
        <DestinationCard {...columbia}></DestinationCard>
      </div>
    </div>
  );
};
