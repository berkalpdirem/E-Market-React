import React, { useContext, useEffect } from "react";
import styles from "./HomePage.module.css";
import ProductList from "../../components/ListProducts/ListProducts";
import { ApiContext } from "../../contex/ApiContext";

export function HomePage() {
  const { topProducts } = useContext(ApiContext);

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
        <div className={styles.topProducts}>
          {/* ProductList bileşenine products prop'u ile veriyi iletiyoruz */}
          <ProductList topProducts={topProducts} />
        </div>
      </div>
    </>
  );
}
