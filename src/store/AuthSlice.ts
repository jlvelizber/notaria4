import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AuthTokenDataInterface } from '../interfaces'

const initialState: AuthTokenDataInterface = {
    status: 'not-authenticated',
    token: {
        plainTextToken: '',
    },
}

const authSlice = createSlice({
    name: 'authSlice',
    initialState: initialState,
    reducers: {
        onChecking(state) {
            state.status = 'checking'
        },
        onLogin(state, { payload }: PayloadAction<string>) {
            state.token.plainTextToken = payload
            state.status = 'authenticated'
        },
        onLogout(state) {
            state.token.plainTextToken = ''
            state.status = 'not-authenticated'
        },
    },
})

export const { onChecking, onLogin, onLogout } = authSlice.actions

export default authSlice.reducer
