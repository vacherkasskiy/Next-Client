import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const usersAPI = createApi({
    reducerPath: 'usersAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com'}),
    endpoints: (build) => ({
        fetchAllUsers: build.query<any[], number>({
            query: (limit: number = 5) => ({
                url: '/users',
                params: {
                    _limit: limit
                },
            })
        })
    })
})

export const { useFetchAllUsersQuery } = usersAPI