import React from "react";
import CourseProgress from "./CourseProgress";

const CourseList: React.FC = () => {
  const courses = [
    {
      title: "How to move to Costa Rica!",
      steps: [
        { title: "Introduction to Costa Rica", isComplete: true },
        { title: "Visa Requirements", isComplete: true },
      ],
    },
    {
      title: "Settling in Costa Rica",
      steps: [
        { title: "Finding a Home", isComplete: false },
        { title: "Understanding the Healthcare System", isComplete: false },
      ],
    },
  ];

  return (
    <div>
      {courses.map((course, index) => (
        <CourseProgress key={index} title={course.title} steps={course.steps} />
      ))}
    </div>
  );
};

export default CourseList;
