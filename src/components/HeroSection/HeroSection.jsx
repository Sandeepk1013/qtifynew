import React from "react";
import styles from "../HeroSection/HeroSection.module.css"
import Headphone from "../../assets/headphone_logo.png";

function HeroSection(){
  return (
    <div className={styles.hero}>
      <div>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousand podcast episodes</h1>
      </div>
      <div>
        <img src ={Headphone} width = {212} alt = "headphones"/>
      </div>
    </div>
  )
} 


export default HeroSection;