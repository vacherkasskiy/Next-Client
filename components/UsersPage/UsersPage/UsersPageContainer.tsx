'use client'

import UsersPage from "./UsersPage";
import React, {useState} from "react";
import {GetUsersRequest} from "@/services/requests";
import {useFetchAllUsersQuery} from "@/services/UsersService";
import {ErrorPage, Preloader} from "@/components/ui";

export default function UsersPageContainer(): React.ReactNode {
    const [request, setRequest] = useState<GetUsersRequest>({
        limit: 4,
        skip: 0
    })
    const {data, error, isLoading} = useFetchAllUsersQuery(request)

    const addUsersCallback = () => {
        setRequest({
            ...request,
            limit: request.limit && request.limit + 3
        })
    }

    return (
        <>
            {isLoading && <Preloader />}
            {error && <ErrorPage message={'Something went wrong'} />}
            {data && <UsersPage
                users={data.users}
                usersLength={data.length}
                addUsersCallback={addUsersCallback}
            />}
        </>
    )
}