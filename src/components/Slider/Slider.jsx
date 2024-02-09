import React, { useState, useEffect, useRef } from "react";
import styles from "./Slider.module.css";
import image1 from "../../assets/1.jpg";
import image2 from "../../assets/2.jpg";
import image3 from "../../assets/3.jpg";
import image4 from "../../assets/4.jpg";
import image5 from "../../assets/5.jpg";
const Slider = ({ slideTime }) => {
  const images = [image1, image2, image3, image4, image5];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const remainingTimeRef = useRef(slideTime);

  //Slide Geçişi
  const changeSlide = (direction) => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + direction + images.length) % images.length
    );
    setProgress(0);
    remainingTimeRef.current = slideTime;
  };

  //Progress ve Slide Süresinin İşlenmesi
  useEffect(() => {
    let progressInterval;

    progressInterval = setInterval(() => {
      if (!isPaused) {
        setProgress((prevProgress) => {
          const newProgress = prevProgress + (100 / slideTime) * 100;
          if (newProgress >= 100) {
            changeSlide(1);
            return 0;
          }
          return newProgress;
        });
      }
    }, 100);

    return () => {
      clearInterval(progressInterval);
    };
  }, [isPaused, remainingTimeRef.current]);

  ///////////////////////////////////////////////////////////////////////////////
  return (
    <div
      className={styles.slider}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/*Geri Butonu*/}
      <button
        className={`${styles.directionButton} ${styles.prevButton}`}
        onClick={() => changeSlide(-1)}
      >
        {"<"}
      </button>
      {/*ProgressBar ve Image*/}
      <div className={styles.progressBar} style={{ width: `${progress}%` }} />
      <img
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex + 1}`}
        className={styles.image}
      />
      {/*İleri Butonu*/}
      <button
        className={`${styles.directionButton} ${styles.nextButton}`}
        onClick={() => changeSlide(1)}
      >
        {">"}
      </button>
    </div>
  );
};

export default Slider;
