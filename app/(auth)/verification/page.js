import Image from "next/image";
import {Verification} from "@/app/components/Verification";
import {ImageSlider} from "@/app/components/ImageSlider";

export default function Page(){
    return <div className={"desktop:grid desktop:grid-cols-2 mt-[104px] desktop:mx-[104px] desktop:gap-x-[104px] my-[104px]"}>
        <div>
            <Image
                src={"./images/logo.svg"}
                alt={"logo"}
                width={110.35}
                height={36}
                className={"mb-[64px]"}
            ></Image>
            <Verification></Verification>
        </div>
        <div className={"max-desktop:hidden"}>
            <ImageSlider width={"w-[416px]"} height={"h-[616px]"}></ImageSlider>
        </div>
    </div>
}