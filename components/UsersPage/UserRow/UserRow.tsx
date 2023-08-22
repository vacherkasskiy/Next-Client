import styles from './UserRow.module.css'
import React from "react";
import {User} from "@/models";
import {InformationPair, MyButton} from "@/components/ui";
import {UserInfo} from "@/components/UsersPage";
import Link from "next/link";

interface UserCardProps {
    user: User
}

function UserRow({user}: UserCardProps): React.ReactNode {
    return (
        <div className={styles.user_card}>
            <div className={styles.main}>
                <img className={styles.avatar} src={user.image && user.image} alt="user"/>
                <div className={styles.info}>
                    <UserInfo user={user} />
                </div>
            </div>
            <div className={styles.button_wrapper}>
                <Link href={'/users/' + user.id}>
                    <MyButton text={'View profile'} size={'m'} type={'outline'} />
                </Link>
                <Link href={'/messages/' + user.id}>
                    <MyButton text={'Send message'} size={'m'} type={'outline'} />
                </Link>
            </div>
        </div>
    )
}

export default UserRow