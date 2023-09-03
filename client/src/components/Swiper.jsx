import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const images = [
  "./assets/events/image_1.jpeg",
  "./assets/events/image_2.jpeg",
  "./assets/events/image_3.jpeg",
  "./assets/events/image_4.jpeg",
  "./assets/events/image_5.jpg",
  "./assets/events/image_6.jpeg",
  "./assets/events/image_7.jpeg",
  "./assets/events/image_8.jpg",
  "./assets/events/image_9.jpg",
];

const CoverflowGallery = () => {
  const swiperWidget = images.map((image, index) => {
    return (
      <SwiperSlide key={index}>
        <img src={image} />
      </SwiperSlide>
    );
  });
  return (
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
  );
};

export default CoverflowGallery;
