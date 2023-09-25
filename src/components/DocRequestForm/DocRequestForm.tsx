import React, { FC, Key } from 'react'
import { DocFormField, SectionDocFormField } from '../../interfaces'
import { FormDataUserApplicant } from '../FormDataUserApplicant'
import { FieldRquestForm } from '../FieldRquestForm'

export const DocRequestForm: FC<{
    sections: SectionDocFormField[] | undefined
}> = ({ sections }) => {
    const handleSubmit = () => {
        console.log('Submit')
    }

    return (
        <div className="contact-form">
            <form method="post" onSubmit={handleSubmit} id="request-form">
                {/* Datos de Usuarios */}
                <FormDataUserApplicant />

                <div className="mb-3">
                    {sections?.map((section: SectionDocFormField, unique: Key) => {
                        return (
                            <>
                                {section.name && (
                                    <>
                                        <h5 className='mt-4'> <strong>{section.name}</strong> </h5>
                                        <hr />
                                    </>
                                )}

                                <div className="row" key={unique}>
                                    {section.fields.map(
                                        (field: DocFormField, key: Key) => {
                                            return (
                                                <div
                                                    key={key}
                                                    className="col-12 col-lg-6"
                                                >
                                                    <FieldRquestForm key={key} fieldDescription={field}/>
                                                </div>
                                            )
                                        }
                                    )}
                                </div>
                            </>
                        )
                    })}
                </div>

                <div className="mb-3">
                    <button className='theme-btn btn-style-one'>Enviar</button>
                    </div>
            </form>
        </div>
    )
}
