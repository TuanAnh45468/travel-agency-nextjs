"use client";
import { SocialAuthButtons } from "@/app/components/SocialAuthButtons";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/app/components/Button";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { register } from "@lib/api";

export const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [validatePassword, setValidatePassword] = useState("");
  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const [error, setError] = useState("");
  const initial = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
  };
  const [formState, setFormState] = useState({ ...initial });
  const router = useRouter();

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      if (validatePassword !== formState.password) {
        setPasswordMismatch(true);
        return;
      } else {
        setPasswordMismatch(false);
      }

      try {
        await register(formState);
      } catch (e) {
        setError("Could not register");
      } finally {
        setFormState({ ...initial });
        setValidatePassword("");
      }
    },
    [
      formState.email,
      formState.password,
      formState.firstName,
      formState.lastName,
      formState.phoneNumber,
    ]
  );

  return (
    <div className={"w-[640px] flex flex-col gap-y-12"}>
      <div className={"flex flex-col gap-y-4"}>
        <h1 className={"font-gothic font-bold text-[40px]"}>Sign up</h1>
        <p className={"text-base font-regular text-gray"}>
          Let&rsquo;t get st up so you can access you personal account.
        </p>
      </div>

      <div className={"flex flex-col gap-y-10"}>
        <form className={"grid grid-cols-2 gap-y-6"} onSubmit={handleSubmit}>
          <div className={"form__group"}>
            <input
              type={"text"}
              id={"firstName"}
              placeholder={"First Name"}
              className={"form__field px-4 rounded-sm w-[308px] h-[56px]"}
              onChange={(e) =>
                setFormState((prevState) => ({
                  ...prevState,
                  firstName: e.target.value,
                }))
              }
              value={formState.firstName}
            />
            <label className={"form__label !w-[70px]"}>First Name</label>
          </div>

          <div className={"form__group justify-self-end"}>
            <input
              type={"text"}
              id={"lastName"}
              placeholder={"Last Name"}
              className={"form__field px-4 rounded-sm w-[308px] h-[56px]"}
              onChange={(e) => {
                setFormState((prevState) => ({
                  ...prevState,
                  lastName: e.target.value,
                }));
              }}
              value={formState.lastName}
            />
            <label className={"form__label !w-[70px]"}>Last Name</label>
          </div>

          <div className={"form__group"}>
            <input
              type={"email"}
              id={"email"}
              className={"form__field px-4 rounded-sm w-[308px] h-[56px]"}
              placeholder="Your Email"
              onChange={(e) => {
                setFormState((prevState) => ({
                  ...prevState,
                  email: e.target.value,
                }));
              }}
              value={formState.email}
            />
            <label htmlFor={"email"} className={"form__label"}>
              Email
            </label>
          </div>

          <div className={"form__group justify-self-end"}>
            <input
              type={"tel"}
              id={"phone"}
              className={"form__field px-4 rounded-sm w-[308px] h-[56px]"}
              onChange={(e) => {
                setFormState((prevState) => ({
                  ...prevState,
                  phoneNumber: e.target.value,
                }));
              }}
              value={formState.phoneNumber}
              placeholder="Your Phone"
            />
            <label htmlFor={"phone"} className={"form__label !w-[100px]"}>
              Phone Number
            </label>
          </div>

          <div className={"form__group col-start-1 col-span-2"}>
            <input
              id={"password"}
              type={showPassword ? "text" : "password"}
              className={"w-[640px] h-[56px] px-4 rounded-sm form__field"}
              onChange={(e) => {
                setFormState((prevState) => ({
                  ...prevState,
                  password: e.target.value,
                }));
              }}
              value={formState.password}
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

          <div className={"form__group col-start-1 col-span-2"}>
            <input
              id={"confirm-password"}
              type={confirmPassword ? "text" : "password"}
              className={"w-[640px] h-[56px] px-4 rounded-sm form__field"}
              onChange={(e) => {
                setValidatePassword(e.target.value);
              }}
              value={validatePassword}
              placeholder={"Confirm Password"}
            />

            <Image
              src={"./images/icons/trailing-icon.svg"}
              alt={"visible"}
              className={
                "absolute top-[50%] right-4 transform -translate-y-[35%]"
              }
              width={48}
              height={48}
              onClick={() => setConfirmPassword(!confirmPassword)}
            ></Image>

            <label
              htmlFor={"confirm-password"}
              className={"form__label !w-[110px]"}
            >
              Confirm Password
            </label>
          </div>

          {passwordMismatch && (
            <div className="toast toast-top toast-end">
              <div className="alert alert-error">
                <span>Passwords do not match. Please try again.</span>
              </div>
            </div>
          )}

          <div
            className={"flex items-center gap-x-[8px] col-start-1 col-span-2"}
          >
            <input type={"checkbox"} />
            <p>
              I agree to all the <span className={"text-slamon"}>Terms</span>{" "}
              and <span className={"text-slamon"}>Privacy Policies</span>
            </p>
          </div>

          <div className={"flex flex-col gap-y-4 col-start-1 col-span-2"}>
            <Button className={"w-[640px] h-[48px]"}>Create account</Button>
            <Link href={"/login"} className={"self-center"}>
              Already have an account?
              <span className={"text-slamon"}> Login</span>
            </Link>
          </div>
        </form>

        <div className={"font-medium flex items-center"}>
          <div className={"w-[194px] h-[0.5px] bg-gray mr-auto"}></div>
          <span className={"block text-gray"}>Or signup with</span>
          <div className={"w-[194px] h-[0.5px] bg-gray ml-auto"}></div>
        </div>

        <SocialAuthButtons className={"w-[202px] h-[56px]"}></SocialAuthButtons>
      </div>
    </div>
  );
};
