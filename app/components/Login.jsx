"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/app/components/Button";
import { SocialAuthButtons } from "@/app/components/SocialAuthButtons";
import { useState } from "react";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={"flex flex-col gap-y-[48px] w-[512px] h-[593px]"}>
      <div className={"flex flex-col gap-y-4"}>
        <h1 className={"font-gothic font-bold text-[40px]"}>Login</h1>
        <p className={"text-base text-gray"}>
          Login to access to your Golobe account
        </p>
      </div>

      <form className={"flex flex-col gap-y-[40px]"}>
        <div className={"flex flex-col gap-y-6"}>
          <div className={"form__group"}>
            <input
                type={"email"}
                id={"email"}
                className={"form__field px-4 rounded-sm"}
                placeholder="Your Email"
            />
            <label htmlFor={"email"} className={"form__label"}>Email</label>
          </div>

          <div className={"form__group"}>
            <input
                id={"password"}
                type={showPassword ? "text" : "password"}
                className={
                  "w-[512px] h-[56px] px-4 border border-gray rounded-sm form__field"
                }
                placeholder={"Your password"}
            />

            <Image
                src={"./images/icons/trailing-icon.svg"}
                alt={"visible"}
                className={
                  "absolute top-[50%] right-4 transform -translate-y-[10%]"
                }
                width={24}
                height={24}
                onClick={() => setShowPassword(!showPassword)}
            ></Image>

            <label htmlFor={"password"} className={"form__label"}>Password</label>
          </div>


          <div className={"flex"}>
            <label
              htmlFor={"rememberMe"}
              className={"font-medium flex items-center gap-x-2"}
            >
              <input id={"rememberMe"} type={"checkbox"} />
              <span>Remember me</span>
            </label>
            <Link
              href={"/forgotPassword-password"}
              className={"ml-auto text-slamon"}
            >
              Forgot Password
            </Link>
          </div>
        </div>

        <div className={"flex flex-col gap-y-[16px]"}>
          <Button className={"w-[512px] h-[48px] rounded-lg"}>Login</Button>
          <Link href={"/signup"} className={"font-medium self-center"}>
            Don&rsquo;t have an account?{" "}
            <span className={"text-slamon text-sm"}>Sign up</span>
          </Link>
        </div>

        <div className={"font-medium flex items-center"}>
          <div className={"w-[194px] h-[0.5px] bg-gray mr-auto"}></div>
          <span className={"block text-gray"}>Or login with</span>
          <div className={"w-[194px] h-[0.5px] bg-gray ml-auto"}></div>
        </div>
        <SocialAuthButtons className={"w-[160px] h-[56px]"}></SocialAuthButtons>
      </form>
    </div>
  );
};
