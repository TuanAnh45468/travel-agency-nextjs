import Image from "next/image";
import Link from "next/link";
import { Button } from "@/app/components/Button";

export const Verification = () => {
  return (
    <div className={"w-[512px] h-[344px]"}>
      <div className={"flex flex-col gap-y-4"}>
        <Link className={"flex items-center gap-x-[4px]"} href={"/login"}>
          <Image
            src={"./images/icons/chevron_back.svg"}
            alt={"back to login"}
            width={24}
            height={24}
          ></Image>
          <span>Back to login</span>
        </Link>
        <h1 className={"font-gothic font-bold text-[40px]"}>Verify code</h1>
        <p className={"text-gray"}>
          An authentication code has been sent to your email.
        </p>
      </div>

      <form className={"flex flex-col gap-y-8"}>
        <div className={"flex flex-col gap-y-4"}>
          <div className={"form__group"}>
            <input
              type={"text"}
              id={"verification"}
              className={"form__field px-4 rounded-sm"}
              placeholder={"Enter code"}
            />
            <label htmlFor={"verification"} className={"form__label !w-[80px]"}>
              Enter code
            </label>
          </div>
          <div className={"flex gap-x-[2px]"}>
            <p>Don&rsquo;t receive a code?</p>
            <button className={"text-slamon"}> Resend</button>
          </div>
        </div>

        <Button className={"w-[512px] h-[48px]"}>Verify</Button>
      </form>
    </div>
  );
};
