import React from "react";
import styles from './Sidebar.module.css'
import {DialogsListContainer, SearchBarContainer} from "@/components/MessagesPage";

export default function Sidebar(): React.ReactNode {
    return (
        <div className={styles.dialogs}>
            <div className={styles.search_bar}>
                <SearchBarContainer />
            </div>
            <DialogsListContainer />
        </div>
    )
}
