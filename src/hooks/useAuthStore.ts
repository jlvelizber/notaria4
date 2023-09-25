import { useSelector, useDispatch } from 'react-redux'
import {
    RootState,
    onChecking,
    onLoadingDependency,
    onLogin,
    onLogout,
    onSetErrors,
    onSetFieldsFormValues,
    onSetUserData,
} from '../store'

import { AxiosError, AxiosResponse } from 'axios'
import { AuthApi } from '../api'
import { AuthTokenDataInterface, RegisterUserInterface } from '../interfaces'


export const useAuthStore = () => {
    const { status, errors } = useSelector((state: RootState) => state.auth)
    
    const dispatch = useDispatch()

    const startLogin = async (payload: RegisterUserInterface) => {
        try {
            dispatch(onLoadingDependency(true))
            dispatch(onChecking())
            const { data }: AxiosResponse<AuthTokenDataInterface> =
                await AuthApi.post('/login', { ...payload })

            localStorage.setItem('token', data?.token?.plainTextToken as string)
            localStorage.setItem(
                'token-init-time',
                new Date().getTime().toString()
            )
            await getUserData()
            dispatch(onLoadingDependency(false))
            dispatch(onLogin(data?.token?.plainTextToken))
            return true
        } catch (error) {
            if (error instanceof AxiosError) {
                if (error.response?.status === 422) {
                    dispatch(onSetErrors(error.response?.data))
                }
            }
            // se setea los valores ingresados

            const payloadCopy = {
                ...payload,
                password: '',
            }
            dispatch(onSetFieldsFormValues(payloadCopy)) // Solo si regresa se le envia los valores ingresados
            dispatch(onLogout())
            dispatch(onLoadingDependency(false))
            return false
        }
    }

    const startRegister = async (payload: RegisterUserInterface) => {
        try {
            dispatch(onChecking())
            dispatch(onLoadingDependency(true))
            const { data }: AxiosResponse<AuthTokenDataInterface> =
                await AuthApi.post('register', {
                    ...payload,
                })

            localStorage.setItem('token', data?.token?.plainTextToken as string)
            localStorage.setItem(
                'token-init-time',
                new Date().getTime().toString()
            )
            await getUserData()
            dispatch(onLogin(data?.token?.plainTextToken))
            return true
        } catch (error) {
            if (error instanceof AxiosError) {
                if (error.response?.status === 422) {
                    dispatch(onSetErrors(error.response?.data))
                }
            }
            // se setea los valores ingresados
            const payloadCopy = {
                ...payload,
                password: '',
                password_confirmation: '',
            }
            dispatch(onSetFieldsFormValues(payloadCopy)) // Solo si regresa se le envia los valores ingresados
            dispatch(onLogout())
            dispatch(onLoadingDependency(false))
            return false
        }
    }

    const checkAuthToken = async () => {
        const token: string | null = localStorage.getItem('token')
        if (!token) return dispatch(onLogout())

        dispatch(onChecking())
        

        try {
            await getUserData()
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

    const getUserData = async () => {
        // if (status !== 'authenticated') return
        const { data }: AxiosResponse<RegisterUserInterface> =
            await AuthApi.get('user')

        dispatch(onSetUserData(data))
       
    }

    return {
        status,
        errors,
        startLogin,
        startRegister,
        checkAuthToken,
        startLogout,
    }
}
