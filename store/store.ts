import {combineReducers, configureStore} from '@reduxjs/toolkit'
import usersPageSlice from "@/store/reducers/UsersPageSlice";
import {messagesAPI} from "@/services/MessagesService";
import {usersAPI} from "@/services/UsersService";

const rootReducer = combineReducers({
    // users: usersPageSlice.reducer,
    [messagesAPI.reducerPath]: messagesAPI.reducer,
    [usersAPI.reducerPath]: usersAPI.reducer,
})

const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(
                messagesAPI.middleware,
                usersAPI.middleware)
    })
}

// для типизирования useSelector, useDispatch
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

export default setupStore
