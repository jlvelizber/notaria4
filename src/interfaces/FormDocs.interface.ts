export interface FormDocInterface {
    id: number
    name: string
    code_name: string;
    field_requests: string
    body: string
}


export interface FormDocSliceInterface {
    docForms : FormDocInterface[],
    activeDoc: FormDocInterface | null,
    isLoadingDocs: boolean
}


export type FormRequestDocPage = {
    codeForm?: string

}