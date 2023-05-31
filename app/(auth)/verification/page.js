import Image from "next/image";
import {Verification} from "@/app/components/Verification";

export default function Page(){
    return <div>
        <Image
            src={"./images/logo.svg"}
            alt={"logo"}
            width={110.35}
            height={36}
            className={"mb-[64px]"}
        ></Image>
        <Verification></Verification>
    </div>
}