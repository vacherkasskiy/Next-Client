'use client'

import React from "react";
import Header from "@/layouts/nested/Header/Header";
import {useAppSelector} from "@/shared/hooks/redux";
import settingsIcon from '@/assets/pictures/sidebar/settings.png'
import userIcon from '@/assets/pictures/sidebar/user.png'
import logoutIcon from '@/assets/pictures/sidebar/logout.png'
import {useLogoutMutation} from "@/shared/api/AuthAPI";
import {useRouter} from "next/navigation";
import {HeaderDropdownItem} from "@/shared/models";

export default function HeaderContainer(): React.ReactNode {
    const router = useRouter()
    const [logout, {}] = useLogoutMutation()
    const currentUser = useAppSelector(state => state.user.currentUser)
    const userAvatar = currentUser ? currentUser.image : 'https://cdn-icons-png.flaticon.com/512/180/180654.png'

    const handleOnLogout = async () => {
        await logout()
        router.push('/login')
    }

    const dropdownItems: HeaderDropdownItem[] = [
        {
            text: 'Profile',
            icon: userIcon.src,
        },
        {
            text: 'Settings',
            icon: settingsIcon.src,
        },
        {
            text: 'Logout',
            icon: logoutIcon.src,
            onClickCallback: handleOnLogout
        },
    ]

    return (
        <Header
            avatar={userAvatar || 'https://cdn-icons-png.flaticon.com/512/180/180654.png'}
            dropdownItems={dropdownItems}
        />
    )
}