import React, { useContext } from "react";
import styles from "./ProductCard.module.css";
// import { ApiContext } from "../../context/ApiContext";

const ProductCard = ({ id, title, description, thumbnail, price }) => {
  //   const { deleteRecipe } = useContext(ApiContext);

  return (
    <div className={styles.productCard}>
      <img src={thumbnail} alt={title} />
      <h3>{title}</h3>
      <p>Açıklama : {description}</p>
      <p>Fiyat : {price} TL</p>
      <button>Sepete Ekle</button>
      <button>Sepetten Çıkar</button>
    </div>
  );
};

export default ProductCard;
