import { useSelector, useDispatch } from 'react-redux'
import { RootState, onChecking, onLogin, onLogout } from '../store'

import { AxiosError, AxiosResponse } from 'axios'
import { AuthApi } from '../api'
import {
    AuthTokenDataInterface,
    ErrorMessagesRegisterUserInterface,
    RegisterUserInterface,
} from '../interfaces'
import { useState } from 'react'

const initialState: ErrorMessagesRegisterUserInterface = {
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

export const useAuthStore = () => {
    const [errorMessage, setErrorMessage] =
        useState<ErrorMessagesRegisterUserInterface>(initialState)

    const { status } = useSelector((state: RootState) => state.auth)

    const dispatch = useDispatch()

    const initSanctumCookie = async () => {
        try {
            const result = await AuthApi.get('/sanctum/csrf-cookie', {
                baseURL: 'http://notariaadmin.test/',
            })

            console.log(result)
        } catch (error) {
            if (error instanceof AxiosError) {
                console.error(error)
            }
        }
    }

    const startLogin = async (payload: Partial<RegisterUserInterface>) => {
        dispatch(onChecking())
        try {
            const { data }: AxiosResponse<AuthTokenDataInterface> =
                await AuthApi.post('/login', { ...payload })

            console.log(data)

            localStorage.setItem('token', data?.token?.plainTextToken as string)
            localStorage.setItem(
                'token-init-time',
                new Date().getTime().toString()
            )

            dispatch(onLogin(data?.token?.plainTextToken))
        } catch (error) {
            if (error instanceof AxiosError) {
                if (error.response?.status === 422) {
                    console.log(error.response?.data)
                    setErrorMessage(error.response?.data)
                }
            }
            dispatch(onLogout())
        }
    }

    const startRegister = async (payload: Partial<RegisterUserInterface>) => {
        dispatch(onChecking())
        try {
            const { data }: AxiosResponse<AuthTokenDataInterface> =
                await AuthApi.post('register', {
                    ...payload,
                })

            localStorage.setItem('token', data?.token?.plainTextToken as string)
            localStorage.setItem(
                'token-init-time',
                new Date().getTime().toString()
            )

            dispatch(onLogin(data?.token?.plainTextToken))
            // resetea los mesajes de eeror
            setErrorMessage(initialState)
        } catch (error) {
            if (error instanceof AxiosError) {
                if (error.response?.status === 422) {
                    console.log(error.response?.data)
                    setErrorMessage(error.response?.data)
                }
            }
            dispatch(onLogout())
        }
    }

    const checkAuthToken = async () => {
        const token: string | null = localStorage.getItem('token')
        if (!token) return dispatch(onLogout())

        dispatch(onChecking())

        try {
            // const { data } = await AuthApi.post('auth/renew')
            // localStorage.setItem('token', data.token)
            // localStorage.setItem(
            //     'token-init-time',
            //     new Date().getTime().toString()
            // )

            dispatch(onLogin(token));
        } catch (error) {
            localStorage.clear()
            return dispatch(onLogout())
        }
    }

    const startLogout = () => {
        localStorage.clear()
        dispatch(onLogout())
    }

    return {
        status,
        errorMessage,
        // user,
        startLogin,
        startRegister,
        checkAuthToken,
        startLogout,
        initSanctumCookie,
    }
}
