import React from "react";
import styles from './ProfilePreview.module.scss'
import {User} from "@/models";

interface ProfilePreviewProps {
    user: User
}

function ProfilePreview({user}: ProfilePreviewProps): React.ReactNode {
    return (
        <div className={styles.profile_preview}>
            <img
                className={styles.avatar}
                src={user.image || 'https://cdn-icons-png.flaticon.com/512/180/180654.png'}
                alt=""
            />
            <div className={styles.info}>
                <p className={styles.name}>{user.name}</p>
                <p className={styles.id}>id: {user.id}</p>
            </div>
        </div>
    )
}

export default ProfilePreview