import React from "react";
import styles from './ProfilePage.module.css'
import {User} from "@/models";
import {UserInfo, UserStatusContainer} from "@/components/ProfilePage";

interface ProfilePageProps {
    user: User
}

export default function ProfilePage({user}: ProfilePageProps): React.ReactNode {
    return (
        <div className={styles.profile_page}>
            <img className={styles.avatar} src={user.image} alt={user.username}/>
            <div className={styles.user}>
                <p className={styles.name}>{user.name}</p>
                <UserStatusContainer status={user.status} userId={user.id} />
                <UserInfo user={user} />
            </div>
        </div>
    )
}