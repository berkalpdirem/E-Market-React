import React, { useState } from "react";
import styles from "./ProductCard.module.css";

const ProductCard = ({ id, title, description, thumbnail, price }) => {
  const [quantity, setQuantity] = useState(0);

  const addToCart = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const removeFromCart = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div className={styles.productCard}>
      <img src={thumbnail} alt={title} />
      <h3>{title}</h3>
      <p>Açıklama: {description}</p>
      <p>Fiyat: {price} TL</p>
      <div className={styles.buttonContainer}>
        <button onClick={addToCart}>+</button>
        {quantity !== 0 && (
          <>
            <span className={styles.quantity}>Adet: {quantity}</span>
            <button onClick={removeFromCart}>-</button>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
