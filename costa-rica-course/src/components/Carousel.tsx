"use client";

import React, { ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import {
  EffectCoverflow,
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
  autoplayDelay?: number;
  effect?: "coverflow" | "slide" | "fade" | "cube";
  // coverflowEffect?: {
  //   rotate?: number;
  //   stretch?: number;
  //   depth?: number;
  //   modifier?: number;
  //   slideShadows?: boolean;
  // };
}

const Carousel = <T,>({
  data,
  renderSlide,
  slidesPerView = 1,
  spaceBetween = 50,
  loop = true,
  autoplayDelay = 3000,
  effect = "slide",
}: CarouselProps<T>) => {
  const modules = [Navigation, Pagination, Autoplay];
  if (effect === "coverflow") {
    modules.push(EffectCoverflow);
  }

  return (
    <div>
      <Swiper
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        loop={loop}
        autoplay={{ delay: autoplayDelay }}
        pagination={{ clickable: true }}
        navigation={true}
        effect={effect} // Apply the effect dynamically
        modules={modules} // Use the dynamic modules array
        coverflowEffect={
          effect === "coverflow"
            ? {
              rotate: 0,
              stretch: 0,
              depth: 200,
              modifier: 1,
              slideShadows: false,
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
