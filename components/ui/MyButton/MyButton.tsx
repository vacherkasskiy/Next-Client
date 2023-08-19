import React from "react";
import styles from './MyButton.module.css'

interface MyButtonProps {
    onClick: (() => void) | undefined
    text: string
}

export default function MyButton({text, onClick}: MyButtonProps): React.ReactNode {
    return (
        <button className={styles.my_button} onClick={onClick}>{text}</button>
    )
}