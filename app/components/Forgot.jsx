import Link from "next/link";
import Image from "next/image";
import { SocialAuthButtons } from "@/app/components/SocialAuthButtons";
import { Button } from "@/app/components/Button";

export const Forgot = () => {
  return (
    <div className={"w-[512px] h-[500px] flex flex-col gap-y-12"}>
      <div className={"flex flex-col gap-y-4"}>
        <Link href={"/login"} className={"flex items-center gap-x-1"}>
          <Image
            src={"./images/icons/chevron_back.svg"}
            width={24}
            height={24}
            alt={"Back to login"}
          ></Image>
          <p>Back to login</p>
        </Link>
        <h1 className={"font-gothic font-bold text-[40px]"}>
          Forgot your password?
        </h1>
        <p className={"text-gray text-base"}>
          Don&rsquo;t worry, happens to all of us
        </p>
      </div>

      <form className={"flex flex-col gap-y-8"}>

        <div className={"form__group"}>
          <input
            type={"email"}
            id={"email"}
            className={"form__field px-4"}
            placeholder="Your Email"
          />
          <label htmlFor={"email"} className={"form__label"}>
            Email
          </label>
        </div>

        <Button className={"w-[512px] h-[56px] rounded-sm"}>Submit</Button>
      </form>
      <div className={"font-medium flex items-center"}>
        <div className={"w-[194px] h-[0.5px] bg-gray mr-auto"}></div>
        <span className={"block text-gray"}>Or login with</span>
        <div className={"w-[194px] h-[0.5px] bg-gray ml-auto"}></div>
      </div>
      <SocialAuthButtons className={"w-[160px] h-[56px]"}></SocialAuthButtons>
    </div>
  );
};
