'use client'

import React, {useState} from "react";
import NewMessage from "./NewMessage";
import {useAppSelector} from "@/public/hooks/redux";
import {useParams} from "next/navigation";
import {useAddMessageMutation} from "@/services/MessagesService";

export default function NewMessageContainer(): React.ReactNode {
    const [state, setState] = useState<string | undefined>('')
    const currentUser = useAppSelector(state => state.user.user)
    const [addMessage, {isLoading, error}]
        = useAddMessageMutation()
    const {userId: receiverId} = useParams()

    const handleOnChange = (value: string | undefined) => {
        setState(value)
    }

    const handleOnAdd = () => {
        if (state) {
            addMessage({
                authorId: currentUser.id,
                receiverId: Number(receiverId),
                text: state
            })
            setState('')
        }
    }

    return (
        <NewMessage
            text={state || ''}
            onChangeCallback={handleOnChange}
            onAddCallback={handleOnAdd}
        />
    )
}