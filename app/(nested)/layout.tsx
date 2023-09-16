import React from "react";
import {HeaderContainer, SidebarContainer} from "@/layouts/nested";
import styles from './nested.module.css'
import {IsAuthorized} from "@/middlewares";

interface NestedLayoutProps {
    children: React.ReactNode
}

export default function NestedLayout({children}: NestedLayoutProps): React.ReactNode {
    return (
        <IsAuthorized>
            <div className={styles.nested_layout}>
                <div className={styles.main}>
                    <HeaderContainer/>
                    <SidebarContainer />
                    <div className={styles.content}>
                        {children}
                    </div>
                </div>
            </div>
        </IsAuthorized>
    )
}