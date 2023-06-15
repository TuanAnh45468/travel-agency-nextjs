"use client";
import Image from "next/image";
import { signIn } from "next-auth/react";

export const SocialAuthButtons = ({ className }) => {
  const handleSignin = async () => {
    signIn("google", {
      callbackUrl: "/flight",
    }).catch((error) => {
      console.error("Error when login with google: ", error);
    });
  };

  return (
    <div className={"flex gap-x-4"}>
      <button
        className={`${className} border border-mint-green rounded-[4px] flex items-center justify-center`}
        disabled={true}
      >
        <Image
          src={"./images/icons/facebook-icon.svg"}
          alt={"facebook login"}
          width={24}
          height={24}
        ></Image>
      </button>

      <button
        className={`${className} border border-mint-green rounded-[4px] flex items-center justify-center`}
        onClick={handleSignin}
      >
        <Image
          src={"./images/icons/google-icon.svg"}
          alt={"google login"}
          width={24}
          height={24}
        ></Image>
      </button>

      <button
        className={`${className} border border-mint-green rounded-[4px] flex items-center justify-center`}
        disabled={true}
      >
        <Image
          src={"./images/icons/apple-icon.svg"}
          alt={"apple login"}
          width={24}
          height={24}
        ></Image>
      </button>
    </div>
  );
};
