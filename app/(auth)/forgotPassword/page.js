import Image from "next/image";
import { Forgot } from "@/app/components/Forgot";
import { ImageSlider } from "@/app/components/ImageSlider";

export default function Page() {
  return (
    <div className={"desktop:grid desktop:grid-cols-2 desktop:gap-x-[104px] desktop:mx-[104px] mt-[104px]"}>
      <div>
        <Image
          src={"./images/logo.svg"}
          alt={"logo"}
          width={110.35}
          height={36}
          className={"mb-[64px]"}
        ></Image>
        <Forgot></Forgot>
      </div>
        <div className={"max-desktop:hidden"}>
            <ImageSlider width={"w-[616px] h-[816px]"}></ImageSlider>
        </div>
    </div>
  );
}
