import React from "react";
import styles from './MessagesPage.module.css'
import {DialogWindowContainer, MessagesHeaderContainer} from "@/components/MessagesPage";

export default function MessagesPage(): React.ReactNode {
    return (
        <div className={styles.messages_page}>
            <MessagesHeaderContainer />
            <DialogWindowContainer />
        </div>
    )
}