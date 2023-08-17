import {combineReducers, configureStore} from '@reduxjs/toolkit'
import usersSlice from "@/store/reducers/UsersSlice";
import {messagesAPI} from "@/services/MessagesService";

const rootReducer = combineReducers({
    users: usersSlice.reducer,
    [messagesAPI.reducerPath]: messagesAPI.reducer,
})

const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(messagesAPI.middleware)
    })
}

// для типизирования useSelector, useDispatch
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

export default setupStore
