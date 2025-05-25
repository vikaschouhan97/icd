"use client"; // if using App Router

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import FirstSection, { SlideProps } from "./firstSection";
import MidSection from "./midSection";
import LastSection from "./lastSection";

export default function NewsCarousel({ slides }: { slides: SlideProps[] }) {
  return (
    <div className="w-full max-w-md mx-auto">
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        className="rounded-lg h-full"
      >
        {slides?.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <>
              {slide.type === "firstSection" && <FirstSection slide={slide} />}
              {slide.type === "midSection" && <MidSection slide={slide} />}
              {slide.type === "lastSection" && <LastSection slide={slide} />}
            </>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
