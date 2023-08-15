import styles from "./Sidebar.module.css";
import profilePic from "@/assets/pictures/sidebar/user.png";
import messagesPic from "@/assets/pictures/sidebar/message.png";
import usersPic from "@/assets/pictures/sidebar/group.png";
import newsPic from "@/assets/pictures/sidebar/news.png";
import musicPic from "@/assets/pictures/sidebar/music.png";
import settingsPic from "@/assets/pictures/sidebar/settings.png";
import Link from "next/link";
import React from "react";

function Sidebar(): React.ReactNode {
    return (
        <div className={styles.main_sidebar}>
            <Link href={'/profile/1'} className={styles.section}>
                <img className={styles.icon} src={profilePic.src} alt=""/>
                <p className={styles.name}>Profile</p>
            </Link>
            <Link href={'/messages'} className={styles.section}>
                <img className={styles.icon} src={messagesPic.src} alt=""/>
                <p className={styles.name}>Messages</p>
            </Link>
            <Link href={'/users'} className={styles.section}>
                <img className={styles.icon} src={usersPic.src} alt=""/>
                <p className={styles.name}>Users</p>
            </Link>
            <Link href={'/news'} className={styles.section}>
                <img className={styles.icon} src={newsPic.src} alt=""/>
                <p className={styles.name}>News</p>
            </Link>
            <Link href={'/music'} className={styles.section}>
                <img className={styles.icon} src={musicPic.src} alt=""/>
                <p className={styles.name}>Music</p>
            </Link>
            <Link href={'/settings'} className={styles.section}>
                <img className={styles.icon} src={settingsPic.src} alt=""/>
                <p className={styles.name}>Settings</p>
            </Link>
        </div>
    );
}

export default Sidebar;