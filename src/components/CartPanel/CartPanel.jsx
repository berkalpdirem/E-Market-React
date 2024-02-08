// CartPanel.jsx
import React, { useState } from "react";
import Cart from "../Cart/Cart.jsx";
import styles from "./CartPanel.module.css";

const CartPanel = () => {
  return (
    <div className={styles.cartPanelContent}>
      <span>CardPaneline Hoş geldiniz</span>
      <div className={styles.CartContent}>
        <span>Cart'a hoş geldiniz</span>
        <Cart />
      </div>
    </div>
  );
};

export default CartPanel;
