"use client";

import React, { useState, useEffect } from "react";
import Carousel from "./Carousel";
import { courseData } from "@/constants/constants";
import CoursesCard from "./CoursesCard"; // Assuming you have a component to render each course

const CourseCarousel: React.FC = () => {
  // Assuming courseData is an array of course objects similar to student reviews
  const [courses, setCourses] = useState<typeof courseData>([]);

  useEffect(() => {
    // Simulating data fetch by setting courses from the constants
    setCourses(courseData);
  }, []);

  if (courses.length === 0) return <div>Loading courses...</div>;

  return (
    <>
      {/* <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "10%",
          height: "100%",
          background:
            "linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))",
          zIndex: 10,
        }}
      /> */}
      <Carousel
        data={courses}
        slidesPerView={3} // Display 3 courses at a time
        spaceBetween={20} // Space between slides
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
      {/* <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "10%",
          height: "100%",
          background:
            "linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))",
          zIndex: 10,
        }}
      /> */}
    </>
  );
};

export default CourseCarousel;
