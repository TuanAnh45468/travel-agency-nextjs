import Image from "next/image";
import { SetPassword } from "@/app/components/SetPassword";
import { ImageSlider } from "@/app/components/ImageSlider";

export default function Page() {
  return (
    <div className={"grid grid-cols-2 mt-[104px] gap-x-[104px] mx-[104px]"}>
      <div>
        <Image
          src={"./images/logo.svg"}
          alt={"logo"}
          width={110.35}
          height={36}
          className={"mb-[64px]"}
        ></Image>
        <SetPassword></SetPassword>
      </div>
      <ImageSlider width={"w-[416px]"} height={"h-[616px]"}></ImageSlider>
    </div>
  );
}
