import React, { FC, Key } from 'react'
import {
    DocFormField,
    FieldDataInterface,
    FormRequestDocPage,
    SectionDocFormField,
} from '../../interfaces'
import { FormDataUserApplicant } from '../FormDataUserApplicant'
import { FieldRequestForm } from '../FieldRequestForm'
import { useForm, Controller } from 'react-hook-form'
import { useParams } from 'react-router'
import { useDocFormStore } from '../../hooks'

export const DocRequestForm: FC<{
    sections: SectionDocFormField[] | undefined
}> = ({ sections }) => {
    const { handleSubmit, control } = useForm<FieldDataInterface>()
    const { codeForm } = useParams<FormRequestDocPage>()
    const { saveRequestFormDoc } = useDocFormStore()


    /**
     * Manda a guardar el muchacho
     * @param data 
     */
    const handleSubmitForm = async (data: FieldDataInterface) => {
        console.log(data)
       
        if (codeForm) await saveRequestFormDoc(codeForm, data)
    }

    if (sections?.length === 0) <></>

    return (
        <div className="contact-form">
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
                                                        <Controller
                                                            name={
                                                                fieldForm.name
                                                            }
                                                            key={key}
                                                            control={control}
                                                            defaultValue={''}
                                                            rules={{
                                                                required:
                                                                    'Campo requerido',
                                                            }}
                                                            render={({
                                                                field,
                                                            }) => (
                                                                <FieldRequestForm
                                                                    fieldControl={
                                                                        field
                                                                    }
                                                                    fieldDescription={
                                                                        fieldForm
                                                                    }
                                                                    control={
                                                                        control
                                                                    }
                                                                />
                                                            )}
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