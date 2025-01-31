/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./LinkButton.module.css";
const LinkButton = ({ label, link, image }) => {
  return (
    <Link to={link} className={styles.linkList} target="_blank">
      <img
        className={styles.LinkIcon}
        src={`${import.meta.env.BASE_URL}${image}`}
        alt={`Icon of ${label}`}
      />
      {label}
    </Link>
  );
};

export default LinkButton;
