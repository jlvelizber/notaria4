import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { RootState, onChecking, onLogin, onLogout } from '../store'

import { AxiosResponse } from 'axios'
import { AuthApi } from '../api'
import { AuthTokenInterface, RegisterUserInterface } from '../interfaces'

export const useAuthStore = () => {
    const { status } = useSelector((state: RootState) => state.auth)

    const dispatch = useDispatch()

    const startLogin = async (payload: Partial<RegisterUserInterface>) => {
        dispatch(onChecking())
        try {
            const { data }: AxiosResponse<AuthTokenInterface> =
                await AuthApi.post('/auth', { ...payload })

            localStorage.setItem('token', data?.plainTextToken as string)
            localStorage.setItem(
                'token-init-time',
                new Date().getTime().toString()
            )

            dispatch(onLogin(data.plainTextToken));
        } catch (error) {
            dispatch(onLogout())
            console.log(error)
        }
    }

    const startRegister = async (payload: Partial<RegisterUserInterface>) => {
        dispatch(onChecking())
        try {
            const { data }: AxiosResponse<AuthTokenInterface> =
                await AuthApi.post('register', {
                    ...payload,
                })

            localStorage.setItem('token', data?.plainTextToken as string)
            // localStorage.setItem("token-init-time", new Date().getTime().toString());

            dispatch(onLogin(""));
        } catch (error: any) {
            console.log(error.response.data)
            dispatch(onLogout())
        }
    }

    const checkAuthToken = async () => {
        const token: string | null = localStorage.getItem('token')
        if (!token) return dispatch(onLogout())

        try {
            const { data } = await AuthApi.post('auth/renew')
            localStorage.setItem('token', data.token)
            localStorage.setItem(
                'token-init-time',
                new Date().getTime().toString()
            )

            // dispatch(onLogin(data));
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
        // errorMessage,
        // user,
        startLogin,
        startRegister,
        checkAuthToken,
        startLogout,
    }
}
