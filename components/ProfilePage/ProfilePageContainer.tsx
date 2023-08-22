'use client'

import React from "react";
import {useFetchUserQuery} from "@/services/UsersService";
import {useParams} from "next/navigation";
import {ProfilePage} from "@/components/ProfilePage/index";
import {Preloader} from "@/components/ui";

export default function ProfilePageContainer(): React.ReactNode {
    const {userId} = useParams()
    const {data: user, error, isLoading} = useFetchUserQuery(Number(userId))

    return (
        <>
            {error && 'error'}
            {isLoading && <Preloader />}
            {user && <ProfilePage user={user} />}
        </>
    )
}