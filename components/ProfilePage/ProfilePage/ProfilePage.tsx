import React from "react";
import styles from './ProfilePage.module.css'
import {User} from "@/models";
import {NewPostContainer, UserInfo, UserPostsContainer, UserStatusContainer} from "@/components/ProfilePage";

interface ProfilePageProps {
    user: User
    currentUserId: number
}

export default function ProfilePage({user, currentUserId}: ProfilePageProps): React.ReactNode {
    return (
        <div className={styles.profile_page}>
            <div className={styles.main}>
                <img className={styles.avatar} src={user.image} alt={user.username}/>
                <div className={styles.user}>
                    <p className={styles.name}>{user.name}</p>
                    <UserStatusContainer status={user.status || 'Default Status'} />
                    <UserInfo
                        user={user}
                        isEditable={user.id == currentUserId}
                    />
                </div>
            </div>
            <div className={styles.new_post}>
                <NewPostContainer receiverId={user.id}/>
            </div>
            <div className={styles.user_posts}>
                <UserPostsContainer userId={user.id}/>
            </div>
        </div>
    )
}