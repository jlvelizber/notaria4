import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const requestSlice = createSlice({
    name: 'requestSlice',
    initialState: {

    },
    reducers: {
        listMyRequest( state, {payload} : PayloadAction<string>  )
    }
})

export const {
listMyRequest
} = requestSlice.actions

export default requestSlice.reducer