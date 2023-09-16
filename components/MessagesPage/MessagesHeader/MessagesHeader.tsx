import React from "react";
import styles from './MessagesHeader.module.css'
import {User} from "@/models";

interface MessagesHeaderProps {
    user: User
}

export default function MessagesHeader({user}: MessagesHeaderProps): React.ReactNode {
    return (
        <div className={styles.messages_header}>
            <img className={styles.avatar} src={user.image} alt=""/>
            <div className={styles.user_info}>
                <p className={styles.name}>{user.name}</p>
                <p className={styles.seen_at}>15 minutes ago</p>
            </div>
        </div>
    )
}