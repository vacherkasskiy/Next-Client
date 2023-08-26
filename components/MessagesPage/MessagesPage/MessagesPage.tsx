import React from "react";
import styles from './MessagesPage.module.css'
import {MessagesHeader} from "@/components/MessagesPage";

export default function MessagesPage(): React.ReactNode {
    return (
        <div className={styles.messages_page}>
            <MessagesHeader />
            <div className={styles.dialog_window}>

            </div>
        </div>
    )
}