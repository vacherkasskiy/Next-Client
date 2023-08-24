import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {Post} from "@/models";

export const postsAPI = createApi({
    reducerPath: 'postsAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://localhost:7024'}),
    tagTypes: ['Posts'],
    endpoints: (build) => ({
        fetchUserPosts: build.query<Post[], number>({
            query: (userId: number) => ({
                url: '/posts/get_for/' + userId,
            }),
            providesTags: result => ['Posts'],
        }),
    }),
})

export const {useFetchUserPostsQuery} = postsAPI