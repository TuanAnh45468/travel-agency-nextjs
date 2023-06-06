import Image from "next/image";

export const CallToAction = ({ className }) => {
  return (
    <div
      className={`w-[1232px] h-[305px] flex bg-light-mint-green rounded-2xl ${className}`}
    >
      <div className={"flex flex-col gap-y-6 mt-6"}>
        <h2 className={"font-gothic ml-5 font-bold text-[44px] leading-[44px]"}>
          Subscribe Newsletter
        </h2>

        <div className={"flex flex-col gap-y-4"}>
          <div className={"ml-5"}>
            <p className={"text-xl font-gothic font-bold"}>The Travel</p>
            <p className={"font-medium"}>
              Get inspired! Receive travel discounts, tips and behind the scenes
              stories.
            </p>
          </div>

          <form>
            <div className={"flex items-center h-[56px] gap-x-4"}>
              <label htmlFor={"email"}></label>
              <input
                id={"email"}
                type="email"
                placeholder="Your email address"
                className="input input-bordered w-[473px] h-full"
              />
              <button className="btn btn-neutral bg-blackish-green rounded-md w-[104px] h-full">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className={"ml-auto"}>
        <Image
          src={"/images/icons/mail-box.svg"}
          alt={""}
          width={400}
          height={305}
        ></Image>
      </div>
    </div>
  );
};
