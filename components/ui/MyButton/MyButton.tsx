import React from "react";
import styles from './MyButton.module.scss'

type size = 's' | 'm' | 'l'
type type = 'fill' | 'outline'
type theme = 'red' | 'dark'
type typeProperty = 'button' | 'submit' | 'reset'

interface MyButtonProps {
    text: string
    typeProperty?: typeProperty
    size?: size
    type?: type
    theme?: theme
    onClick?: (() => void)
}

function MyButton({text, onClick, size, type, theme, typeProperty}: MyButtonProps): React.ReactNode {
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

    const getTypeStyle = (): string => {
        switch (type) {
            case undefined:
                return styles.Type_fill
            case 'fill':
                return styles.Type_fill
            case 'outline':
                return styles.Type_outline
        }
    }

    const getThemeStyle = (): string => {
        switch (theme) {
            case undefined:
                return styles.Theme_red
            case 'red':
                return styles.Theme_red
            case 'dark':
                return styles.Theme_dark
        }
    }

    const buttonStyle =
        styles.my_button + ' ' +
        getSizeStyle() + ' ' +
        getTypeStyle() + ' ' +
        getThemeStyle()

    return (
        <button
            className={buttonStyle}
            onClick={onClick}
            type={typeProperty || 'button'}
        >
            {text}
        </button>
    )
}

export default MyButton