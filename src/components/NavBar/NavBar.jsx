import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

export function NavBar() {
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
        <button className={styles.cartButton}>Sepet</button>
      </div>
    </nav>
  );
}
