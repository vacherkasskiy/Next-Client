'use client'

import React from "react";
import DialogsList from "@/components/MessagesPage/DialogsList/DialogsList";
import {useFetchAllUsersQuery} from "@/shared/api/UsersAPI";
import DialogsListMock from "@/components/MessagesPage/DialogsList/DialogsListMock";

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
            {(isLoading || error) && <DialogsListMock />}
            {data && <DialogsList users={data.users} />}
        </>
    )
}