import logo from "@/assets/pictures/header/apple.png"
import styles from "./Header.module.css"
import React from 'react'

function Header(): React.ReactNode {
    return (
        <div className={styles.main_header}>
            <img className={styles.logo} src={logo.src} alt=""/>
            <img className={styles.avatar} src={''} alt=""/>
        </div>
    );
}

export default Header;