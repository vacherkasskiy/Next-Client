import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {LoginRequest, RegisterRequest} from "@/shared/api/requests";
import {User} from "@/models";

export const authAPI = createApi({
    reducerPath: 'authAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://localhost:7024'}),
    endpoints: (build) => ({
        register: build.mutation<void, RegisterRequest>({
            query: (request: RegisterRequest) => ({
                url: '/auth/register',
                method: 'POST',
                body: request,
                credentials: 'include',
            }),
        }),
        login: build.mutation<void, LoginRequest>({
            query: (request: LoginRequest) => ({
                url: '/auth/login',
                method: 'POST',
                body: request,
                credentials: 'include',
            }),
        }),
        getCurrent: build.query<User, void>({
            query: () => ({
                url: '/auth/get_current',
                credentials: 'include',
            }),
        }),
    })
})

export const {
    useRegisterMutation,
    useLoginMutation,
    useGetCurrentQuery,
} = authAPI