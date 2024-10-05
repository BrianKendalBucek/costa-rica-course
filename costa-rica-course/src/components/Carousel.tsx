"use client";

import React, { ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

interface CarouselProps<T> {
  data: T[];
  renderSlide: (item: T) => ReactNode;
  slidesPerView?: number;
  spaceBetween?: number;
}

const Carousel = <T,>({ data, renderSlide, slidesPerView = 1, spaceBetween = 50 }: CarouselProps<T>) => {

  if (data === undefined || !Array.isArray(data) || data.length === 0) {
    console.error("Data is undefined or empty.");
    return;
  }

  return (
    <div>
      <Swiper
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Navigation, Pagination, Autoplay]}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>{renderSlide(item)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
