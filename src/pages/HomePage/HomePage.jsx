import React, { useContext, useEffect } from "react";
import styles from "./HomePage.module.css";
import ListProducts from "../../components/ListProducts/ListProducts";
import { ApiContext } from "../../contex/ApiContext";

export function HomePage() {
  const { products } = useContext(ApiContext);

  return (
    <>
      <div className={styles.container}>
        {/* Title */}
        <div className={styles.div}>
          <h1>AnaSayfa</h1>
        </div>
        {/* Slider */}
        <div className={styles.slider}>Buraya Slider Gelecek</div>
        {/* ProductLists */}
        <div className={styles.Products}>
          <ListProducts products={products} isHighRated={true} rate={4.5} />
        </div>
      </div>
    </>
  );
}
