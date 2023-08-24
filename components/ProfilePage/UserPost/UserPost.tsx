import styles from "./UserPost.module.css";
import React from "react";

interface UserPostProps {
    image: string | undefined
    name: string
    text: string
}

export default function UserPost({image, name, text}: UserPostProps): React.ReactNode {
    return (
        <div className={styles.user_post}>
            <img className={styles.avatar} src={image} alt=""/>
            <p className={styles.text}>
                <span className={styles.name}>{name}</span>
                {text}
            </p>
        </div>
    );
}