import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {messagesAPI} from "@/shared/api/MessagesAPI";
import {usersAPI} from "@/shared/api/UsersAPI";
import {postsAPI} from "@/shared/api/PostsAPI";
import {userSlice, usersSlice} from '@/store/reducers'
import {authAPI} from "@/shared/api/AuthAPI";

const rootReducer = combineReducers({
    user: userSlice.reducer,
    users: usersSlice.reducer,
    [messagesAPI.reducerPath]: messagesAPI.reducer,
    [usersAPI.reducerPath]: usersAPI.reducer,
    [postsAPI.reducerPath]: postsAPI.reducer,
    [authAPI.reducerPath]: authAPI.reducer,
})

const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(
                messagesAPI.middleware,
                usersAPI.middleware,
                postsAPI.middleware,
                authAPI.middleware)
    })
}

// для типизирования useSelector, useDispatch
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

export default setupStore
