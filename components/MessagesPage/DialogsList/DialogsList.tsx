import React from "react";
import styles from './DialogsList.module.css'
import {User} from "@/models";
import {DialogLink} from "@/components/MessagesPage";

interface DialogsListProps {
    users: User[]
}

export default function DialogsList({users}: DialogsListProps): React.ReactNode {
    return (
        <div className={styles.dialogs_list}>
            {users.map(user =>
                <DialogLink
                    key={user.id}
                    user={user}
                    latestMessage={'Latest message'}
                />
            )}
        </div>
    )
}