'use client'

import React from "react";
import {useGetCurrentQuery} from "@/shared/api/AuthAPI";
import { redirect } from 'next/navigation';
import {useAppDispatch} from "@/shared/hooks/redux";
import {setCurrentUser} from "@/store/reducers/UserSlice";

interface IsAuthorizedProps {
    children: React.ReactNode
}

export default function IsAuthorized({children}: IsAuthorizedProps): React.ReactNode {
    const {data: currentUser, isLoading} = useGetCurrentQuery()
    const dispatch = useAppDispatch()

    if (!isLoading) {
        if (!currentUser) {
            redirect('/login')
        }
        else {
            dispatch(setCurrentUser(currentUser))
            return children
        }
    }

    return children
}