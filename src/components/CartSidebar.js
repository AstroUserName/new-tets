import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../features/cartSlice";
import { restoreProduct } from "../features/productsSlice";
import styles from "./style.module.css";

const CartSidebar = ({ isOpen, onClose }) => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div
      className={isOpen ? `${styles.sidebar} ${styles.open}` : styles.sidebar}
    >
      <div className={styles.sidebarHeader}>Корзина</div>
      <div className={styles.sidebarContent}>
        {cartItems.map((item) => (
          <div key={item.id} className={styles.cartItem}>
            <span className={styles.itemName}>{item.name}</span>
            <button
              onClick={() => {
                dispatch(removeFromCart(item.id));
                dispatch(restoreProduct(item));
              }}
              className={styles.removeButton}
            >
              Удалить
            </button>
          </div>
        ))}
      </div>
      <button onClick={onClose} className={styles.closeButton}>
        Закрыть
      </button>
    </div>
  );
};

export default CartSidebar;
