"use client";

import React, { useState, useEffect } from "react";
import Carousel from "./Carousel";
import { courseData } from "@/constants/constants";
import CoursesCard from "./CoursesCard";// Assuming you have a component to render each course

const CourseCarousel: React.FC = () => {
  // Assuming courseData is an array of course objects similar to student reviews
  const [courses, setCourses] = useState<typeof courseData>([]);

  useEffect(() => {
    // Simulating data fetch by setting courses from the constants
    setCourses(courseData);
  }, []);

  if (courses.length === 0) return <div>Loading courses...</div>;

  return (
    <Carousel
      data={courses}
      slidesPerView={3} // Display 3 courses at a time
      spaceBetween={100} // Space between slides
      effect="coverflow" // Use coverflow effect
      autoplayDelay={5000} // Optional: Set autoplay delay to 5 seconds
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
