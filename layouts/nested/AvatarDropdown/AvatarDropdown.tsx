'use client'

import React, {useState} from "react";
import styles from './AvatarDropdown.module.scss'
import {HeaderDropdownItem} from "@/shared/models";

interface AvatarDropdownProps {
    avatar: string
    items: HeaderDropdownItem[]
}

interface AvatarDropdownState {
    isActive: boolean
}

export default function AvatarDropdown({avatar, items}: AvatarDropdownProps): React.ReactNode {
    const [state, setState] = useState<AvatarDropdownState>({
        isActive: false
    })

    const itemsStyles = styles.items + ' ' + (state.isActive ? styles.Active : '')

    const handleOnFocus = () => {
        setState({
            ...state,
            isActive: true
        })
    }

    const handleOnBlur = () => {
        setTimeout(() => {
            setState({
                ...state,
                isActive: false
            })
        }, 300)
    }

    return (
        <div className={styles.avatar_wrapper}>
            <input
                className={styles.hidden_input}
                onFocus={handleOnFocus}
                onBlur={handleOnBlur}
                type="text"
                readOnly={true}
            />
            <img className={styles.avatar} src={avatar || ''} alt=""/>
            <div className={itemsStyles}>
                {items.map(item =>
                    <div
                        className={styles.item}
                        key={item.text}
                        onClick={item.onClickCallback}
                    >
                        <p className={styles.text}>{item.text}</p>
                        <img className={styles.icon} src={item.icon} alt="" />
                    </div>
                )}
            </div>
        </div>
    )
}