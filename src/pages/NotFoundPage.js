import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.css';

const NotFoundPage = () => {
  return (
    <div className={styles["not-found-container"]}>
      <h1>404</h1>
      <p>Страница не найдена</p>
      <Link to="/" className={styles["home-link"]}>Вернуться на главную</Link>
    </div>
  );
};

export default NotFoundPage;
