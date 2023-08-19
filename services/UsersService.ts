import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {User} from "@/models";
import {GetUsersRequest} from "@/services/requests";

export const usersAPI = createApi({
    reducerPath: 'usersAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://localhost:7024'}),
    tagTypes: ['Users'],
    endpoints: (build) => ({
        fetchAllUsers: build.query<User[], GetUsersRequest>({
            query: (request: GetUsersRequest) => ({
                url: '/users',
                params: {
                    limit: request.limit,
                    skip: request.skip,
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