import React from "react";
import styles from './Message.module.css'
import {Mock} from "@/components/ui";

interface MessageMockProps {
    textWidth?: string
    textHeight?: string
}

export default function MessageMock({textWidth = '100px', textHeight = '50px'}: MessageMockProps): React.ReactNode {
    const textStyles = {
        padding: 0,
        width: textWidth,
        height: textHeight,
        background: 'transparent'
    }

    return (
        <div className={styles.message}>
            <div className={styles.avatar}>
                <Mock borderRadius={'50%'}/>
            </div>
            <div className={styles.text} style={textStyles}>
                <Mock borderRadius={'5px'}/>
            </div>
        </div>
    )
}