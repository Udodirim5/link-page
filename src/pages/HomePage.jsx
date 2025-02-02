import { useState } from "react";
import ProfileHeader from "../components/ProfileHeader";
import SocialLinks from "../components/SocialLinks";
import LinkButton from "../components/LinkButton";
import styles from "./HomePage.module.css";
import Option from "../components/Option";
import ProfileToggleBtn from "../components/ProfileToggleBtn";
import FullHolderProfile from "../components/FullHolderProfile";
import "bootstrap-icons/font/bootstrap-icons.css";
import Signature from "../components/Signature";
import {profileHolder, theLinks} from "../../data/data";

const HomePage = () => {
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);
  const [selectedLink, setSelectedLink] = useState(null);
  const [isProfileVisible, setIsProfileVisible] = useState(false);

  const handleOptionsToggle = (link) => {
    setSelectedLink(link); // Store the clicked link
    setIsOptionsVisible((prev) => !prev);
  };
  const handleProfileToggle = () => {
    setIsProfileVisible((prev) => !prev);
  };

  return (
    <main className={styles.container}>
      <ProfileHeader profileHolder={profileHolder} />
      <ProfileToggleBtn onProfileToggle={handleProfileToggle} />
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

      {isProfileVisible && (
        <FullHolderProfile
          profileHolder={profileHolder}
          onOptionsClick={handleProfileToggle}
        />
      )}
      <Signature profileHolder={profileHolder} />
    </main>
  );
};

export default HomePage;
