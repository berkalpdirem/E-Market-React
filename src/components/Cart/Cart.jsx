// Cart.jsx
import React, { useContext } from "react";
import styles from "./Cart.module.css";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const { cartItems, addToCart, removeFromCart, clearCart } =
    useContext(CartContext);

  const isCartEmpty = cartItems.length === 0;

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.quantity * item.product.price,
    0
  );
  return (
    <>
      <div className={styles.allPanel}>
        {/* Sepetteki Ürünler */}
        <div className={styles.cartContent}>
          {cartItems.map((item) => (
            <div key={item.cartItemId} className={styles.cartItem}>
              <img src={item.product.thumbnail} alt={item.product.title} />
              <div className={styles.ItemSumary}>
                <div className={styles.title}>{item.product.title}</div>
                <div className={styles.description}>
                  {item.product.description}
                </div>
                <div className={styles.price}>
                  Fiyat: {item.product.price} TL
                </div>
              </div>
              <div className={styles.actionArea}>
                <button onClick={() => removeFromCart(item.product.id)}>
                  -
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => addToCart(item.product)}>+</button>
              </div>
            </div>
          ))}
        </div>
        {/* Total Fiyat ve Ödeme Buton */}
        {!isCartEmpty && (
          <div className={styles.paymnetArea}>
            <div className={styles.priceAndButton}>
              <div>Toplam Fiyat: {totalAmount}</div>
              <button onClick={clearCart}>Siparişi Ver</button>
            </div>
          </div>
        )}
        {isCartEmpty && (
          <div className={styles.warning}>
            Sepetiniz Boş Lütfen Sepetinizi Doldurunuz
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
