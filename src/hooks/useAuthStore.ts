import { useSelector, useDispatch } from 'react-redux'
import { RootState, onChecking, onLogin, onLogout, onSetErrors } from '../store'

import { AxiosError, AxiosResponse } from 'axios'
import { AuthApi } from '../api'
import {
    AuthTokenDataInterface,
    RegisterUserInterface,
} from '../interfaces'


export const useAuthStore = () => {

    const { status, errorsMessage } = useSelector((state: RootState) => state.auth)

    const dispatch = useDispatch()

    const startLogin = async (payload: Partial<RegisterUserInterface>) => {
        dispatch(onChecking())
        try {
            const { data }: AxiosResponse<AuthTokenDataInterface> =
                await AuthApi.post('/login', { ...payload })

            localStorage.setItem('token', data?.token?.plainTextToken as string)
            localStorage.setItem(
                'token-init-time',
                new Date().getTime().toString()
            )

            dispatch(onLogin(data?.token?.plainTextToken))
        } catch (error) {
            if (error instanceof AxiosError) {
                if (error.response?.status === 422) {
                    dispatch(onSetErrors(error.response?.data))
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
            // setErrorMessage(initialState)
        } catch (error) {
            if (error instanceof AxiosError) {
                if (error.response?.status === 422) {
                    dispatch(onSetErrors(error.response?.data))
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

            dispatch(onLogin(token))
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
        errorsMessage,
        // user,
        startLogin,
        startRegister,
        checkAuthToken,
        startLogout,
    }
}
