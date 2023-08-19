import React from "react";
import styles from "@/app/(nested)/users/page.module.css";
import Preloader from "../../ui/Preloader/Preloader";
import {UsersGrid} from "@/components/UsersPage";
import {MyButton} from "@/components/ui";
import {User} from "@/models";

interface UsersPageProps {
    isLoading: boolean
    error: string | undefined
    users: User[] | undefined
    addUsersCallback: () => void
}

export default function UsersPage({isLoading, error, users, addUsersCallback}: UsersPageProps): React.ReactNode {
    return (
        <div className={styles.users_page}>
            {isLoading && <Preloader/>}
            {error && <h1>Error</h1>}
            {users && <UsersGrid users={users}/>}
            <div className={styles.button}>
                <MyButton onClick={addUsersCallback}
                          text={'Add User'}/>
            </div>
        </div>
    )
}