'use client'

import React from "react";
import DialogsList from "@/components/MessagesPage/DialogsList/DialogsList";
import {useFetchAllUsersQuery} from "@/services/UsersService";

export default function DialogsListContainer(): React.ReactNode {
    const {
        data,
        isLoading,
        error
    } = useFetchAllUsersQuery({
        skip: 0,
        limit: 15,
    })

    return (
        <>
            {data && <DialogsList users={data.users} />}
        </>
    )
}