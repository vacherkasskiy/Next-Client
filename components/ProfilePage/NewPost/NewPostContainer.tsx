'use client'

import NewPost from "./NewPost";
import React, {useState} from "react";
import {useAddPostMutation} from "@/services/PostsService";

interface NewPostContainerProps {
    receiverId: number,
}

export default function NewPostContainer({receiverId}: NewPostContainerProps): React.ReactNode {
    const [state, setState] = useState<string | undefined>('')
    const [addPost, {data, isLoading, error}] = useAddPostMutation()

    const handleOnChange = (val: string | undefined) => {
        setState(val)
    }

    const handleOnAdd = () => {
        if (state) {
            addPost({
                authorId: 8,
                receiverId: receiverId,
                text: state
            })
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