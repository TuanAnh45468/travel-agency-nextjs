import Image from "next/image";
import {SetPassword} from "@/app/components/SetPassword";

export default function Page(){
    return <div>
        <Image
            src={"./images/logo.svg"}
            alt={"logo"}
            width={110.35}
            height={36}
            className={"mb-[64px]"}
        ></Image>
        <SetPassword></SetPassword>
    </div>
}