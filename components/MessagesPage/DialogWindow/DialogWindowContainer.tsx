'use client'

import React from "react";
import DialogWindow from "./DialogWindow";
import {useFetchAllMessagesQuery} from "@/services/MessagesService";
import {useParams} from "next/navigation";
import {useAppSelector} from "@/public/hooks/redux";

export default function DialogWindowContainer(): React.ReactNode {
    const {userId} = useParams()
    const currentUserId = useAppSelector(state => state.user.user.id)
    const {data: messages, isLoading, error} =
        useFetchAllMessagesQuery(Number(userId), {
            pollingInterval: 1000,
        })

    return (
        <>
            {messages && <DialogWindow
                messages={messages}
                currentUserId={currentUserId}
            />}
        </>
    )
}