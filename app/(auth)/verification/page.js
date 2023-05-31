import Image from "next/image";
import {Verification} from "@/app/components/Verification";
import {ImageSlider} from "@/app/components/ImageSlider";

export default function Page(){
    return <div className={"grid grid-cols-2 mt-[104px] gap-x-[104px] mx-[104px]"}>
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
    <ImageSlider width={"w-[616px]"} height={"h-[816px]"}></ImageSlider>
    </div>
}