import {configureStore} from '@reduxjs/toolkit'
import authSlice from './AuthSlice'
import FormDocsSlice from './FormDocsSlice'
import AppSlice from './AppSlice'

export const store = configureStore({
    reducer: {
        app: AppSlice,
        auth: authSlice,
        docs: FormDocsSlice
    }
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

