import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "./SocialLinks.module.css";
import { Link } from "react-router-dom";

const socialLinks = [
  { logo: "facebook", link: "#" },
  { logo: "instagram", link: "#" },
  { logo: "telegram", link: "https://www.t.me/streaks_fx" },
  { logo: "youtube", link: "https://youtube.com/@streaks_fx?si=roqGTNjcQIdSZ72X" },
  { logo: "whatsapp", link: "https://whatsapp.com/channel/0029VakOgTbI1rcdEU616l0L" },
  { logo: "tiktok", link: "#" },
];

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
