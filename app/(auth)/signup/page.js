import Image from "next/image";
import { Signup } from "@/app/components/Signup";
import { ImageSlider } from "@/app/components/ImageSlider";

export default function Page() {
  return (
    <div className={"desktop:grid desktop:grid-cols-2 desktop:gap-x-[104px] mt-[104px] desktop:justify-center desktop:mx-[80px]"}>
        <div className={"max-desktop:hidden"}>
            <ImageSlider width={"w-[488px]"} height={"h-[816px]"}></ImageSlider>
        </div>


      <div>
        <Image
          src={"./images/logo.svg"}
          alt={"logo"}
          width={110.35}
          height={36}
          className={"mb-[64px]"}
        ></Image>
        <Signup></Signup>
      </div>
    </div>
  );
}
