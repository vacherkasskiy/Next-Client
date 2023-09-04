import styles from './MainPage.module.css'
import React from "react";
import Link from "next/link";

export default function MainPage(): React.ReactNode {
    return (
        <div className={styles.main_page}>
            <div className={styles.links}>
                <Link href={'/users'}>go to users page</Link>
                <Link href={'/messages'}>go to messages page</Link>
                <Link href={'/register'}>go to register page</Link>
                <Link href={'/login'}>go to login page</Link>
            </div>
            <p className={styles.text}>Page for devs only</p>
        </div>
    )
}