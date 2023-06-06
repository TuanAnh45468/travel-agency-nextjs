import Image from "next/image";
import { Button } from "@/app/components/Button";

export const DestinationCard = ({
  imageLink,
  name,
  description,
  price,
  type,
}) => {
  return (
    <div className={"w-[296px] h-[420px] relative"}>
      <Image src={imageLink} alt={""} width={296} height={420}></Image>

      <div className={"flex flex-col gap-y-4 mx-[24px] absolute bottom-[24px]"}>
        <div className={"flex w-full "}>
          <div className={"flex flex-col"}>
            <span className={"font-semi-bold text-2xl text-white"}>{name}</span>
            <span className={"text-white"}>{description}</span>
          </div>
          <span className={"ml-auto font-semi-bold text-2xl text-white"}>
            $ {price}
          </span>
        </div>
        <Button className={"w-[248px] h-[48px] rounded-md"}>
          {type === "flight" ? "Book Flight" : "Book a Hotel"}
        </Button>
      </div>
    </div>
  );
};
