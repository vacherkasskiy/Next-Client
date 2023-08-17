'use client'

import React from "react";
import {useFetchAllUsersQuery} from "@/services/UsersService";

function Users(): React.ReactNode {
    const {data: users, error, isLoading} = useFetchAllUsersQuery(5)


    return (
        <div>
            {isLoading && <h1>Loading ...</h1>}
            {error && <h1>Error</h1>}
            {users && users.map(x => JSON.stringify(x))}
        </div>
    )
}

export default Users