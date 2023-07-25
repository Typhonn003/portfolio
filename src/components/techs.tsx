import { techList } from "../utils";
import { TechCard } from "./techCard";
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";

register();
import "swiper/css";
import "swiper/css/bundle";

export const Techs = () => {
  return (
    <section className="pb-10">
      <div className="sticky top-0 z-20 py-5 mb-5 backdrop-blur-sm bg-light-blue2/10 dark:bg-dark-blue2/10">
        <h2 className="w-[80%] m-auto text-2xl font-bold">Tecnologias</h2>
      </div>
      <Swiper
        className="w-[80%] mb-6"
        slidesPerView={1}
        spaceBetween={50}
        autoplay={{ delay: 2000 }}
        loop={true}
        pagination={{ clickable: true, el: ".swiper-custom-pagination" }}
        navigation
        keyboard={true}
        mousewheel={true}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
        }}
      >
        {techList.map((tech, index) => (
          <SwiperSlide key={index}>
            <TechCard techName={tech} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-custom-pagination flex justify-center" />
    </section>
  );
};
