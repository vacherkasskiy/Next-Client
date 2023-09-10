'use client'

import React from "react";
import DialogWindow from "./DialogWindow";
import {useParams} from "next/navigation";
import {useAppSelector} from "@/public/hooks/redux";
import DialogWindowMock from "@/components/MessagesPage/DialogWindow/DialogWindowMock";
import {useFetchAllMessagesQuery} from "@/shared/api/MessagesAPI";

export default function DialogWindowContainer(): React.ReactNode {
    const {userId} = useParams()
    const currentUserId = useAppSelector(state =>
        state.user.currentUser &&
        state.user.currentUser.id)
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
                currentUserId={currentUserId || 0}
            />}
        </>
    )
}