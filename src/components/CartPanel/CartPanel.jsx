import React, { useState } from "react";
import Cart from "../Cart/Cart.jsx";
import styles from "./CartPanel.module.css";

const CartPanel = () => {
  return (
    <div className={styles.cartPanelContent}>
      <div className={styles.CartContent}>
        <Cart />
      </div>
    </div>
  );
};

export default CartPanel;
