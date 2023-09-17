'use client'

import NewPost from "./NewPost";
import React, {useState} from "react";
import {useAddPostMutation} from "@/shared/api/PostsAPI";

interface NewPostContainerProps {
    receiverId: number,
}

export default function NewPostContainer({receiverId}: NewPostContainerProps): React.ReactNode {
    const [state, setState] = useState<string | undefined>('')
    const [addPost, {}] = useAddPostMutation()

    const handleOnChange = (val: string | undefined) => {
        setState(val)
    }

    const handleOnAdd = () => {
        if (state) {
            addPost({
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