'use client'

import React from "react";
import Header from "@/layouts/nested/Header/Header";
import {useGetCurrentQuery} from "@/shared/api/AuthAPI";

export default function HeaderContainer(): React.ReactNode {
    const {data: currentUser, error} = useGetCurrentQuery()

    return (
        <Header
            avatar={currentUser && currentUser.image}
        />
    )
}