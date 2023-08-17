import {createSlice,PayloadAction} from '@reduxjs/toolkit'
import {fetchUsers} from "@/store/reducers/ActionCreators";

interface UsersState {
    users: any[]
    isLoading: boolean
    error: string | null
}

const initialState: UsersState = {
    users: [],
    isLoading: false,
    error: null,
}

const UsersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
})

export default UsersSlice