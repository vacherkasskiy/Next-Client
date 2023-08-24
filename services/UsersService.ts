import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {User} from "@/models";
import {GetUsersRequest} from "@/services/requests";
import SetStatusRequest from "./requests/SetStatusRequest";

export const usersAPI = createApi({
    reducerPath: 'usersAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://localhost:7024'}),
    tagTypes: ['Users', 'User'],
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
        fetchUser: build.query<User, number>({
           query: (userId: number) => ({
               url: '/users/' + userId,
               params: {},
           }),
           providesTags: result => ['User'] ,
        }),
        setUserStatus: build.mutation<void, SetStatusRequest>({
            query: (request: SetStatusRequest) => ({
                url: '/users/set_status',
                method: 'PATCH',
                body: request,
            }),
            invalidatesTags: ['Users'],
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

export const {
    useFetchAllUsersQuery,
    useFetchUserQuery,
    useSetUserStatusMutation,
} = usersAPI