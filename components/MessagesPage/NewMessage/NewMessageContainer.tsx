'use client'

import React, {useState} from "react";
import NewMessage from "./NewMessage";
import {useParams} from "next/navigation";
import {useAddMessageMutation} from "@/shared/api/MessagesAPI";

export default function NewMessageContainer(): React.ReactNode {
    const [state, setState] = useState<string | undefined>('')
    const [addMessage, {}]
        = useAddMessageMutation()
    const {userId: receiverId} = useParams()

    const handleOnChange = (value: string | undefined) => {
        setState(value)
    }

    const handleOnAdd = () => {
        if (state) {
            addMessage({
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