import {UsersPage} from "@/components/UsersPage/index";
import React, {useState} from "react";
import {GetUsersRequest} from "@/services/requests";
import {useFetchAllUsersQuery} from "@/services/UsersService";

export default function UsersPageContainer(): React.ReactNode {
    const [request, setRequest] = useState<GetUsersRequest>({
        limit: 4,
        skip: 0
    })
    const {data: users, error, isLoading} = useFetchAllUsersQuery(request)

    return (
        <UsersPage
            isLoading={isLoading}
            error={error && 'Error'}
            users={users}
            addUsersCallback={() => setRequest({...request, limit: request.limit && request.limit + 3})}
        />
    )
}