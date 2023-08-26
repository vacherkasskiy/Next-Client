import React from "react";
import {User} from "@/models";
import styles from './Sidebar.module.css'
import {SearchBarContainer} from "@/components/MessagesPage";

interface DialogsProps {
    users: User[]
}

export default function Sidebar({users}: DialogsProps): React.ReactNode {
    return (
        <div className={styles.dialogs}>
            <SearchBarContainer />
            {users.map(user => user.name)}
        </div>
    )
}
