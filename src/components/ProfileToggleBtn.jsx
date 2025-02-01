/* eslint-disable react/prop-types */
import styles from './ProfileToggleBtn.module.css'

const ProfileToggleBtn = ({ onProfileToggle}) => {
  return (
    <div className={styles.fullProfileToggle}>
      <button onClick={onProfileToggle}>
        <i className="bi bi-three-dots-vertical"></i>
      </button>
    </div>
  );
};

export default ProfileToggleBtn;
