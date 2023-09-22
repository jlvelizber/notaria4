import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FormDocInterface, FormDocSliceInterface } from '../interfaces'

const initialState: FormDocSliceInterface = {
    docForms: [],
    activeDoc: null,
    isLoadingDocs: true,
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
    },
})

export const { setMyFormDocs, setActiveFormDoc, setIsLoadingFormDoc } = formDocsSlice.actions

export default formDocsSlice.reducer
