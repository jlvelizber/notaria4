import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AuthTokenInterface } from '../interfaces'

const initialState: AuthTokenInterface = {
    status: 'not-authenticated',
    plainTextToken: '',
}

const authSlice = createSlice({
    name: 'authSlice',
    initialState: initialState,
    reducers: {
        onChecking(state) {
            state.status = 'checking'
        },
        onLogin(state, { payload }: PayloadAction<string>) {
            state.plainTextToken = payload
            state.status = "authenticated"
        },
        onLogout(state) {
            state.plainTextToken = ''
            state.status = 'not-authenticated'
        },
    },
})

export const { onChecking, onLogin, onLogout } = authSlice.actions

export default authSlice.reducer;
