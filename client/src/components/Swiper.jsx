import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../mainpage.css";
import { useEffect, useState } from "react";

const images = [
  "./assets/events/image_1.jpeg",
  "./assets/events/image_2.jpeg",
  "./assets/events/image_3.jpeg",
  "./assets/events/image_4.jpeg",
  "./assets/events/image_5.jpg",
  "./assets/events/image_6.jpeg",
];

const CoverflowGallery = () => {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const swiperWidget = images.map((image, index) => {
    return (
      <SwiperSlide key={index}>
        <img src={image} alt=""/>
      </SwiperSlide>
    );
  });
  return windowSize[0] > 800 ? (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={2}
      loop={true}
      coverflowEffect={{
        rotate: 0,
        stretch: 0.001,
        depth: 100,
        modifier: 2,
        slideShadows: false,
      }}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      spaceBetween={100}
      pagination={{ dynamicBullets: true }}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper"
    >
      {swiperWidget}
    </Swiper>
  ) : (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={1.38}
      loop={true}
      coverflowEffect={{
        rotate: 0,
        stretch: 0.001,
        depth: 100,
        modifier: 2,
        slideShadows: false,
      }}
      autoplay={{
        delay: 1000,
      }}
      spaceBetween={40}
      pagination={{ dynamicBullets: true }}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper"
    >
      {swiperWidget}
    </Swiper>
  );
};

export default CoverflowGallery;
