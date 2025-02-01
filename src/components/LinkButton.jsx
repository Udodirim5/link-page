/* eslint-disable react/prop-types */
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import styles from "./LinkButton.module.css";

const LinkButton = ({ label, link, image, onOptionsClick }) => {
  
  return (
    <div className={styles.linkContainer}>
      {/* Clickable Link Section */}
      <Link to={link} className={styles.linkList} target="_blank">
        <img
          className={styles.LinkIcon}
          src={`${import.meta.env.BASE_URL}${image}`}
          alt={`Icon of ${label}`}
        />
        <p className={styles.linkText}>{label}</p>
      </Link>

      {/* Independent Button */}
      <button className={styles.optionBtn} onClick={onOptionsClick}>
        <i className="bi bi-three-dots-vertical"></i>
      </button>
    </div>
  );
};

export default LinkButton;
