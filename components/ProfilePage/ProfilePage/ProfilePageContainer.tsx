'use client'

import React from "react";
import {useFetchUserQuery} from "@/shared/api/UsersAPI";
import {useParams} from "next/navigation";
import ProfilePage from "./ProfilePage";
import {ErrorPage, Preloader} from "@/components/ui";
import {useAppSelector} from "@/shared/hooks/redux";

export default function ProfilePageContainer(): React.ReactNode {
    const {userId} = useParams()
    const currentUser = useAppSelector(state => state.user.currentUser);
    const {
        data: user,
        error,
        isLoading
    } = useFetchUserQuery(Number(userId))

    return (
        <>
            {isLoading && <Preloader />}
            {(!isLoading && error) && <ErrorPage message={'Something went wrong'} />}
            {user && <ProfilePage
                user={user}
                currentUserId={(currentUser && currentUser.id) || -1}
            />}
        </>
    )
}