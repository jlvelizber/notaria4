import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
    FormDocInterface,
    FormDocSliceInterface,
    MyRequestsInterface,
} from '../interfaces'

const initialState: FormDocSliceInterface = {
    docForms: [],
    activeDoc: null,
    isLoadingDocs: true,
    errors: {
        message: '',
    },
    myRequests: [],
}

const formDocsSlice = createSlice({
    name: 'formDocsSlice',
    initialState: initialState,
    reducers: {
        setMyFormDocs(state, { payload }: PayloadAction<FormDocInterface[]>) {
            state.docForms = payload
        },

        setActiveFormDoc(state, { payload }: PayloadAction<FormDocInterface>) {
            state.activeDoc = payload
        },
        setIsLoadingFormDoc(state, { payload }: PayloadAction<boolean>) {
            state.isLoadingDocs = payload
        },
        onSetErrorsForm(state, { payload }: PayloadAction<string>) {
            state.errors.message = payload
        },
        onSetMyRequestsForm(
            state,
            { payload }: PayloadAction<MyRequestsInterface[]>
        ) {
            state.myRequests = payload
        },
    },
})

export const {
    setMyFormDocs,
    setActiveFormDoc,
    setIsLoadingFormDoc,
    onSetErrorsForm,
    onSetMyRequestsForm,
} = formDocsSlice.actions

export default formDocsSlice.reducer
