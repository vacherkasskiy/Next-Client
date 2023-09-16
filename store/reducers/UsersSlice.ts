import {User} from "@/models";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface UsersState {
    step: number
    limit: number
    skip: number
    users: User[]
}

const initialState: UsersState = {
    step: 5,
    limit: 5,
    skip: 0,
    users: []
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers(state, action: PayloadAction<User[]>) {
            state.users = action.payload
        },
        addUsers(state, action: PayloadAction<User[]>) {
            state.users = state.users.concat(action.payload)
        },
        increaseSkip(state, action: PayloadAction<number>) {
            state.skip += action.payload
        },
    }
})

export const {
    setUsers,
    addUsers,
    increaseSkip,
} = usersSlice.actions

export default usersSlice