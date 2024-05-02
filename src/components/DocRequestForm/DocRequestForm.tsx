import React, { FC, Key } from 'react'
import {
    DocFormField,
    FieldDataInterface,
    FormRequestDocPage,
    SectionDocFormField,
} from '../../interfaces'
import { FormDataUserApplicant } from '../FormDataUserApplicant'
import { FieldRequestForm } from '../FieldRequestForm'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router'
import { useDocFormStore } from '../../hooks'
import { Alert } from 'react-bootstrap'

export const DocRequestForm: FC<{
    sections: SectionDocFormField[] | undefined
}> = ({ sections }) => {
    const { handleSubmit, control } = useForm<FieldDataInterface>()
    const { codeForm } = useParams<FormRequestDocPage>()
    const { saveRequestFormDoc, errors } = useDocFormStore()
    const navigate = useNavigate()

    /**
     * Manda a guardar el muchacho
     * @param data
     */
    const handleSubmitForm = async (data: FieldDataInterface) => {
        if (codeForm) {
            const formData = new FormData()
            for (const key in data) {
                formData.append(`${key}`, data[key])
            }
            formData.append('codeForm', codeForm)

            await saveRequestFormDoc(formData)

            if (!errors.message) {
                navigate(`/servicios-en-linea/gracias`)
            }
        }
    }

    return (
        <div className="contact-form">
            {errors.message && (
                <Alert show={true} variant="danger" dismissible>
                    {errors.message}
                </Alert>
            )}

            <form
                method="post"
                onSubmit={handleSubmit(handleSubmitForm)}
                id="request-form"
            >
                {/* Datos de Usuarios */}
                <FormDataUserApplicant />

                <div className="mb-3">
                    {sections?.map(
                        (section: SectionDocFormField, unique: Key) => {
                            return (
                                <div key={unique}>
                                    {section.name && (
                                        <>
                                            <h5 className="mt-4">
                                                <strong>{section.name}</strong>
                                            </h5>
                                            <hr />
                                        </>
                                    )}

                                    <div className="row">
                                        {section.fields.map(
                                            (
                                                fieldForm: DocFormField,
                                                key: Key
                                            ) => {
                                                return (
                                                    <div
                                                        key={key}
                                                        className="col-12 col-lg-6"
                                                    >
                                                        <FieldRequestForm
                                                            fieldForm={
                                                                fieldForm
                                                            }
                                                            control={control}
                                                        />
                                                    </div>
                                                )
                                            }
                                        )}
                                    </div>
                                </div>
                            )
                        }
                    )}
                </div>

                <div className="mb-3">
                    <button className="theme-btn btn-style-one" type="submit">
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    )
}
