/* eslint-disable react/prop-types */
import styles from "./FullHolderProfile.module.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { holdersSocialLinks } from "../../data/data";

const FullHolderProfile = ({ profileHolder, onOptionsClick }) => {
  return (
    <aside className={styles.fullProfile}>
      <div className={styles.profileContainer}>
        <button className={styles.closeProfileBtn} onClick={onOptionsClick}>
          <i className="bi bi-x-lg"></i>
        </button>

        <main>
          <div className={styles.imgContainer}>
            <img
              src={`${import.meta.env.BASE_URL}${profileHolder.image}`}
              alt={`Profile Picture of ${profileHolder.name}`}
              className={styles.profilePicture}
            />
          </div>
          <h2 className={styles.name}>{profileHolder.name}</h2>
          <p className={styles.description}>{profileHolder.description}</p>

          <h3>Connect With Me</h3>
          <p>
            Follow me on social media and stay updated with my latest projects,
            market insights, and tech explorations!
          </p>
          <div className={styles.socialLinks}>
            {Object.entries(holdersSocialLinks).map(([key, link]) => (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                key={key}
                className={styles.socialIcon}
                title={`Visit ${key} profile`}
              >
                <i className={`bi bi-${key}`}></i>
              </a>
            ))}
          </div>
        </main>
      </div>
    </aside>
  );
};

export default FullHolderProfile;
