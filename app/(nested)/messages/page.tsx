'use client'

import React from "react";
import {useFetchAllMessagesQuery} from "@/services/MessagesService";

const Users = () => {
    const {data: messages, isLoading, error} =
        useFetchAllMessagesQuery(5)

    return (
        <div>
            {isLoading && 'Loading...'}
            {error && 'Error occurred'}
            {messages && messages.map(x => (
                <p>{x.email}, {x.body}<br></br></p>
            ))}
        </div>)
}

export default Users