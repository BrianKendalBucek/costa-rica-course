// "use client";

// import React from "react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

// import { instructors } from "@/constants/constants";
// import InstructorIntro from "./InstructorIntro";

// export default function ResponsiveCarousel() {
//   const responsive = {
//     superLargeDesktop: {
//       // the naming can be any, depends on you.
//       breakpoint: { max: 4000, min: 3000 },
//       items: 5,
//     },
//     desktop: {
//       breakpoint: { max: 3000, min: 2145 },
//       items: 3,
//     },
//     tablet: {
//       breakpoint: { max: 2145, min: 1430 },
//       items: 2,
//     },
//     mobile: {
//       breakpoint: { max: 1430, min: 0 },
//       items: 1,
//     },
//   };
//   return (
//     <Carousel
//       swipeable={false}
//       draggable={false}
//       showDots={true}
//       responsive={responsive}
//       ssr={true} // means to render carousel on server-side.
//       infinite={true}
//       // autoPlay={this.props.deviceType !== "mobile" ? true : false}
//       autoPlaySpeed={1000}
//       keyBoardControl={true}
//       customTransition="all .5"
//       // centerMode={true}
//       transitionDuration={500}
//       containerClass="carousel-container"
//       // removeArrowOnDeviceType={["mobile"]}
//       // deviceType={this.props.deviceType}
//       dotListClass="custom-dot-list-style"
//       itemClass="carousel-item-padding-40-px"
//     >
//       {instructors.map((instructor) => (
//         <InstructorIntro
//           key={instructor.name}
//           image={instructor.image}
//           title={instructor.title}
//           name={instructor.name}
//           alt={instructor.alt}
//           description={instructor.description}
//           socials={instructor.socials}
//         />
//       ))}
//     </Carousel>
//   );
// }

// // import React from "react";
// // import Slider from "react-slick";
// // import { instructors } from "@/constants/constants";
// // import InstructorIntro from "./InstructorIntro";
// // import "slick-carousel/slick/slick.scss";
// // import "slick-carousel/slick/slick-theme.scss";
// // import styles from './ResponsiveCarousel.module.scss';

// // const ResponsiveCarousel = () => {
// //   const settings = {
// //     dots: true,
// //     infinite: false,
// //     speed: 500,
// //     slidesToShow: 4,
// //     slidesToScroll: 4,
// //     initialSlide: 0,
// //     responsive: [
// //       {
// //         breakpoint: 1024,
// //         settings: {
// //           slidesToShow: 3,
// //           slidesToScroll: 3,
// //           infinite: true,
// //           dots: true,
// //         },
// //       },
// //       {
// //         breakpoint: 600,
// //         settings: {
// //           slidesToShow: 2,
// //           slidesToScroll: 2,
// //           initialSlide: 2,
// //         },
// //       },
// //       {
// //         breakpoint: 480,
// //         settings: {
// //           slidesToShow: 1,
// //           slidesToScroll: 1,
// //         },
// //       },
// //     ],
// //   };
// //   return (
// //     <div className={styles.sliderContainer}>
// //       <Slider {...settings}>
// //         {instructors.map((instructor) => (
// //           <InstructorIntro key={instructor.name} instructor={instructor} />
// //         ))}
// //       </Slider>
// //     </div>
// //   );
// // };

// // export default ResponsiveCarousel;
