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
  loop?: boolean; // Make the loop dynamic
  autoplayDelay?: number; // Dynamic delay for autoplay
  effect?: "coverflow" | "slide" | "fade" | "cube"; // Define allowed effect types
}

const Carousel = <T,>({
  data,
  renderSlide,
  slidesPerView = 1,
  spaceBetween = 50,
  loop = true,
  autoplayDelay = 3000,
  effect = "slide", // Set default effect to "slide"
}: CarouselProps<T>) => {
  // Determine the modules to use based on the effect prop
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
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }
            : undefined // If not coverflow, leave it undefined
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
