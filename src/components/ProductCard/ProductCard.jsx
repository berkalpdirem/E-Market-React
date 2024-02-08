import React, { useContext, useState, useEffect } from "react";
import styles from "./ProductCard.module.css";
import { CartContext } from "../../context/CartContext.jsx";

const ProductCard = (product) => {
  const [quantity, setQuantity] = useState(0);
  const { findProduct, addToCart, removeFromCart } = useContext(CartContext);

  useEffect(() => {
    const existingItem = findProduct(product.id);
    if (existingItem) {
      setQuantity(existingItem.quantity);
    } else {
      setQuantity(0);
    }
  }, [findProduct, product.id]);

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(product.id);
  };

  return (
    <div className={styles.productCard}>
      <img src={product.thumbnail} alt={product.title} />
      <h3>{product.title}</h3>
      <p>Açıklama: {product.description}</p>
      <p>Fiyat: {product.price} $</p>
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
