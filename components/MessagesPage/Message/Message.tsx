import React from "react";
import styles from './Message.module.css'

interface MessageProps {
    text: string
    image: string | undefined
    time: string
    owner?: boolean
}

export default function Message({text, image, time, owner}: MessageProps): React.ReactNode {
    const textStyles = styles.text + (owner ? (' ' + styles.owner) : '');

    return (
        <div className={styles.message}>
            <img className={styles.avatar} src={image || ''} alt=""/>
            <p className={textStyles}>
                {text}
                <span className={styles.time}>{time}</span>
            </p>
        </div>
    )
}