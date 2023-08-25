import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {User} from "@/models";

interface UsersState {
    user: User
}

const initialState: UsersState = {
    user: {
        id: 1,
        name: 'Vitaliy Cherkasskiy',
        username: 'SYKO',
        email: 'vitalik.cherkasskiy@gmail.com',
        website: 'github.com/vacherkasskiy',
        image: 'https://avatars.githubusercontent.com/u/90340909?v=4',
        status: undefined,
    }
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<User>) {
            state.user = action.payload
        },
    },
})

export default userSlice