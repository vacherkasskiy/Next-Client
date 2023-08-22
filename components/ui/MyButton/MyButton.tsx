import React from "react";
import styles from './MyButton.module.css'

type size = 's' | 'm' | 'l'
type type = 'fill' | 'outline'

interface MyButtonProps {
    onClick?: (() => void) | undefined
    text: string
    size?: size | undefined
    type?: type | undefined
}

export default function MyButton({text, onClick, size, type}: MyButtonProps): React.ReactNode {
    const getSizeStyle = (): string => {
        switch (size) {
            case undefined:
                return styles.Size_m
            case 's':
                return styles.Size_s
            case 'm':
                return styles.Size_m
            case 'l':
                return styles.Size_l
        }
    }

    const getTypeStyle = ():string => {
        switch (type) {
            case undefined:
                return styles.Type_fill
            case 'fill':
                return styles.Type_fill
            case 'outline':
                return styles.Type_outline
        }
    }

    const buttonStyle =
        styles.my_button + ' ' +
        getSizeStyle() + ' ' +
        getTypeStyle()

    return (
        <button className={buttonStyle} onClick={onClick}>{text}</button>
    )
}