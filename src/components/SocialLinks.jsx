import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "./SocialLinks.module.css";
import { Link } from "react-router-dom";
import {socialLinks} from "../../data/data";

const SocialLinks = () => {
  return (
    <div className={styles.socialLinks}>
      {socialLinks.map(({ logo, link }) => (
        <Link key={logo} to={link} target="_blank" rel="noopener noreferrer" className={styles.icons}>
          <i className={`bi bi-${logo.toLowerCase()}`}></i>
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
