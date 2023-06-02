import Image from "next/image";

export const Hero = ({ page }) => {
  const imageLinks = {
    flight: "/images/flight-hero.png",
    hotel: "/images/hotel-hero.png",
  };

  return (
    <div>
      <Image src={imageLinks[page]} width={1440} height={537} alt={""}></Image>
    </div>
  );
};
