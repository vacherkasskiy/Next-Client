import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Message} from "@/models";

export const messagesAPI = createApi({
    reducerPath: 'messagesAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com'}),
    endpoints: (build) => ({
        fetchAllMessages: build.query<Message[], number>({
            query: (limit: number = 5) => ({
                url: '/comments',
                params: {
                    _limit: limit
                },
            })
        })
    })
})

export const { useFetchAllMessagesQuery } = messagesAPI