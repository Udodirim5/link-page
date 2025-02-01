/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./Option.module.css";

const Option = ({ link, onOptionsClick }) => {
  return (
    <aside className={styles.moreOptions}>
      <div className={styles.optionContainer}>
        <button className={styles.closeBtn} onClick={onOptionsClick}>
          <i className="bi bi-x-lg"></i>
        </button>

        <main>
          <img
            src={`${import.meta.env.BASE_URL}${link.image}`}
            alt={`Icon of ${link.label}`}
            className={styles.optionImage}
          />
          <h2>{link.label}</h2>
          <p>{link.description}</p>
          <Link to={link.link} target="_blank" rel="noopener noreferrer">
            Register here
          </Link>
        </main>
      </div>
    </aside>
  );
};

export default Option;
