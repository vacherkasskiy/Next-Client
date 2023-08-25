'use client'

import logo from "@/assets/pictures/header/apple.png"
import styles from "./Header.module.css"
import React from 'react'
import {useAppSelector} from "@/public/hooks/redux";

function Header(): React.ReactNode {
    const avatar = useAppSelector(state => state.user.user.image)

    return (
        <div className={styles.main_header}>
            <img className={styles.logo} src={logo.src} alt=""/>
            <img className={styles.avatar} src={avatar || ''} alt=""/>
        </div>
    );
}

export default Header;