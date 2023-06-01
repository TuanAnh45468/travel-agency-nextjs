"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/app/components/Button";
import { SocialAuthButtons } from "@/app/components/SocialAuthButtons";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";

const { login } = require("@lib/api");

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const initial = { email: "", password: "" };
  const [formState, setFormState] = useState({ ...initial });
  const [isError, setIsError] = useState(false);
  const router = useRouter();

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      try {
        await login(formState);
        router.replace("/");
      } catch (e) {
        throw new Error("Invalid Login");
      } finally {
        setFormState({ ...initial });
      }
    },
    [formState.email, formState.password]
  );
  return (
    <div className={"flex flex-col gap-y-[48px] w-[512px] h-[593px]"}>
      <div className={"flex flex-col gap-y-4"}>
        <h1 className={"font-gothic font-bold text-[40px]"}>Login</h1>
        <p className={"text-base text-gray"}>
          Login to access to your Golobe account
        </p>
      </div>

      <form className={"flex flex-col gap-y-[40px]"} onSubmit={handleSubmit}>
        <div className={"flex flex-col gap-y-6"}>
          <div className={"form__group"}>
            <input
              type={"email"}
              id={"email"}
              value={formState.email}
              onChange={(event) => {
                setFormState((prevState) => ({
                  ...prevState,
                  email: event.target.value,
                }));
              }}
              className={"form__field px-4 rounded-sm"}
              placeholder="Your Email"
            />
            <label htmlFor={"email"} className={"form__label"}>
              Email
            </label>
          </div>

          <div className={"form__group"}>
            <input
              id={"password"}
              value={formState.password}
              onChange={(event) => {
                setFormState((prevState) => ({
                  ...prevState,
                  password: event.target.value,
                }));
              }}
              type={showPassword ? "text" : "password"}
              className={"w-[512px] h-[56px] px-4 rounded-sm form__field"}
              placeholder={"Your Password"}
            />

            <Image
              src={"./images/icons/trailing-icon.svg"}
              alt={"visible"}
              className={
                "absolute top-[50%] right-4 transform -translate-y-[35%]"
              }
              width={48}
              height={48}
              onClick={() => setShowPassword(!showPassword)}
            ></Image>

            <label htmlFor={"password"} className={"form__label !w-[70px]"}>
              Password
            </label>
          </div>

          {isError && (
            <div className="toast toast-top toast-end">
              <div className="alert alert-error">
                <span>Email or password invalid.</span>
              </div>
            </div>
          )}

          <div className={"flex"}>
            <label
              htmlFor={"rememberMe"}
              className={"font-medium flex items-center gap-x-2"}
            >
              <input id={"rememberMe"} type={"checkbox"} />
              <span>Remember me</span>
            </label>
            <Link href={"/forgotPassword"} className={"ml-auto text-slamon"}>
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
