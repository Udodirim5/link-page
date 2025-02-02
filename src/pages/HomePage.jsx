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
import { profileHolder, theLinks } from "../../data/data";
import Pagination from "../components/Pagination";

const HomePage = () => {
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);
  const [selectedLink, setSelectedLink] = useState(null);
  const [isProfileVisible, setIsProfileVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;
  const totalItems = theLinks.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleOptionsToggle = (link) => {
    setSelectedLink(link); // Store the clicked link
    setIsOptionsVisible((prev) => !prev);
  };
  const handleProfileToggle = () => {
    setIsProfileVisible((prev) => !prev);
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  // Calculate links for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentLinks = theLinks.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <main className={styles.container}>
      <ProfileHeader profileHolder={profileHolder} />
      <ProfileToggleBtn onProfileToggle={handleProfileToggle} />
      <SocialLinks />
      <div className={styles.linkContainer}>
        {currentLinks.map((link, index) => (
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
      <div className={styles.footer}>
        {theLinks.length > itemsPerPage && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
        <Signature profileHolder={profileHolder} />
      </div>
    </main>
  );
};

export default HomePage;
