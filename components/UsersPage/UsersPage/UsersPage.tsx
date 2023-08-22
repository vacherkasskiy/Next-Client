import React from "react";
import styles from "@/app/(nested)/users/page.module.css";
import {UsersGrid} from "@/components/UsersPage";
import {MyButton} from "@/components/ui";
import {User} from "@/models";

interface UsersPageProps {
    users: User[]
    addUsersCallback: () => void
}

export default function UsersPage({users, addUsersCallback}: UsersPageProps): React.ReactNode {
    return (
        <div className={styles.users_page}>
            <UsersGrid users={users}/>
            <div className={styles.button}>
                <MyButton
                    onClick={addUsersCallback}
                    text={'Add User'}
                    size={'m'}
                    type={'fill'}
                />
            </div>
        </div>
    )
}