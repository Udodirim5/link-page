import { useState } from "react";
import ProfileHeader from "../components/ProfileHeader";
import SocialLinks from "../components/SocialLinks";
import LinkButton from "../components/LinkButton";
import styles from "./HomePage.module.css";
import Option from "../components/Option";

const profileHolder = {
  name: "Nnodimele Udodirim",
  image: "profile-pic.png",
};

const theLinks = [
  {
    name: "EXNESS BROKER",
    label: "REGISTER WITH EXNESS BROKER",
    link: "https://one.exnesstrack.org/a/0vxmmql908",
    image: "exness.jpeg",
    description: "Trade with confidence on Exness, the leading forex broker offering tight spreads, fast execution, and flexible leverage. Start your trading journey today!",
  },
  {
    name: "BYBIT EXCHANGE",
    label: "REGISTER WITH BYBIT EXCHANGE",
    link: "https://www.bybit.com/invite?ref=1OLPZQ",
    image: "bybit.png",
    description: "Join Bybit, the world's most trusted cryptocurrency exchange with advanced trading tools, deep liquidity, and exciting rewards. Sign up now and trade smarter!",
  },
  {
    name: "MOONSHOT",
    label: "JOIN MOONSHOT",
    link: "https://moonshot.money?ref=raNBr1DVYE",
    image: "moonshot.png",
    description: "Be part of the next big thing in crypto with Moonshot, the premier launchpad for groundbreaking blockchain projects. Get in early and maximize your gains!",
  },
];

const HomePage = () => {
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);
  const [selectedLink, setSelectedLink] = useState(null);

  const handleOptionsToggle = (link) => {
    setSelectedLink(link); // Store the clicked link
    setIsOptionsVisible((prev) => !prev);
  };

  return (
    <main className={styles.container}>
      <ProfileHeader profileHolder={profileHolder} />
      <SocialLinks />
      <div className={styles.linkContainer}>
        {theLinks.map((link, index) => (
          <LinkButton
            key={index}
            label={link.label}
            link={link.link}
            image={link.image}
            onOptionsClick={() => handleOptionsToggle(link)}
          />
        ))}
      </div>
      {isOptionsVisible && (
        <Option link={selectedLink} onOptionsClick={handleOptionsToggle} />
      )}
    </main>
  );
};

export default HomePage;
