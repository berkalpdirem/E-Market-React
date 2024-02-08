// ProductCard.jsx

import React, { useContext, useState } from "react";
import styles from "./ProductCard.module.css";
import { CartContext } from "../../context/CartContext.jsx";

const ProductCard = ({ id, title, description, thumbnail, price }) => {
  const [quantity, setQuantity] = useState(0);
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  const handleAddToCart = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    addToCart({ id, title, price });
  };

  const handleRemoveFromCart = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      removeFromCart(id);
    }
  };

  return (
    <div className={styles.productCard}>
      <img src={thumbnail} alt={title} />
      <h3>{title}</h3>
      <p>Açıklama: {description}</p>
      <p>Fiyat: {price} TL</p>
      <div className={styles.buttonContainer}>
        {quantity !== 0 && (
          <>
            <button onClick={handleRemoveFromCart}>-</button>
            <span className={styles.quantity}>Adet: {quantity}</span>
          </>
        )}
        <button onClick={handleAddToCart}>+</button>
      </div>
    </div>
  );
};

export default ProductCard;
