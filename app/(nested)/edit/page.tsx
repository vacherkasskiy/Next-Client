import React from "react";
import {EditProfilePageContainer} from "@/components/EditProfilePage";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Edit page',
    description: 'Edit any information about yourself'
}

export default function Edit(): React.ReactNode {
    return <EditProfilePageContainer />
}