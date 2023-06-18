import Link from "next/link";

export const AccessDenied = () => {
  return (
    <div className={"w-full min-h-screen flex items-center justify-center"}>
      <div className="artboard artboard-horizontal phone-1 flex flex-col justify-center items-center gap-y-6">
        {" "}
        <div>
          <h1 className={"text-6xl text-center font-bold text-blackish-green"}>
            Access Denied
          </h1>
          <p className={"text-center"}>
            You must be signed in to view this page
          </p>
        </div>
        <Link
          href={"/login"}
          className={
            "btn w-1/2 hover:bg-dark-mint-green hover:text-white bg-mint-green text-blackish-green"
          }
        >
          Login
        </Link>
      </div>
    </div>
  );
};
