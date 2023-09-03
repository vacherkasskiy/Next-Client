'use client'

import React from "react";
import {useFetchUserQuery} from "@/api/UsersAPI";
import {useParams} from "next/navigation";
import ProfilePage from "./ProfilePage";
import {ErrorPage, Preloader} from "@/components/ui";

export default function ProfilePageContainer(): React.ReactNode {
    const {userId} = useParams()
    const {data: user, error, isLoading} = useFetchUserQuery(Number(userId))

    return (
        <>
            {isLoading && <Preloader />}
            {(!isLoading && error) && <ErrorPage message={'Something went wrong'} />}
            {user && <ProfilePage user={user} />}
        </>
    )
}