import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {messagesAPI} from "@/api/MessagesAPI";
import {usersAPI} from "@/api/UsersAPI";
import {postsAPI} from "@/api/PostsAPI";
import {userSlice} from '@/store/reducers'

const rootReducer = combineReducers({
    user: userSlice.reducer,
    [messagesAPI.reducerPath]: messagesAPI.reducer,
    [usersAPI.reducerPath]: usersAPI.reducer,
    [postsAPI.reducerPath]: postsAPI.reducer,
})

const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(
                messagesAPI.middleware,
                usersAPI.middleware,
                postsAPI.middleware)
    })
}

// для типизирования useSelector, useDispatch
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

export default setupStore
