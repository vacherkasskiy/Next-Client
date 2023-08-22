import React from "react";
import {UsersPageContainer} from "@/components/UsersPage";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Users page',
    description: 'View all users',
}

function Users(): React.ReactNode {
    return (
        <UsersPageContainer />
    )
}

export default Users