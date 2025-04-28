import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const logos = [
  { id: 1, src: "/image/dp.png" },
  { id: 2, src: "/image/dp.png" },
  { id: 3, src: "/image/dp.png" },
  { id: 4, src: "/image/dp.png" },
  { id: 5, src: "/image/dp.png" },
];

const LogoCarousel = () => {
  const swiperRef = useRef(null);

  return (
    <div
      style={{ width: "1000px", margin: "0 auto" }}
      onMouseEnter={() => swiperRef.current?.autoplay.stop()}
      onMouseLeave={() => swiperRef.current?.autoplay.start()}
    >
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
      >
        {logos.map((logo) => (
          <SwiperSlide key={logo.id}>
            <img
              src={logo.src}
              alt={`Logo ${logo.id}`}
              style={{
                width: "100px",
                height: "50px",
                objectFit: "contain",
                margin: "auto",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LogoCarousel;
