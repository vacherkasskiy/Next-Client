import styles from "./UserInfo.module.css";
import {InformationPair} from "@/components/ui";
import React from "react";
import {User} from "@/models";

interface UserInfoProps {
    user: User
}

export default function UserInfo({user}: UserInfoProps): React.ReactNode {
    return (
        <div className={styles.info}>
            <InformationPair property={'City'} value={'I don\'t remember tbh'} />
            <InformationPair property={'Username'} value={user.username} />
            <InformationPair property={'Email'} value={user.email} />
            <InformationPair property={'Website'} value={user.website != undefined ? user.website : ''} />
        </div>
    )
}