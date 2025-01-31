import ProfileHeader from "../components/ProfileHeader";
import SocialLinks from "../components/SocialLinks";
import LinkButton from "../components/LinkButton";
import styles from "./HomePage.module.css";

const profileHolder = {
  name: "Nnodimele Udodirim",
  image: "profile-pic.png",
};

const theLinks = [
  {
    label: "REGISTER WITH EXNESS BROKER",
    link: "https://one.exnesstrack.org/a/0vxmmql908",
    image: "exness.jpeg",
  },
  {
    label: "REGISTER WITH BYBIT EXCHANGE",
    link: "https://www.bybit.com/invite?ref=1OLPZQ",
    image: "bybit.png",
  },
  {
    label: "JOIN MOONSHOT",
    link: "https://moonshot.money?ref=raNBr1DVYE",
    image: "moonshot.png",
  },
];
const HomePage = () => {
  return (
    <div className={styles.container}>
      <ProfileHeader profileHolder={profileHolder} />
      <SocialLinks />
      <div className={styles.linkContainer}>
        {theLinks.map((link, index) => (
          <LinkButton
            key={index}
            label={link.label}
            link={link.link}
            image={link.image}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
