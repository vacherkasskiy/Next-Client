import React from "react";
import styles from './DialogWindow.module.css'
import MessageMock from "@/components/MessagesPage/Message/MessageMock";

export default function DialogWindowMock(): React.ReactNode {
    return (
        <div className={styles.dialog_window}>
            <div className={styles.messages}>
                {Array(10).fill(null).map((_, index) =>
                    <React.Fragment key={index}>
                        <MessageMock
                            textWidth={'400px'}
                            textHeight={'150px'}
                        />
                        <MessageMock />
                    </React.Fragment>
                )}
            </div>
        </div>
    )
}