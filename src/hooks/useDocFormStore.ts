import { AxiosResponse } from 'axios'
import { FormDocInterface } from '../interfaces'
import { AuthApi } from '../api'
import { useDispatch } from 'react-redux'
import { onLoadingDependency, setActiveFormDoc, setMyFormDocs } from '../store'

export const useDocFormStore = () => {
    const dispatch = useDispatch()

    const getListDocs = async (categoryType: string) => {
        dispatch(onLoadingDependency(true))
        try {
            const { data }: AxiosResponse<FormDocInterface[]> =
            await AuthApi.get(`/tipos-documentos/${categoryType}`)
            dispatch(setMyFormDocs(data))
            dispatch(onLoadingDependency(false))
        } catch (error) {
            dispatch(onLoadingDependency(false))
            console.log(error)
        }
    }


    const getDocByCode = async (code: string) => {
        dispatch(onLoadingDependency(true))
        
        try {
            const { data }: AxiosResponse<FormDocInterface> =
            await AuthApi.get(`/get-documento/${code}`)
            dispatch(setActiveFormDoc(data))
            dispatch(onLoadingDependency(false))
        } catch (error) {
            dispatch(onLoadingDependency(false))
            console.log(error)
        }

    }

    return {
        getListDocs,
        getDocByCode
    }
}
