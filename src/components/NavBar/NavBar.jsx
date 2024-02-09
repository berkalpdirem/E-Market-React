import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import CartPanelStyle from "../CartPanel/CartPanel.module.css";
import CartPanel from "../CartPanel/CartPanel";
import cartIcon from "../../assets/Cart.png";

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
          <img src={cartIcon} alt="Cart" className={styles.cartIcon} />
          Sepet
        </button>
      </div>

      {/* CartPanel */}
      <div
        className={`${CartPanelStyle.overlay} ${
          isCartPanelOpen ? CartPanelStyle.active : ""
        }`}
      >
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
    </nav>
  );
}
