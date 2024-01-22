// HeroSection.js
import React from "react";
import styles from "./HeroSection.module.css";
import Headphone from "../../assets/headphone_logo.png";

const HeroSection = () => {
  return (
    <div className={styles.container} data-testid="heroSection">
      <div className={styles.textContainer}>
        <div className={styles.text}>
          <div className={styles.firstText} data-testid="firstText">
            100 Thousand Songs, ad-free
          </div>
          <img
            src={Headphone}
            alt="Headphone"
            className={styles.heroImage}
            data-testid="heroImage"
            width={50} 
            height={50} 
          />
        </div>
        <div className={styles.secondText} data-testid="secondText">
          Over thousands podcast episodes
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
