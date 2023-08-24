import {combineReducers, configureStore} from '@reduxjs/toolkit'
import usersPageSlice from "@/store/reducers/UsersPageSlice";
import {messagesAPI} from "@/services/MessagesService";
import {usersAPI} from "@/services/UsersService";
import {postsAPI} from "@/services/PostsService";

const rootReducer = combineReducers({
    // users: usersPageSlice.reducer,
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
