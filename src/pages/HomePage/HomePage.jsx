import React, { useContext, useEffect } from "react";
import styles from "./HomePage.module.css";
import ListProducts from "../../components/ListProducts/ListProducts.jsx";
import Slider from "../../components/Slider/Slider.jsx";

import { ApiContext } from "../../context/ApiContext";

export function HomePage() {
  const { products } = useContext(ApiContext);

  return (
    <>
      <div className={styles.container}>
        {/* Slider */}
        <div className={styles.slider}>
          <Slider slideTime={5000} />
        </div>
        {/* ProductLists */}
        <div className={styles.Products}>
          <ListProducts products={products} isHighRated={true} rate={4.5} />
        </div>
      </div>
    </>
  );
}
