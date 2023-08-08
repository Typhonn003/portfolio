import { techList } from "../utils";
import { TechCard } from "./techCard";
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";

register();
import "swiper/css";
import "swiper/css/bundle";

export const Techs = () => {
  return (
    <section className="pb-10">
      <div className="sticky top-0 z-20 py-5 mb-5 backdrop-blur-sm bg-light-blue2/10 dark:bg-dark-blue2/10">
        <h2 className="mobile-width m-auto text-2xl font-bold">Tecnologias</h2>
      </div>
      <Swiper
        className="mb-6 mobile-width"
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{ delay: 2000 }}
        loop={true}
        pagination={{ clickable: true, el: ".swiper-custom-pagination" }}
        navigation={{
          prevEl: ".swiper-custom-prev",
          nextEl: ".swiper-custom-next",
        }}
        keyboard={true}
        mousewheel={true}
        breakpoints={{
          600: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        }}
      >
        {techList.map((tech, index) => (
          <SwiperSlide key={index}>
            <TechCard techName={tech} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mobile-width max-w-md m-auto flex justify-center">
        <button className="swiper-custom-prev text-4xl">
          <BsArrowLeftSquareFill />
        </button>
        <div className="swiper-custom-pagination flex flex-wrap gap-2 justify-center self-center" />
        <button className="swiper-custom-next text-4xl">
          <BsArrowRightSquareFill />
        </button>
      </div>
    </section>
  );
};
