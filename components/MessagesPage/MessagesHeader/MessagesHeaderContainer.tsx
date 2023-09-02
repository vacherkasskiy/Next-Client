'use client'

import React from "react";
import MessagesHeader from "./MessagesHeader";
import {useParams} from "next/navigation";
import {useFetchUserQuery} from "@/services/UsersService";
import {Mock} from "@/components/ui";

export default function MessagesHeaderContainer(): React.ReactNode {
    const {userId} = useParams()
    const {
        data:user,
        isLoading,
        error
    } = useFetchUserQuery(Number(userId))

    return (
        <>
            {isLoading && <Mock borderRadius={'8px'}/>}
            {user && <MessagesHeader user={user} />}
        </>
    )
}