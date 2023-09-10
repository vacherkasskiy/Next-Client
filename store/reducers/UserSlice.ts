import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {User} from "@/models";

interface UsersState {
    currentUser?: User
}

const initialState: UsersState = {
    currentUser: undefined
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCurrentUser(state, action: PayloadAction<User>) {
            state.currentUser = action.payload
        },
    },
})

export const {
    setCurrentUser,
} = userSlice.actions

export default userSlice