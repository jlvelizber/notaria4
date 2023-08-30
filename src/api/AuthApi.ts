import axios, { InternalAxiosRequestConfig } from 'axios'
import { getEnvVariables } from '../hooks'
const { VITE_API_URL } = getEnvVariables()

export const AuthApi = axios.create({
    baseURL: VITE_API_URL,
})





