'use client'

import React, {useState} from "react";
import UserStatus from "./UserStatus";
import {useSetUserStatusMutation} from "@/shared/api/UsersAPI";

interface UserStatusContainerProps {
    status: string,
    userId: number
}

interface UserStatusContainerState {
    isEditModeOn: boolean,
    status: string,
}

export default function UserStatusContainer({status, userId}: UserStatusContainerProps): React.ReactNode {
    const [setUserStatus, {error, isLoading}] = useSetUserStatusMutation()
    const [state, setState] = useState<UserStatusContainerState>({
        isEditModeOn: false,
        status: status
    })

    const handleOnBlur = (status: string) => {
        if (!status || status == '') {
            return;
        }
        setState({
            isEditModeOn: false,
            status: status,
        })
        setUserStatus({
            status: status,
            userId: userId,
        })
    }

    const handleOnFocus = () => {
        setState({
            ...state,
            isEditModeOn: true,
        })
    }

    return (
        <UserStatus
            isEditModeOn={state.isEditModeOn}
            status={state.status}
            onFocusCallback={handleOnFocus}
            onBlurCallback={handleOnBlur}
        />
    )
}