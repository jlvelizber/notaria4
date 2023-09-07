import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AuthTokenDataInterface, ErrorMessagesRegisterUserInterface } from '../interfaces'

const initialState: AuthTokenDataInterface = {
    status: 'not-authenticated',
    token: {
        plainTextToken: '',
    },
    errorsMessage: {
        message: '',
        errors: {
            first_last_name: '',
            identification_num: '',
            identification_type: '',
            midle_name: '',
            name: '',
            password: '',
            second_last_name: '',
            email: '',
        },
    }
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
        onSetErrors(state, { payload }: PayloadAction<ErrorMessagesRegisterUserInterface>) {
            state.errorsMessage = payload
        }
    },
})

export const { onChecking, onLogin, onLogout, onSetErrors } = authSlice.actions

export default authSlice.reducer
