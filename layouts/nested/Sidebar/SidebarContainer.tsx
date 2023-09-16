'use client'

import {useAppSelector} from "@/shared/hooks/redux";
import React from "react";
import Sidebar from "@/layouts/nested/Sidebar/Sidebar";
import {SidebarMenuItem} from "@/shared/models";
import profilePic from "@/assets/pictures/sidebar/user.png";
import messagesPic from "@/assets/pictures/sidebar/message.png";
import usersPic from "@/assets/pictures/sidebar/group.png";
import newsPic from "@/assets/pictures/sidebar/news.png";
import musicPic from "@/assets/pictures/sidebar/music.png";
import settingsPic from "@/assets/pictures/sidebar/settings.png";

export default function SidebarContainer(): React.ReactNode {
    const currentUserId = useAppSelector(state =>
        state.user.currentUser &&
        state.user.currentUser.id)

    const items: SidebarMenuItem[] = [
        {
            text: 'Profile',
            icon: profilePic.src,
            href: `/users/${currentUserId}`
        },
        {
            text: 'Messages',
            icon: messagesPic.src,
            href: `/messages`
        },
        {
            text: 'Users',
            icon: usersPic.src,
            href: `/users`
        },
        {
            text: 'News',
            icon: newsPic.src,
            href: `/news`
        },
        {
            text: 'Music',
            icon: musicPic.src,
            href: `/music`
        },
        {
            text: 'Settings',
            icon: settingsPic.src,
            href: `/settings`
        },
    ]

    return <Sidebar items={items} />
}