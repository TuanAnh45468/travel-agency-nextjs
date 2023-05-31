import { Login } from "@/app/components/Login";
import Image from "next/image";
import { ImageSlider } from "@/app/components/ImageSlider";

export default function Page() {
  return (
    <div className={"desktop:grid desktop:grid-cols-2 my-[104px] desktop:mx-[104px]"}>
      <div>
        <Image
          src={"./images/logo.svg"}
          alt={"logo"}
          width={110.35}
          height={36}
          className={"mb-[64px] col-start-1 col-span-1"}
        ></Image>
        <Login></Login>
      </div>

        <div className={"max-desktop:hidden"}>
            <ImageSlider
                width={"w-[516px]"}
                height={"h-[716px]"}
                className={"col-start-2 col-span-1"}
            ></ImageSlider>
        </div>

    </div>
  );
}
