import styles from './UserCard.module.css'
import React from "react";
import {User} from "@/models";

interface UserCardProps {
    user: User
}

function UserCard({user}: UserCardProps): React.ReactNode {
    return (
        <div className={styles.user_card}>
            <img src={user.image} alt="user"/>
            <p>{ user.name }</p>
            <p>{ user.email }</p>
            <p>{ user.education }</p>
            <p>{ user.city }</p>
            <p>{ user.website }</p>
        </div>
    )
}

export default UserCard