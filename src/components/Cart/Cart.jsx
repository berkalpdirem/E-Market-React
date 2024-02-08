// Cart.jsx
import React, { useContext } from "react";
import styles from "./Cart.module.css";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const { cartItems, addToCart, removeFromCart, clearCart } =
    useContext(CartContext);
  return (
    <div className={styles.cartContent}>
      {cartItems.map((item) => (
        <div key={item.cartItemId} className={styles.cartItem}>
          {console.log(item.product.title)}
          {console.log(item.product.thumbnail)}
          {console.log(item.product.stock)}
          {/* <img src={item.product.thumbnail} alt={title} /> */}
          <span>{item.product.title}</span>
          <span>Fiyat: {item.product.price} TL</span>
          <button onClick={() => removeFromCart(item.product.id)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => addToCart(item.product)}>+</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
