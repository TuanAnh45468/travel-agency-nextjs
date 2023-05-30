import {Login} from "@/app/components/Login";
import Image from "next/image";

export default function Page(){
    return<>
        <Image
            src={"./images/logo.svg"}
            alt={"logo"}
            width={110.35}
            height={36}
            className={"mb-[64px]"}
        ></Image>
        <Login></Login>
    </>
}