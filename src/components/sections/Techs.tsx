import { techList } from "../../data";
import { TechCard } from "../cards/TechCard";
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import * as Icon from "react-icons/sl";

register();
import "swiper/css";
import "swiper/css/bundle";
import { SectionTitle } from "../layout/SectionTitle";

export const Techs = () => {
  return (
    <section className="pb-10">
      <SectionTitle title="Tecnologias" />
      <Swiper
        className="mobile-width mb-6"
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
        grabCursor={true}
        breakpoints={{
          425: {
            slidesPerView: 2,
            spaceBetween: 6,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 10,
          }
        }}
      >
        {techList.map((tech, index) => (
          <SwiperSlide key={index}>
            <TechCard techName={tech} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mobile-width m-auto max-w-md flex justify-between">
        <button className="swiper-custom-prev text-4xl">
          <Icon.SlArrowLeft />
        </button>
        <div className="swiper-custom-pagination max-w-[65%] flex flex-wrap gap-2 justify-center self-center xs:max-w-full" />
        <button className="swiper-custom-next text-4xl">
          <Icon.SlArrowRight />
        </button>
      </div>
    </section>
  );
};
