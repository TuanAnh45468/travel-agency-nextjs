"use client";
import { signOut } from "next-auth/react";

export const SignoutBtn = () => {
  return (
    <>
      <button
        className={"btn bg-blackish-green text-white hover:bg-gray"}
        onClick={() => signOut({ callbackUrl: "/login" })}
      >
        Log out
      </button>
    </>
  );
};
