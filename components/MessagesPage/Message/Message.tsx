import React from "react";
import styles from './Message.module.css'

interface MessageProps {
    text: string
    image: string | undefined
    owner?: boolean
}

export default function Message({text, image, owner}: MessageProps): React.ReactNode {
    const textStyles = styles.text + (owner ? (' ' + styles.owner) : '');

    return (
        <div className={styles.message}>
            <img className={styles.avatar} src={image || ''} alt=""/>
            <p className={textStyles}>{text}</p>
        </div>
    )
}