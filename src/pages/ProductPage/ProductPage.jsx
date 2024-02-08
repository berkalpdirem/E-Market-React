import React, { useContext } from "react";
import styles from "./ProductPage.module.css";
import ProductList from "../../components/ListProducts/ListProducts.jsx";
import { ApiContext } from "../../context/ApiContext";

export function ProductPage() {
  const { products } = useContext(ApiContext);
  return (
    <>
      <h1>Ürünler Sayfası</h1>
      <div className={styles.container}>
        <div className={styles.producs}>
          <ProductList products={products} isHighRated={false} />
        </div>
      </div>
    </>
  );
}
