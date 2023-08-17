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
    extraReducers: {
        [fetchUsers.pending.type]: (state) => {
            state.isLoading = true
        },
        [fetchUsers.fulfilled.type]: (state, action: PayloadAction<any[]>) => {
            state.isLoading = false
            state.error = null
            state.users = action.payload
        },
        [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
        },
    },
})

export default UsersSlice