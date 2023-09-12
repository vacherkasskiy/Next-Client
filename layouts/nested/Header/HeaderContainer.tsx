'use client'

import React from "react";
import Header from "@/layouts/nested/Header/Header";
import {useGetCurrentQuery} from "@/shared/api/AuthAPI";
import {useAppSelector} from "@/public/hooks/redux";

export default function HeaderContainer(): React.ReactNode {
    const currentUser = useAppSelector(state => state.user.currentUser)

    return (
        <Header
            avatar={currentUser && currentUser.image}
        />
    )
}