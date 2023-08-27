import React from "react";
import styles from './UsersPage.module.css'
import {UsersGrid} from "@/components/UsersPage";
import {MyButton} from "@/components/ui";
import {User} from "@/models";

interface UsersPageProps {
    users: User[]
    usersLength: number
    addUsersCallback: () => void
}

export default function UsersPage({users, usersLength, addUsersCallback}: UsersPageProps): React.ReactNode {
    return (
        <div className={styles.users_page}>
            <UsersGrid users={users}/>
            {usersLength > users.length ? (
                <div className={styles.button}>
                    <MyButton
                        onClick={addUsersCallback}
                        text={'Add Users'}
                        size={'m'}
                        type={'fill'}
                    />
                </div>
            ) : ''}
        </div>
    )
}