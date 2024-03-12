"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import SingleProduct from "@/components/modules/SingleProduct";

const Hero = () => {
  return (
    <>
      <div data-aos="fade-zoom-in" className="mt-2 hidden sm:flex">
        <Swiper
          className="mySwiper"
          slidesPerView={1}
          modules={[Autoplay]}
          grabCursor
          autoplay={{
            delay: 2300,
          }}
          loop
        >
          <SwiperSlide>
            <img
              className="rounded-lg"
              src="https://cdn.kalatik.com/media/0/24/03/10/1710053839739.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="rounded-lg"
              src="https://cdn.kalatik.com/media/0/24/02/18/17082446956724.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="rounded-lg"
              src="https://cdn.kalatik.com/media/0/24/03/03/1709472499838.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="rounded-lg"
              src="https://cdn.kalatik.com/media/0/24/02/22/17085834084822.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div data-aos="fade-zoom-in" className="mt-2 sm:hidden p-1">
        <Swiper
          className="mySwiper"
          slidesPerView={1}
          modules={[Autoplay]}
          grabCursor
          autoplay={{
            delay: 2300,
          }}
          loop
        >
          <SwiperSlide>
            <img
              className="rounded-lg"
              src="https://cdn.kalatik.com/media/0/24/03/03/1709472528369.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="rounded-lg"
              src="https://cdn.kalatik.com/media/0/24/03/10/17100538820110.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="rounded-lg"
              src="https://cdn.kalatik.com/media/0/24/02/18/17082449173024.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="rounded-lg"
              src="https://cdn.kalatik.com/media/0/24/02/22/17085834783822.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Hero;
