import React, { useEffect } from "react";
import styles from "./style.module.css";
const PaginationComponent = ({ totalPages, currentPage, onPageChange }) => {
  useEffect(() => {
    if (totalPages < currentPage) {
      onPageChange((prev) => prev - 1);
    }
  }, [currentPage, onPageChange, totalPages]);

  return (
    <div className={styles["pagination-container"]}>
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          className={`${styles["page-link"]} ${
            index + 1 === currentPage ? styles["page-link-active"] : ""
          }`}
          disabled={index + 1 === currentPage}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default PaginationComponent;
