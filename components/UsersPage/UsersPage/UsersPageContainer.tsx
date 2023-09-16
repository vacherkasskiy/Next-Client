'use client'

import UsersPage from "./UsersPage";
import React, {useEffect} from "react";
import {GetUsersRequest} from "@/shared/api/requests";
import {useFetchAllUsersQuery} from "@/shared/api/UsersAPI";
import {ErrorPage, Preloader} from "@/components/ui";
import {useAppDispatch, useAppSelector} from "@/shared/hooks/redux";
import {addUsers, increaseSkip, setUsers} from "@/store/reducers/UsersSlice";

export default function UsersPageContainer(): React.ReactNode {
    const dispatch = useAppDispatch()
    const step = useAppSelector(state => state.users.step)
    const request: GetUsersRequest = {
        limit: useAppSelector(state => state.users.limit),
        skip: useAppSelector(state => state.users.skip)
    }

    const users = useAppSelector(state => state.users.users)
    const {
        data,
        error,
        isLoading,
        // isFetching,
    } = useFetchAllUsersQuery(request)

    useEffect(() => {
        if (data && request.skip == 0) dispatch(setUsers(data.users))
        else if (data) dispatch(addUsers(data.users))
    }, [data, data && data.users])

    const addUsersCallback = () => {
        dispatch(increaseSkip(step))
    }

    return (
        <>
            {isLoading && <Preloader />}
            {(!isLoading && error) && <ErrorPage message={'Something went wrong'} />}
            {(users && data) && <UsersPage
                users={users}
                usersLength={data.length}
                addUsersCallback={addUsersCallback}
            />}
        </>
    )
}