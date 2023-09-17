import styles from "./UserInfo.module.scss";
import {InformationPair} from "@/components/ui";
import React from "react";
import {User} from "@/models";
import editIcon from '@/assets/pictures/shared_icons/editing.png'
import Link from "next/link";

interface UserInfoProps {
    user: User
}

export default function UserInfo({user}: UserInfoProps): React.ReactNode {
    return (
        <div className={styles.info}>
            <div className={styles.edit}>
                <Link href={'/edit'}>
                    <img src={editIcon.src} alt=""/>
                </Link>
            </div>
            <InformationPair property={'Username'} value={user.username} />
            <InformationPair property={'City'} value={user.city || 'Undefined'} />
            <InformationPair property={'Email'} value={user.email} />
            <InformationPair property={'Website'} value={user.website || 'Undefined'} />
        </div>
    )
}