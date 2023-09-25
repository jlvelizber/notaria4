import { AxiosResponse } from 'axios'
import { CountryInterface } from '../interfaces'
import { AuthApi } from '../api'

export const useCollections = () => {
    const getListCountries = async () => {
        try {
            const { data }: AxiosResponse<CountryInterface[]> =
                await AuthApi.get(`/paises`)
            return data
        } catch (error) {
            console.log(error)
        }
    }

    return {
        getListCountries,
    }
}
