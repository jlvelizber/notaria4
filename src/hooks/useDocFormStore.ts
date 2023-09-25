import { AxiosResponse } from 'axios'
import { FormDocInterface } from '../interfaces'
import { AuthApi } from '../api'
import { useDispatch, useSelector } from 'react-redux'
import {
    RootState,
    onLoadingDependency,
    setActiveFormDoc,
    setMyFormDocs,
} from '../store'

export const useDocFormStore = () => {
    const dispatch = useDispatch()
    const { docForms } = useSelector((state: RootState) => state.docs)

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
        let foundItem = false

        if (docForms.length > 0) {
            const found = docForms.find(
                (doc: FormDocInterface) => doc.code_name === code
            )
            if (found) {
                dispatch(setActiveFormDoc(found))
                dispatch(onLoadingDependency(false))
                foundItem = true
            }
        }

        if (!foundItem) {
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
    }

    return {
        getListDocs,
        getDocByCode,
    }
}
