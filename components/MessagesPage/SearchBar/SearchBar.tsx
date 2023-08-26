import React from "react";
import styles from './SearchBar.module.css'

interface SearchBarProps {
    text?: string | undefined
}

export default function SearchBar({text}: SearchBarProps): React.ReactNode {
    return (
        <div className={styles.search_bar}>
            <input
                className={styles.input_field}
                type="text"
                placeholder={'Search...'}
                value={text}
            />
        </div>
    )
}