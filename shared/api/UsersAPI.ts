import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {User} from "@/models";
import {EditProfileRequest} from "@/shared/api/requests";
import {GetUsersResponse} from "@/shared/api/responses";
import {GetUsersRequest} from "@/shared/api/requests";

export const usersAPI = createApi({
    reducerPath: 'usersAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://localhost:7024'}),
    tagTypes: ['Users', 'User'],
    endpoints: (build) => ({
        fetchAllUsers: build.query<GetUsersResponse, GetUsersRequest>({
            query: (request: GetUsersRequest) => ({
                url: '/users',
                params: {
                    limit: request.limit,
                    skip: request.skip,
                },
                credentials: 'include',
            }),
            providesTags: ['Users'],
        }),
        fetchUser: build.query<User, number>({
           query: (userId: number) => ({
               url: '/users/' + userId,
               credentials: 'include',
           }),
           providesTags: ['User'] ,
        }),
        setUserStatus: build.mutation<void, string>({
            query: (status: string) => ({
                url: '/users/current/set_status',
                method: 'PATCH',
                params: {
                    status: status
                },
                credentials: 'include',
            }),
            invalidatesTags: ['User'],
        }),
        editProfile: build.mutation<void, EditProfileRequest>({
            query: (request: EditProfileRequest) => ({
                url: '/users/current/edit',
                method: 'PATCH',
                body: request,
                credentials: 'include',
            }),
            invalidatesTags: ['User'],
        }),
    })
})

export const {
    useFetchAllUsersQuery,
    useFetchUserQuery,
    useSetUserStatusMutation,
    useEditProfileMutation,
} = usersAPI