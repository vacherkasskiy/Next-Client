'use client'

import React from "react";
import Sidebar from "./Sidebar";
import {useFetchAllUsersQuery} from "@/services/UsersService";

export default function SidebarContainer(): React.ReactNode {
    const {data, isLoading, error} = useFetchAllUsersQuery({
        skip: 0,
        limit: 10,
    })

    return (
        <>
            <Sidebar users={[]}/>
        </>
    )
}