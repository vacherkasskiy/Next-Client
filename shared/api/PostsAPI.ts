import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {Post} from "@/models";
import {AddPostRequest} from "@/shared/api/requests";

export const postsAPI = createApi({
    reducerPath: 'postsAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://localhost:7024'}),
    tagTypes: ['Posts'],
    endpoints: (build) => ({
        fetchUserPosts: build.query<Post[], number>({
            query: (userId: number) => ({
                url: '/posts/get_for/' + userId,
                credentials: 'include',
            }),
            providesTags: ['Posts'],
        }),
        addPost: build.mutation<void, AddPostRequest>({
            query: (request: AddPostRequest) => ({
                url: '/posts/add',
                method: 'POST',
                body: request,
                credentials: 'include',
            }),
            invalidatesTags: ['Posts'],
        })
    }),
})

export const {
    useFetchUserPostsQuery,
    useAddPostMutation
} = postsAPI