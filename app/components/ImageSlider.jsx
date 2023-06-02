"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const ImageSlider = ({ width, height }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };

  return (
    <Slider {...settings}>
      <div className={`relative ${width} ${height}`}>
        <Image
          src={"/images/login-bg1.jpg"}
          alt={""}
          fill={true}
          priority={true}
          quality={50}
          className={"rounded-[30px]"}
        ></Image>
      </div>

      <div className={`relative ${width} ${height}`}>
        <Image
          src={"/images/login-bg2.jpg"}
          alt={""}
          fill={true}
          quality={50}
          priority={true}
          className={"rounded-[30px]"}
        ></Image>
      </div>
      <div className={`relative ${width} ${height}`}>
        <Image
          src={"/images/login-bg3.jpg"}
          alt={""}
          fill={true}
          quality={50}
          priority={true}
          className={"rounded-[30px]"}
        ></Image>
      </div>
    </Slider>
  );
};
