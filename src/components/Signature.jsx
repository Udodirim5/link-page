/* eslint-disable react/prop-types */
import styles from "./Signature.module.css";

const Signature = ({ profileHolder }) => {
  return (
    <div className={styles.signature}>
      <p>{profileHolder.name.split(" ")[1]}</p>
    </div>
  );
};

export default Signature;
