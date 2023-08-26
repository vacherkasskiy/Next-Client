import React from "react";
import {SidebarContainer} from "@/layouts/messages";
import styles from './messages.module.css'

interface MessagesPageLayoutProps {
    children: React.ReactNode
}

export default function MessagesPageLayout({children}: MessagesPageLayoutProps): React.ReactNode {
    return (
        <div className={styles.messages_layout}>
            <SidebarContainer />
            {children}
        </div>
    )
}