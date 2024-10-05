// Carousel.tsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper and SwiperSlide from Swiper
import { Navigation, Pagination, Autoplay } from 'swiper'; // Import necessary Swiper modules
import 'swiper/css'; // Import the main Swiper styles
import 'swiper/css/navigation'; // Import navigation styles
import 'swiper/css/pagination'; // Import pagination styles

interface CarouselProps {
  images: string[]; // You can modify this prop to accept any type of data you want to display in the carousel
}

const images = [
  'https://via.placeholder.com/600x400?text=Slide+1',
  'https://via.placeholder.com/600x400?text=Slide+2',
  'https://via.placeholder.com/600x400?text=Slide+3',
];

const Carousel: React.FC<CarouselProps> = () => {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        navigation
        modules={[Navigation, Pagination, Autoplay]} // Register the necessary Swiper modules
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Slide ${index}`} style={{ width: '100%', height: 'auto' }} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
