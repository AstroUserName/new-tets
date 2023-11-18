import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { deleteProduct } from "../features/productsSlice";
import { addToCart } from "../features/cartSlice";
import PaginationComponent from "../components/PaginationComponent";
import styles from "./style.module.css";

const ITEMS_PER_PAGE = 3;

const CategoryPage = ({ match }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isSorted, setIsSorted] = useState(false);
  const { id: categoryId } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products[categoryId]);

  const sortedProducts = isSorted
    ? [...products].sort((a, b) => a.name.localeCompare(b.name))
    : products;

  const totalItems = sortedProducts.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const displayedProducts = sortedProducts.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handleDelete = (product) => {
    dispatch(deleteProduct(product.id));
    dispatch(addToCart(product));
  };

  const toggleSort = () => {
    setIsSorted(!isSorted);
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles["category-title"]}>Категория {categoryId}</h1>
      <div className={styles["list-wrapper"]}>
        {displayedProducts.map((product) => (
          <div className={styles["product-wrapper"]} key={product.id}>
            <h3 className={styles["product-name"]}>{product.name}</h3>
            <button
              className={styles.button}
              onClick={() => handleDelete(product)}
            >
              Удалить
            </button>
          </div>
        ))}
      </div>
      <button className={styles["sort-btn"]} onClick={toggleSort}>
        {isSorted ? "Отменить сортировку" : "Сортировать"}
      </button>
      <PaginationComponent
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default CategoryPage;
