import React from "react";
import {Header, Sidebar} from "@/layouts/nested";
import styles from './nested.module.css'

interface UsersLayoutProps {
    children: React.ReactNode
}

function UsersLayout({children}: UsersLayoutProps): React.ReactNode {
    return (
        <div className={styles.nested_layout}>
            <div className={styles.main}>
                <Header/>
                <Sidebar/>
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default UsersLayout