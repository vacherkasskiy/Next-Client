import React from "react";
import {ProfilePageContainer} from "@/components/ProfilePage";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Profile page',
    description: 'View info about your\'s or other user\'s profile',
}

export default function UserProfilePage(): React.ReactNode {
    return (
        <ProfilePageContainer />
    );
}