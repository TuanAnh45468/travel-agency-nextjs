import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="footer p-10 text-base-content bg-mint-green mt-[271px]">
      <div>
        <Image
          src={"/images/footer-logo.svg"}
          alt={""}
          width={120}
          height={39.15}
        ></Image>

        <div className={"flex gap-x-3"}>
          <a href={"#"}>
            <Image
              src={"/images/icons/social-media/facebook.svg"}
              alt={""}
              width={18}
              height={18}
            ></Image>
          </a>
          <a href={"#"}>
            <Image
              src={"/images/icons/social-media/instagram.svg"}
              alt={""}
              width={18}
              height={18}
            ></Image>
          </a>
          <a href={"#"}>
            <Image
              src={"/images/icons/social-media/twitter.svg"}
              alt={""}
              width={18}
              height={18}
            ></Image>
          </a>

          <a href={"#"}>
            <Image
              src={"/images/icons/social-media/youtube.svg"}
              alt={""}
              width={18}
              height={18}
            ></Image>
          </a>
        </div>
      </div>

      <div>
        <span className="footer-title text-black">Our Destinations</span>
        <a className="link link-hover" href={"#"}>
          Canada
        </a>
        <a className="link link-hover" href={"#"}>
          Alaska
        </a>
        <a className="link link-hover" href={"#"}>
          France
        </a>
        <a className="link link-hover" href={"#"}>
          Iceland
        </a>
      </div>

      <div>
        <span className="footer-title text-black">Our Activities</span>
        <a className="link link-hover" href={"#"}>
          Northern Lights
        </a>
        <a className="link link-hover" href={"#"}>
          Cruising and Sailing
        </a>
        <a className="link link-hover" href={"#"}>
          Multi activities
        </a>
        <a className="link link-hover" href={"#"}>
          Kayaking
        </a>
      </div>

      <div>
        <span className="footer-title text-black">Travel Blogs</span>
        <a className="link link-hover" href={"#"}>
          Bali Travel Guide
        </a>
        <a className="link link-hover" href={"#"}>
          Sri Lank Travel Guide
        </a>
        <a className="link link-hover" href={"#"}>
          Peru Travel Guide
        </a>
        <a className="link link-hover" href={"#"}>
          bali Travel Guide
        </a>
      </div>

      <div>
        <span className="footer-title text-black">About Us</span>
        <a className="link link-hover" href={"#"}>
          Our Story
        </a>
        <a className="link link-hover" href={"#"}>
          Work with Us
        </a>
      </div>

      <div>
        <span className="footer-title text-black">Contact Us</span>
        <a className="link link-hover" href={"#"}>
          Our Story
        </a>
        <a className="link link-hover" href={"#"}>
          Privacy policy
        </a>
        <a className="link link-hover" href={"#"}>
          Work with Us
        </a>
      </div>
    </footer>
  );
};
