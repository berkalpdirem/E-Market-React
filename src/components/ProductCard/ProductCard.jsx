import React, { useContext, useState, useEffect } from "react";
import styles from "./ProductCard.module.css";
import { CartContext } from "../../context/CartContext.jsx";

const ProductCard = ({ id, title, description, thumbnail, price }) => {
  const [quantity, setQuantity] = useState(0);
  const { findProduct, addToCart, removeFromCart } = useContext(CartContext);

  useEffect(() => {
    const existingItem = findProduct(id);
    if (existingItem) {
      setQuantity(existingItem.quantity);
    } else {
      setQuantity(0);
    }
  }, [findProduct, id]);

  const handleAddToCart = () => {
    addToCart({ id, title, price });
  };

  const handleRemoveFromCart = () => {
    removeFromCart(id);
  };

  return (
    <div className={styles.productCard}>
      <img src={thumbnail} alt={title} />
      <h3>{title}</h3>
      <p>Açıklama: {description}</p>
      <p>Fiyat: {price} TL</p>
      <div className={styles.buttonContainer}>
        {quantity > 0 && (
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
