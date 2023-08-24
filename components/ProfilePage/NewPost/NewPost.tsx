import React, {useRef} from "react";
import styles from './NewPost.module.css'
import {MyButton} from "@/components/ui";

interface NewPostProps {
    text: string | undefined
    onAddCallback: () => void
    onChangeCallback: (value: string | undefined) => void
}

export default function NewPost({text, onAddCallback, onChangeCallback}: NewPostProps): React.ReactNode {
    const postTextarea = useRef<HTMLTextAreaElement>(null)

    const handleOnChange = () => {
        if (postTextarea.current) {
            onChangeCallback(postTextarea.current.value)
        }
    }

    const handleOnSave = () => {
        onAddCallback()
    }

    return (
        <div className={styles.new_post}>
            <textarea
                ref={postTextarea}
                placeholder={"New post..."}
                className={styles.textarea}
                value={text}
                onChange={handleOnChange}
            ></textarea>
            <div className={styles.save_btn}>
                <MyButton
                    text={'Post'}
                    size={'m'}
                    onClick={handleOnSave}
                />
            </div>
        </div>
    )
}