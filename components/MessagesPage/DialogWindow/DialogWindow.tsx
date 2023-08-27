import React from "react";
import styles from './DialogWindow.module.css'
import {Message, NewMessageContainer} from "@/components/MessagesPage";
import {MessageModel} from "@/models";

interface DialogWindowProps {
    messages: MessageModel[]
    currentUserId: number
}

export default function DialogWindow({messages, currentUserId}: DialogWindowProps): React.ReactNode {
    return (
        <div className={styles.dialog_window}>
            <div className={styles.messages}>
                {messages.map(message =>
                    <Message
                        key={message.id}
                        image={message.author.image}
                        text={message.text}
                        owner={message.author.id == currentUserId}
                    />
                )}
            </div>
            <NewMessageContainer />
        </div>
    )
}