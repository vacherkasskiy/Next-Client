import React from "react";
import {HeaderContainer, Sidebar} from "@/layouts/nested";
import styles from './nested.module.css'
import {IsAuthorized} from "@/hocs";

interface NestedLayoutProps {
    children: React.ReactNode
}

export default function NestedLayout({children}: NestedLayoutProps): React.ReactNode {
    return (
        <IsAuthorized>
            <div className={styles.nested_layout}>
                <div className={styles.main}>
                    <HeaderContainer/>
                    <Sidebar/>
                    <div className={styles.content}>
                        {children}
                    </div>
                </div>
            </div>
        </IsAuthorized>
    )
}