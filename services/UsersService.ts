import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {User} from "@/models";

export const usersAPI = createApi({
    reducerPath: 'usersAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com'}),
    tagTypes: ['Users'],
    endpoints: (build) => ({
        fetchAllUsers: build.query<any[], number>({
            query: (limit: number = 5) => ({
                url: '/users',
                params: {
                    _limit: limit
                },
            }),
            providesTags: result => ['Users'],
        }),
        addUser: build.mutation<User, User>({
            query: (user: User) => ({
                url: '/users/add',
                method: 'POST',
                body: user,
            }),
            invalidatesTags: ['Users'],
        }),
    })
})

export const { useFetchAllUsersQuery, useAddUserMutation } = usersAPI