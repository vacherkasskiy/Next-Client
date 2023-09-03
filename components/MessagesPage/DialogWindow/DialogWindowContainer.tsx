'use client'

import React from "react";
import DialogWindow from "./DialogWindow";
import {useParams} from "next/navigation";
import {useAppSelector} from "@/public/hooks/redux";
import DialogWindowMock from "@/components/MessagesPage/DialogWindow/DialogWindowMock";
import {useFetchAllMessagesQuery} from "@/api/MessagesAPI";

export default function DialogWindowContainer(): React.ReactNode {
    const {userId} = useParams()
    const currentUserId = useAppSelector(state => state.user.user.id)
    const {
        data: messages,
        isLoading,
        error
    } = useFetchAllMessagesQuery(Number(userId), {
            pollingInterval: 1000,
        })

    return (
        <>
            {isLoading && <DialogWindowMock />}
            {messages && <DialogWindow
                messages={messages}
                currentUserId={currentUserId}
            />}
        </>
    )
}