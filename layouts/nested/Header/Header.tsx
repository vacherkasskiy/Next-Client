import logo from "@/assets/pictures/header/apple.png"
import styles from "./Header.module.css"
import React from 'react'
import {AvatarDropdown} from "@/layouts/nested";
import {HeaderDropdownItem} from "@/shared/models";

interface HeaderProps {
    avatar: string
    dropdownItems: HeaderDropdownItem[]
}

function Header({avatar, dropdownItems}: HeaderProps): React.ReactNode {
    return (
        <div className={styles.main_header}>
            <img className={styles.logo} src={logo.src} alt=""/>
            <AvatarDropdown
                avatar={avatar}
                items={dropdownItems}
            />
        </div>
    );
}

export default Header;