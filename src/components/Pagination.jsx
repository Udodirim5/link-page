/* eslint-disable react/prop-types */
import styles from "./Pagination.module.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className={styles.pagination}>
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <i className="bi bi-caret-left-fill"></i>
      </button>
      <span>
        {currentPage} / {totalPages}
      </span>
      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <i className="bi bi-caret-right-fill"></i>
      </button>
    </div>
  );
};

export default Pagination;