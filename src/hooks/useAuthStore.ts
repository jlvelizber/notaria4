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
    onSuccessMessage,
} from '../store'

import { AxiosError, AxiosResponse } from 'axios'
import { AuthApi } from '../api'
import { AuthTokenDataInterface, RegisterUserInterface } from '../interfaces'
import { useNavigate } from 'react-router'

export const useAuthStore = () => {
    const { status, errors, successMessage } = useSelector(
        (state: RootState) => state.auth
    )

    const dispatch = useDispatch()

    const navigate = useNavigate()

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
            dispatch(onSuccessMessage(''))
            dispatch(onChecking())
            dispatch(onLoadingDependency(true))
            const { data }: AxiosResponse<AuthTokenDataInterface> =
                await AuthApi.post('register', {
                    ...payload,
                })

            dispatch(onSuccessMessage(data.successMessage))
            dispatch(onLoadingDependency(false))
            dispatch(onLogout())

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

    const updateUserData = async (payload: RegisterUserInterface) => {
        try {
            dispatch(onChecking())
            dispatch(onLoadingDependency(true))
            const { data }: AxiosResponse<AuthTokenDataInterface> =
                await AuthApi.put('user', {
                    ...payload,
                })

            await getUserData()
            dispatch(onLoadingDependency(false))
            dispatch(onLogin(data?.token?.plainTextToken))
            dispatch(onSuccessMessage('Perfil actualizado correctamente'))
            return true
        } catch (error) {
            dispatch(onSuccessMessage(''))
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
            // dispatch(onLogout())
            dispatch(onLoadingDependency(false))
            return false
        }
    }

    const verifyAccount = async (id: string, hash: string) => {
        dispatch(onLoadingDependency(true))
        try {
            const { data }: AxiosResponse<AuthTokenDataInterface> =
                await AuthApi.get(`email/verify/${id}/${hash}`)
            dispatch(onLoadingDependency(false))
            dispatch(onSuccessMessage(data.successMessage))
            navigate('/ingreso')
            return true
        } catch (error) {
            dispatch(onLoadingDependency(false))
            if (error instanceof AxiosError) {
                if (error.response?.status === 422) {
                    dispatch(onSetErrors(error.response?.data))
                }
            }
            return false
        }
    }

    return {
        status,
        errors,
        startLogin,
        startRegister,
        checkAuthToken,
        startLogout,
        updateUserData,
        successMessage,
        verifyAccount,
    }
}
