import Image from "next/image";

export const SocialAuthButtons = ({className}) => {
  return (
    <div className={"flex gap-x-4"}>
      <button className={`${className} border border-mint-green rounded-[4px] flex items-center justify-center`}>
        <Image
          src={"./images/icons/facebook-icon.svg"}
          alt={"facebook login"}
          width={24}
          height={24}
        ></Image>
      </button>

      <button className={`${className} border border-mint-green rounded-[4px] flex items-center justify-center`}>
        <Image
          src={"./images/icons/google-icon.svg"}
          alt={"google login"}
          width={24}
          height={24}
        ></Image>
      </button>

      <button className={`${className} border border-mint-green rounded-[4px] flex items-center justify-center`}>
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
