import Carousel from "./Carousel";
import styles from "./Students.module.scss";

const images = [
  "https://via.placeholder.com/600x400?text=Slide+1",
  "https://via.placeholder.com/600x400?text=Slide+2",
  "https://via.placeholder.com/600x400?text=Slide+3",
  "https://via.placeholder.com/600x400?text=Slide+4",
  "https://via.placeholder.com/600x400?text=Slide+5",
  "https://via.placeholder.com/600x400?text=Slide+6",
  "https://via.placeholder.com/600x400?text=Slide+7",
  "https://via.placeholder.com/600x400?text=Slide+8",
  "https://via.placeholder.com/600x400?text=Slide+9",
  "https://via.placeholder.com/600x400?text=Slide+10",
  "https://via.placeholder.com/600x400?text=Slide+11",
  "https://via.placeholder.com/600x400?text=Slide+12",
];

export const Students = () => {
  return (
    <div className={styles.card}>
      <h2>WHAT OUR STUDENTS HAVE TO SAY</h2>
      <Carousel images={images} />
    </div>
  );
};
