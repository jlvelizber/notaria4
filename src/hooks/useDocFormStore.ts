import { AxiosError, AxiosResponse } from 'axios'
import {
    FieldDataInterface,
    FormDocInterface,
    MyRequestsInterface,
} from '../interfaces'
import { AuthApi } from '../api'
import { useDispatch, useSelector } from 'react-redux'
import {
    RootState,
    onLoadingDependency,
    onSetMyRequestsForm,
    setActiveFormDoc,
    setMyFormDocs,
} from '../store'
import { onSetErrorsForm } from '../store'

export const useDocFormStore = () => {
    const dispatch = useDispatch()
    const { docForms, errors, myRequests } = useSelector(
        (state: RootState) => state.docs
    )
    const {
        user: { id },
    } = useSelector((state: RootState) => state.auth)

    const getListDocs = async (categoryType: string) => {
        dispatch(onLoadingDependency(true))
        try {
            const { data }: AxiosResponse<FormDocInterface[]> =
                await AuthApi.get(`/tipos-documentos/${categoryType}`)
            dispatch(setMyFormDocs(data))
            dispatch(onLoadingDependency(false))
        } catch (error) {
            dispatch(onLoadingDependency(false))
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
                if (error instanceof AxiosError) {
                    if (error.response?.status === 422) {
                        dispatch(onSetErrorsForm(error.response?.data.message))
                    }
                }
            }
        }
    }

    const saveRequestFormDoc = async (
        dataForm: FieldDataInterface
    ) => {
        dispatch(onLoadingDependency(true))
        try {
            // const payload = {
            //     // dataForm: JSON.stringify(dataForm),
            //     ...dataForm
            // }

            dispatch(onSetErrorsForm(''))

            const { data }: AxiosResponse<FormDocInterface> =
                await AuthApi.post(`/save-request`, dataForm, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    }
                })
            dispatch(onLoadingDependency(false))
            return data
        } catch (error) {
            dispatch(onLoadingDependency(false))
            if (error instanceof AxiosError) {
                if (error.response?.status === 422) {
                    dispatch(onSetErrorsForm(error.response?.data.message))
                }
            }
        }
    }

    const getListMyDocFormRequests = async () => {
        try {
            dispatch(onLoadingDependency(true))
            const { data }: AxiosResponse<MyRequestsInterface[]> =
                await AuthApi.get(`/mis-solicitudes`)

            dispatch(onSetMyRequestsForm(data))
            dispatch(onLoadingDependency(false))
        } catch (error) {
            dispatch(onLoadingDependency(false))
            if (error instanceof AxiosError) {
                if (error.response?.status === 422) {
                    dispatch(onSetErrorsForm(error.response?.data.message))
                }
            }
        }
    }

    return {
        getListDocs,
        getDocByCode,
        saveRequestFormDoc,
        getListMyDocFormRequests,
        myRequests,
        errors,
    }
}
