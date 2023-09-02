import React from "react";
import styles from './DialogLink.module.css'
import {MessageModel, User} from "@/models";
import Link from "next/link";

interface DialogLinkProps {
    user: User
    latestMessage: MessageModel | undefined
}

export default function DialogLink({user, latestMessage}: DialogLinkProps): React.ReactNode {
    const latestMessageText =
        latestMessage  == null ?
        'No messages yet' :
        latestMessage.text

    return (
        <Link href={'/messages/' + user.id} className={styles.link_wrapper}>
            <div className={styles.dialog_link}>
                <img className={styles.avatar} src={user.image} alt=""/>
                <div className={styles.info}>
                    <p className={styles.user_name}>{user.username}</p>
                    <p className={styles.last_message}>{latestMessageText}</p>
                </div>
            </div>
        </Link>
    )
}