"use client";
import Link from "next/link";
import { SocialAuthButtons } from "@/app/components/SocialAuthButtons";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export const Login = () => {
  const initial = { email: "" };
  const [formState, setFormState] = useState({ ...initial });
  const [isError, setIsError] = useState(false);
  const router = useRouter();

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      try {
        const email = formState.email;
        const { error } = await signIn("email", {
          email,
          redirect: true,
          callbackUrl: "/flight",
        });
      } catch (error) {
        throw new Error("Invalid Login: ", error);
      } finally {
        setFormState({ ...initial });
      }
    },
    [formState.email]
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
          <button
            className={
              "w-[512px] h-[48px] rounded-lg bg-mint-green text-blackish-green font-semi-bold"
            }
          >
            Login
          </button>
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
