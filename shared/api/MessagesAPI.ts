import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {MessageModel} from "@/models";
import {AddMessageRequest} from "@/shared/api/requests";

export const messagesAPI = createApi({
    reducerPath: 'messagesAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://localhost:7024'}),
    tagTypes: ['Messages'],
    endpoints: (build) => ({
        fetchAllMessages: build.query<MessageModel[], number>({
            query: (userId: number) => ({
                url: '/messages/get_for/' + userId,
                credentials: 'include',
            }),
            providesTags: ['Messages'],
        }),
        fetchLatestMessage: build.query<MessageModel, number>({
            query: (userId: number) => ({
                url: '/messages/get_latest_for/' + userId,
                credentials: 'include',
            }),
            providesTags: ['Messages'],
        }),
        addMessage: build.mutation<void, AddMessageRequest>({
            query: (request: AddMessageRequest) => ({
                url: '/messages/add',
                method: 'POST',
                body: request,
                credentials: 'include',
            }),
            invalidatesTags: ['Messages'],
        })
    })
})

export const {
    useFetchAllMessagesQuery,
    useFetchLatestMessageQuery,
    useAddMessageMutation,
} = messagesAPI