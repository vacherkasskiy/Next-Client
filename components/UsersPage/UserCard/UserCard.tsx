import styles from './UserCard.module.css'
import React from "react";
import {User} from "@/models";
import {InformationPair} from "@/components/ui";
import {UserInfo} from "@/components/UsersPage";

interface UserCardProps {
    user: User
}

function UserCard({user}: UserCardProps): React.ReactNode {
    return (
        <div className={styles.user_card}>
            <div className={styles.main}>
                <img className={styles.avatar} src={user.image && user.image} alt="user"/>
                <div className={styles.info}>
                    <UserInfo user={user} />
                </div>
            </div>
            <div className={styles.box_wrapper}>
                <div className={styles.box}></div>
            </div>
        </div>
    )
}

export default UserCard