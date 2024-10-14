"use client";

import React, { useState, useEffect } from "react";
import Carousel from "./Carousel";
import { courseData } from "@/constants/constants";
import CoursesCard from "./CoursesCard";

const CourseCarousel: React.FC = () => {

  const [courses, setCourses] = useState<typeof courseData>([]);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [modifierNumber, setModifierNumber] = useState(0);

  useEffect(() => {
    setCourses(courseData);

    const handleResize = () => {
      const width = window.innerWidth;

      if (width <= 840) {
        setSlidesPerView(1);
        setModifierNumber(0);
      } else if (width > 840 && width <= 1070) {
        setSlidesPerView(2);
        setModifierNumber(0);
      } else if (width > 1070) {
        setSlidesPerView(3);
        setModifierNumber(1);
      }
      
        
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (courses.length === 0) return <div>Loading courses...</div>;

  return (
    <Carousel
      data={courses}
      slidesPerView={slidesPerView}
      spaceBetween={20}
      effect="coverflow"
      autoplayDelay={5000}
      modifierNumber={modifierNumber}
      renderSlide={(course) => (
        <CoursesCard
          key={course.id}
          image={course.image}
          title={course.title}
          description={course.description}
        />
      )}
    />
  );
};

export default CourseCarousel;
