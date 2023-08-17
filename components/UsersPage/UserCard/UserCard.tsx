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
            <p>Email: { user.email }</p>
            <p>Education: { user.education }</p>
            <p>City: { user.city }</p>
            <p>Website: { user.website }</p>
        </div>
    )
}

export default UserCard