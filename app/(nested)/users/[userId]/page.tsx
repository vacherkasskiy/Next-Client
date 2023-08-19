'use client'

import React from "react";
import {useParams} from "next/navigation";

export default function UserProfilePage(): React.ReactNode {
    const params = useParams()
    const {userId} = params

    return (
        <div>
            {userId}
        </div>
    );
}