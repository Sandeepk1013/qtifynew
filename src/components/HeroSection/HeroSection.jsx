// HeroSection.js
import React from "react";
import styles from "./HeroSection.module.css";
import Headphone from "../../assets/headphone_logo.png";

const HeroSection = () => {
  return (
    <div className={styles.container} data-testid="heroSection">
      <div className={styles.textContainer}>
        <div className={styles.firstText} data-testid="firstText">
          100 Thousand Songs, ad-free
        </div>
        <div className={styles.secondText} data-testid="secondText">
          Over thousands podcast episodes
        </div>
      </div>
      <img
        src={Headphone}
        alt="Headphone"
        className={styles.heroImage}
        data-testid="heroImage"
        width={212}
        height={212}
      />
    </div>
  );
};

export default HeroSection;
