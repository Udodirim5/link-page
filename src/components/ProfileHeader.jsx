/* eslint-disable react/prop-types */
import styles from "./ProfileHeader.module.css";
const ProfileHeader = ({ profileHolder }) => {
  return (
    <div className={styles.profileHeader}>
      <img
        src={`${import.meta.env.BASE_URL}${profileHolder.image}`}
        alt={`Profile Picture of ${profileHolder.name}`}
        className={styles.profilePic}
      />
      <h2>{profileHolder.name}</h2>
      <p>STAY CONNECTED WITH {profileHolder.name.split(" ")[1]}</p>
    </div>
  );
};

export default ProfileHeader;
