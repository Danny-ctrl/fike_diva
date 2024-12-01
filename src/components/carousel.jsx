import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

const Carousel = () => {
  return (
    <div className="carousel">
      <Swiper
        modules={[EffectCoverflow, Pagination, Autoplay]}
        effect="coverflow"
        centeredSlides={true}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
            <SwiperSlide><img src="/imagemUm.png" alt="Produto 1" /></SwiperSlide>
            <SwiperSlide><img src="/imagemDois.png" alt="Produto 2" /></SwiperSlide>
            <SwiperSlide><img src="/imagemTres.png" alt="Produto 3" /></SwiperSlide>
            <SwiperSlide><img src="/imagemQuatro.png" alt="Produto 4" /></SwiperSlide>
            <SwiperSlide><img src="/imagemCinco.png" alt="Produto 5" /></SwiperSlide>
            <SwiperSlide><img src="/imagemSeis.png" alt="Produto 6" /></SwiperSlide>
            <SwiperSlide><img src="/imagemSete.png" alt="Produto 7" /></SwiperSlide>
            <SwiperSlide><img src="/imagemOito.png" alt="Produto 8" /></SwiperSlide>
            <SwiperSlide><img src="/imagemNove.png" alt="Produto 9" /></SwiperSlide>
            <SwiperSlide><img src="/imagemDez.png" alt="Produto 10" /></SwiperSlide>
        </Swiper>
    </div>
);
};
export default Carousel;
