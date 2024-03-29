import React from "react";
import Button from "../Button/Button";
import Search from "../Search/Search";
import styles from './Navbar.module.css'
import LogoImage from "../../assets/Logo.png"

const Navbar = ()=>{
    return(
        <>
            <nav className={styles.navbar}>
                <div className={styles.logoDiv}><img  src={LogoImage} alt="logo" width={67}/></div>
                <logo/>
                 <Search search={"Search a song of your choice"}/>
                <Button children="Give Feedback"/>
                
            </nav>
        </>
    )
}

export default Navbar;