"use client";
import Image from "next/image";
import chip from "/public/images/chip.jpg";
import coding from "/public/images/coding.jpg";
import ai from "/public/images/ai.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const MainImg = () => {
  const images = [
    { src: chip, alt: "first" },
    { src: coding, alt: "coding" },
    { src: ai, alt: "ai" },
  ];

  return (
    <section className="flex items-center justify-center">
      <div className="container">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          effect={"coverflow"}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          navigation={true}
          className="heroImgSlider mySwiper w-full rounded-lg "
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center w-full h-screen ">
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="block h-full w-full object-cover "
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default MainImg;
