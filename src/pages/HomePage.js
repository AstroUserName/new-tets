import React, { useState } from "react";
import CartSidebar from "../components/CartSidebar";
import styles from "./style.module.css";

const HomePage = () => {
  const [isCartOpen, setCartOpen] = useState(false);

  const toggleCart = () => {
    setCartOpen(!isCartOpen);
  };

  return (
    <div>
      <button className={styles.cart} onClick={toggleCart}>Корзина</button>
      <div
        className={
          isCartOpen ? `${styles.overlay} ${styles.show}` : styles.overlay
        }
        onClick={toggleCart}
      ></div>
      <CartSidebar isOpen={isCartOpen} onClose={toggleCart} />
    </div>
  );
};

export default HomePage;
