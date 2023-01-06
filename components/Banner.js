import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BannerOne from "../public/images/BannerOne.jpg";
import BannerTwo from "../public/images/BannerTwo.jpg";
import BannerThree from "../public/images/BannerThree.jpg";
import Image from "next/legacy/image";

function Banner() {
  return (
    <div className="relative ">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20 " />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <Image src={BannerOne} alt="" />
        </div>
        <div>
          <Image src={BannerTwo} alt="" />
        </div>
        <div>
          <Image src={BannerThree} alt="" />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
