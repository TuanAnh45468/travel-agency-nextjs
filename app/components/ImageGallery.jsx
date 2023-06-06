import Image from "next/image";

export const ImageGallery = () => {
  return (
    <div className={"mt-[80px]  mx-[140px]"}>
      <div className={"flex mb-[24px]"}>
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
            "w-[80px] h-[40px] transition duration-200 border hover:bg-mint-green border-mint-green self-center ml-auto"
          }
        >
          See All
        </button>
      </div>

      <div className={"flex gap-x-6"}>
        <div
          className={
            "w-[552px] h-[424px] bg-mint-green flex flex-col px-6 pt-6 rounded-xl "
          }
        >
          <div className={"flex"}>
            <p
              className={
                "font-gothic w-[363px] leading-[40px] font-semi-bold text-[40px]"
              }
            >
              Backpacking Sri Lanka
            </p>
            <div
              className={
                "w-[68px] h-[62px] rounded-md bg-white flex flex-col items-center justify-center ml-auto"
              }
            >
              {" "}
              <span>From</span>
              <span className={"font-semi-bold text-xl"}>$700</span>
            </div>
          </div>
          <p className={"mt-6"}>
            Traveling is a unique experience as it&apos;s the best way to unplug
            from the pushes and pulls of daily life. It helps us to forget about
            our problems, frustrations, and fears at home. During our journey,
            we experience life in different ways. We explore new places,
            cultures, cuisines, traditions, and ways of living.
          </p>
          <button
            className={
              "w-[504px] h-[48px] mt-auto hover:bg-dark-mint-green hover:text-white transition duration-200 bg-white font-medium rounded-md mb-6"
            }
          >
            Book Flight
          </button>
        </div>

        <div className={"w-[656px] grid grid-cols-2 gap-x-5 gap-y-6"}>
          <Image
            src={"/images/gallery/nature-1.svg"}
            alt={""}
            width={318}
            height={200}
          />
          <Image
            src={"/images/gallery/nature-2.svg"}
            alt={""}
            width={318}
            height={200}
          />
          <Image
            src={"/images/gallery/nature-3.svg"}
            alt={""}
            width={318}
            height={200}
          />
          <Image
            src={"/images/gallery/nature-4.svg"}
            alt={""}
            width={318}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};
