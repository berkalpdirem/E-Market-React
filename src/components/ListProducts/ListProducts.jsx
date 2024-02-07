import React from "react";
import ProductCard from "../ProductCard/ProductCard.jsx";
import styles from "./ListProducts.module.css";
const ListProducts = ({ topProducts }) => {
  const highRatedProducts = topProducts.filter(
    (product) => product.rating >= 4.5
  );

  return (
    <div className={styles.topProductsContainer}>
      {topProducts.length > 0 ? (
        highRatedProducts.map((topProduct) => (
          <ProductCard key={topProduct.id} {...topProduct} />
        ))
      ) : (
        <p>Ürün Bulunamadı !!!</p>
      )}
    </div>
  );
};

export default ListProducts;
