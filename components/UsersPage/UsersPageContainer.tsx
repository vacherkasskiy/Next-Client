'use client'

import {UsersPage} from "@/components/UsersPage/index";
import React, {useState} from "react";
import {GetUsersRequest} from "@/services/requests";
import {useFetchAllUsersQuery} from "@/services/UsersService";
import {Preloader} from "@/components/ui";

export default function UsersPageContainer(): React.ReactNode {
    const [request, setRequest] = useState<GetUsersRequest>({
        limit: 4,
        skip: 0
    })
    const {data: users, error, isLoading} = useFetchAllUsersQuery(request)

    const addUsersCallback = () => {
        setRequest({
            ...request,
            limit: request.limit && request.limit + 3
        })
    }

    return (
        <>
            {isLoading && <Preloader />}
            {error && 'Error'}
            {users && <UsersPage
                users={users}
                addUsersCallback={addUsersCallback}
            />}
        </>
    )
}