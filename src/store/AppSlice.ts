import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const appSlice = createSlice({
    name: 'appSlice',
    initialState: {
        isLoading: false,
    },
    reducers: {
        onLoadingDependency(state, { payload }: PayloadAction<boolean>) {
            state.isLoading = payload
        },
    },
})

export const { onLoadingDependency } = appSlice.actions

export default appSlice.reducer
