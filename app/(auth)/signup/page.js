import Image from "next/image";
import {Signup} from "@/app/components/Signup";

export default function Page(){
    return <div>
        <Image
            src={"./images/logo.svg"}
            alt={"logo"}
            width={110.35}
            height={36}
            className={"mb-[64px]"}
        ></Image>
        <Signup></Signup>
    </div>
}