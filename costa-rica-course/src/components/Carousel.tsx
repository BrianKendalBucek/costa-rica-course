"use client";

import React, { ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import {
  EffectCoverflow,
  EffectFade,
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/modules";

interface CarouselProps<T> {
  data: T[];
  renderSlide: (item: T) => ReactNode;
  slidesPerView?: number;
  spaceBetween?: number;
  loop?: boolean;
  autoplay?: boolean;
  autoplayDelay?: number;
  centeredSlides?: boolean;
  effect?: "coverflow" | "slide" | "fade" | "cube";
}

const Carousel = <T,>({
  data,
  renderSlide,
  slidesPerView = 3,
  spaceBetween = 0,
  loop = true,
  autoplay = true,
  autoplayDelay = 3000,
  effect = "slide",
  centeredSlides=false
}: CarouselProps<T>) => {
  const modules = [Navigation, Pagination, Autoplay, EffectFade];
  if (effect === "coverflow") {
    modules.push(EffectCoverflow);
  }

  return (
    <div>

      <Swiper
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        loop={loop}
        autoplay={autoplay ? { delay: autoplayDelay } : false}
        pagination={{ clickable: true }}
        navigation={true}
        effect={effect}
        centeredSlides={true}
        initialSlide={2}
        centerInsufficientSlides={true}
        grabCursor={true}
        modules={modules}
        onResize={(swiper) => {
          swiper.update(); // Force Swiper to update on resize
        }}
        coverflowEffect={
          effect === "coverflow"
            ? {
              rotate: 0,
              stretch: 0,
              depth: 200,
              modifier: 1,
              slideShadows: true,
            }
            : undefined
        }
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>{renderSlide(item)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
