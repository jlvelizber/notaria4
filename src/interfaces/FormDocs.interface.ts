export interface FormDocInterface {
    id: number
    name: string
    code_name: string
    field_requests: SectionDocFormField[]
    body: string
}

export interface SectionDocFormField {
    name?: string
    fields: DocFormField[]
}

export interface DocFormField {
    label: string
    type: string
    name: string
    options?: DocFormFieldOptions[]
    validations?: DocFormFieldValidator
}

export interface DocFormFieldOptions {
    value: string
    label: string
}

export interface DocFormFieldValidator {
    required?: boolean
}

export interface FormDocSliceInterface {
    docForms: FormDocInterface[]
    activeDoc: FormDocInterface | null
    isLoadingDocs: boolean
    errors: {
        message: string
    }
    myRequests: MyRequestsInterface[]
}

export type FormRequestDocPage = {
    codeForm?: string
}

export interface MyRequestsInterface {
    doc: string
    status: string
    status_code: number
}
