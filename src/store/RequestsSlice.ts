import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const requestSlice = createSlice({
    name: 'requestSlice',
    initialState: {},
    reducers: {
        listMyRequest(state, { payload }: PayloadAction<string>) {
            state = payload
        },
    },
})

export const { listMyRequest } = requestSlice.actions

export default requestSlice.reducer
