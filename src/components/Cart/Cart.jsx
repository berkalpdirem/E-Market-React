// Cart.jsx
import React, { useContext } from "react";
import styles from "./Cart.module.css";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  console.log(cartItems);
  return (
    <div className={styles.cartContent}>
      {cartItems.map((item) => (
        <div key={item.id} className={styles.cartItem}>
          <span>{item.title}</span>
          <span>Fiyat: {item.price} TL</span>
          <button onClick={() => removeFromCart(item)}>Ürünü Kaldır</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
