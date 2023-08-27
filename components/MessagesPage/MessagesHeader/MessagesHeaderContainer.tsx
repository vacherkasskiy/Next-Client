'use client'

import React from "react";
import MessagesHeader from "./MessagesHeader";
import {useParams} from "next/navigation";
import {useFetchUserQuery} from "@/services/UsersService";

export default function MessagesHeaderContainer(): React.ReactNode {
    const {userId} = useParams()
    const {data:user, isLoading, error} = useFetchUserQuery(Number(userId))

    return (
        <>
            {user && <MessagesHeader user={user} />}
        </>
    )
}