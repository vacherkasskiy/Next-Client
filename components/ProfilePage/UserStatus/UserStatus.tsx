'use client'

import React, {useRef} from "react";
import styles from './UserStatus.module.css'

interface UserStatusProps {
    isEditModeOn: boolean
    status: string
    onFocusCallback: () => void
    onBlurCallback: (status: string) => void
}

function UserStatus({isEditModeOn, status, onFocusCallback, onBlurCallback}: UserStatusProps): React.ReactNode {
    const statusInput = useRef<HTMLInputElement>(null)
    const inputStyles = isEditModeOn ? styles.Enabled : styles.Disabled

    return (
        <div className={styles.status_wrapper}>
            <input
                ref={statusInput}
                className={styles.status + ' ' + inputStyles}
                onFocus={onFocusCallback}
                onBlur={() => onBlurCallback(statusInput.current ? statusInput.current.value : '')}
                defaultValue={status}>
            </input>
        </div>
    )
}

export default UserStatus