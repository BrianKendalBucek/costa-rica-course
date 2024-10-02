import React from 'react';
import Image from 'next/image';
import styles from './ImageWithText.module.scss';

const ImageWithText = ({ image }) => (
  <div className={styles.imageWithTextContainer}>
    <Image
      src={image.src}
      alt={image.alt}
      width={405.67}
      height={288}
      priority
    />
    <div className={styles.overlayText}>
      {image.overlayText}
    </div>
  </div>
);

export default ImageWithText;
