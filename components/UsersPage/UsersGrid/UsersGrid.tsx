import React from "react";
import {User} from "@/models";
import styles from "./UsersGrid.module.css"
import {UserCard} from "@/components/UsersPage";

interface UsersGripProps {
    users: User[]
}

export default function UsersGrid({users}: UsersGripProps): React.ReactNode {
    return (
        <div className={styles.users_grid}>
            {users.map(user => <UserCard key={user.id} user={user} />)}
        </div>
    )
}