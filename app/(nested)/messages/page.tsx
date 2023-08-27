import React from "react";
import {Metadata} from "next";
import {EmptyDialog} from "@/components/MessagesPage";

export const metadata: Metadata = {
    title: 'Messages page',
    description: 'Read and send messages to your friends'
}

export default function EmptyDialogPage(): React.ReactNode {
    return (
        <EmptyDialog />
    )
}