import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
    AuthTokenDataInterface,
    ErrorMessagesRegisterUserInterface,
    RegisterUserInterface,
} from '../interfaces'

const initialState: AuthTokenDataInterface = {
    status: 'checking',
    token: {
        plainTextToken: '',
    },
    user: {
        first_last_name: '',
        identification_num: '',
        identification_type: '',
        midle_name: '',
        name: '',
        password: '',
        second_last_name: '',
        email: '',
    },
    errors: {
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
        fieldValues: {
            first_last_name: '',
            identification_num: '',
            identification_type: '',
            midle_name: '',
            name: '',
            second_last_name: '',
            email: '',
            password: '',
            password_confirmation: '',
        },
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
            state.errors = {
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
                fieldValues: {
                    first_last_name: '',
                    identification_num: '',
                    identification_type: '',
                    midle_name: '',
                    name: '',
                    second_last_name: '',
                    email: '',
                    password: '',
                    password_confirmation: '',
                },
            }
        },
        onLogout(state) {
            state.token.plainTextToken = ''
            state.status = 'not-authenticated'
            localStorage.clear()
        },
        onSetErrors(
            state,
            { payload }: PayloadAction<ErrorMessagesRegisterUserInterface>
        ) {
            state.errors = payload
        },
        onSetFieldsFormValues(
            state,
            { payload }: PayloadAction<RegisterUserInterface>
        ) {
            state.errors.fieldValues = payload
        },
        onSetUserData(
            state,
            { payload }: PayloadAction<RegisterUserInterface>
        ) {
            state.user = payload
        },
    },
})

export const {
    onChecking,
    onLogin,
    onLogout,
    onSetErrors,
    onSetFieldsFormValues,
    onSetUserData,
} = authSlice.actions

export default authSlice.reducer
