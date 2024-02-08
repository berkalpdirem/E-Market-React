import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import CartPanelStyle from "../CartPanel/CartPanel.module.css";
import CartPanel from "../CartPanel/CartPanel";

export function NavBar() {
  const [isCartPanelOpen, setCartPanelOpen] = useState(false);

  const openCartPanel = () => {
    setCartPanelOpen(true);
  };

  const closeCartPanel = () => {
    setCartPanelOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.links}>
        <Link to="/" className={styles.link}>
          Anasayfa
        </Link>
        <Link to="/products" className={styles.link}>
          Ürünler
        </Link>
      </div>

      <div className={styles.cart}>
        <button className={styles.cartButton} onClick={openCartPanel}>
          Sepet
        </button>
      </div>

      {/* CardPanel */}
      {isCartPanelOpen && (
        <div className={CartPanelStyle.overlay}>
          <div className={CartPanelStyle.cartPanel}>
            <button
              className={CartPanelStyle.closeButton}
              onClick={closeCartPanel}
            >
              X
            </button>
            <CartPanel />
          </div>
        </div>
      )}
    </nav>
  );
}
