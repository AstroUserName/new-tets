import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./style.module.css";

const NavigationBar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <NavLink
            to="/"
            exact
            className={styles["nav-link"]}
            activeClassName={styles.activeLink}
          >
            Главная
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            to="/category/candies"
            className={styles["nav-link"]}
            activeClassName={styles.activeLink}
          >
            Candies
          </NavLink>
          <NavLink
            to="/category/electronics"
            className={styles["nav-link"]}
            activeClassName={styles.activeLink}
          >
            Electronics
          </NavLink>
          <NavLink
            to="/category/cars"
            className={styles["nav-link"]}
            activeClassName={styles.activeLink}
          >
            Cars
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
