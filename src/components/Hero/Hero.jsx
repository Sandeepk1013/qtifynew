import React from "react";
import styles from "./Hero.module.css"
import Headphone from "../../assets/headphone_logo.png";

const HeroSection = ()=>{
  return (
    <div className={styles.hero}>
      <div>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousand podcast episodes</h1>
      </div>
      
        <img src ={Headphone} width = {212} alt = "headphones"/>
      
    </div>
  )
} 


export default HeroSection;