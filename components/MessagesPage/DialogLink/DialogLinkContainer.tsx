import React from "react";
import {User} from "@/models";
import {useFetchLatestMessageQuery} from "@/shared/api/MessagesAPI";
import DialogLink from "@/components/MessagesPage/DialogLink/DialogLink";

interface DialogLinkContainerProps {
    user: User
}

export default function DialogLinkContainer({user}: DialogLinkContainerProps): React.ReactNode {
    const {
        data: message,
        isLoading,
        error
    } = useFetchLatestMessageQuery(user.id)
    
    return (
        <>
            {error && 'error'}
            {!isLoading && <DialogLink
                user={user}
                latestMessage={message}
            />}
        </>
    )
}