import React from "react";
import ProductCard from "../ProductCard/ProductCard.jsx";
import styles from "./ListProducts.module.css";

const ListProducts = ({ products, isHighRated, rate }) => {
  const filteredProducts = isHighRated
    ? products.filter((product) => product.rating >= rate)
    : products;

  return (
    <div className={styles.topProductsContainer}>
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))
      ) : (
        <p>
          {isHighRated
            ? `${rate} üzeri dereceye sahip ürünler yükleniyor...`
            : "Ürünler yükleniyor..."}
        </p>
      )}
    </div>
  );
};

export default ListProducts;
