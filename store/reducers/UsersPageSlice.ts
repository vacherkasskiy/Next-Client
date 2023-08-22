import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {User} from "@/models";

interface UsersState {
    users: User[]
    isLoading: boolean
    error: string | null
}

const initialState: UsersState = {
    users: [],
    isLoading: false,
    error: null,
}

const usersPageSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
})

export default usersPageSlice