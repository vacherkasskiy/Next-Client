import React from "react";
import styles from './DialogsList.module.css'
import {User} from "@/models";
import {DialogLinkContainer} from "@/components/MessagesPage";

interface DialogsListProps {
    users: User[]
}

export default function DialogsList({users}: DialogsListProps): React.ReactNode {
    return (
        <div className={styles.dialogs_list}>
            {users.map(user =>
                <div
                    className={styles.link_wrapper}
                    key={user.id}
                >
                    <DialogLinkContainer
                        user={user}
                    />
                </div>
            )}
        </div>
    )
}