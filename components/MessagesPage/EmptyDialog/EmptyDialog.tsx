import styles from './EmptyDialog.module.css'
import React from "react";

export default function EmptyDialog(): React.ReactNode {
    return (
        <div className={styles.empty_dialog}>
            <p className={styles.message}>
                Pick dialog to start
            </p>
        </div>
    )
}