import styles from './NewMessage.module.css'
import React, {useRef} from "react";
import {MyButton} from "@/components/ui";

interface NewMessageProps {
    text: string
    onChangeCallback: (value: string | undefined) => void
    onAddCallback: () => void
}

export default function NewMessage({text, onChangeCallback, onAddCallback}: NewMessageProps): React.ReactNode {
    const maxHeight: number = 100;
    const ref = useRef<HTMLTextAreaElement>(null)
    const handleOnInput = () => {
        if (ref.current) {
            ref.current.style.height = "";
            ref.current.style.height = Math.min(ref.current.scrollHeight, maxHeight) + "px";
        }
    }

    const handleOnChange = () => {
        if (ref.current) {
            onChangeCallback(ref.current.value)
        }
    }

    return (
        <div className={styles.new_message}>
            <textarea
                className={styles.textarea}
                ref={ref}
                onInput={handleOnInput}
                onChange={handleOnChange}
                placeholder='New message...'
                value={text}
            ></textarea>
            <div className={styles.send_button}>
                <MyButton
                    text={'Send'}
                    size={'m'}
                    onClick={onAddCallback}
                />
            </div>
        </div>
    )
}