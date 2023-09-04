import styles from './auth.module.css'
import React from "react";

interface AuthLayoutProps {
    children: React.ReactNode
}

export default function AuthLayout({children}: AuthLayoutProps): React.ReactNode {
    return (
        <div className={styles.auth}>
            {children}
        </div>
    )
}