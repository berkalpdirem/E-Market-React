// CartContext.js
import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItem = cartItems.find(
      (item) => item.product.id === product.id
    );

    if (existingItem) {
      // Ürün Zaten Sepette Varsa Qantity'sini artır
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // Ürün zaten sepette yok ise yeni bir CartItem olusturup CardItems'e ekle
      const newCartItem = {
        cartItemId: cartItems.length + 1, // Benzersiz Id olusturulması lazım !!!!!!!!!!!!!!
        quantity: 1,
        product: product,
      };

      setCartItems((prevItems) => [...prevItems, newCartItem]);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => {
      const existingCartItem = prevItems.find(
        (item) => item.product.id === productId
      );
      if (existingCartItem) {
        // Eğer Quantity 1'den büyükse, qantity'i bir azalt
        if (existingCartItem.quantity > 1) {
          return prevItems.map((item) =>
            item.product.id === productId
              ? { ...item, quantity: item.quantity - 1 }
              : item
          );
        } else {
          // Eğer Quantity 1 ise, tamamen kaldır
          return prevItems.filter((item) => item.product.id !== productId);
        }
      }
      // Eğer CartItem yoksa, hiçbir şey yapma
      return prevItems;
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
