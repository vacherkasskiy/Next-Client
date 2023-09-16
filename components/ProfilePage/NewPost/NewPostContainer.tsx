'use client'

import NewPost from "./NewPost";
import React, {useState} from "react";
import {useAddPostMutation} from "@/shared/api/PostsAPI";
import {useAppSelector} from "@/shared/hooks/redux";

interface NewPostContainerProps {
    receiverId: number,
}

export default function NewPostContainer({receiverId}: NewPostContainerProps): React.ReactNode {
    const [state, setState] = useState<string | undefined>('')
    const [addPost, {}] = useAddPostMutation()
    const currentUser = useAppSelector(state => state.user.currentUser)

    const handleOnChange = (val: string | undefined) => {
        setState(val)
    }

    const handleOnAdd = () => {
        if (state) {
            addPost({
                authorId: currentUser.id,
                receiverId: receiverId,
                text: state
            })
            setState('')
        }
    }

    return (
        <NewPost
            text={state}
            onChangeCallback={handleOnChange}
            onAddCallback={handleOnAdd}
        />
    )
}