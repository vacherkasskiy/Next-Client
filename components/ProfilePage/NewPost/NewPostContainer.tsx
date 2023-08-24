'use client'

import NewPost from "./NewPost";
import React, {useState} from "react";

export default function NewPostContainer(): React.ReactNode {
    const [state, setState] = useState<string | undefined>('')

    const handleOnChange = (val: string | undefined) => {
        setState(val)
    }

    const handleOnAdd = () => {

    }

    return (
        <NewPost
            text={state}
            onChangeCallback={handleOnChange}
            onAddCallback={handleOnAdd}
        />
    )
}