import React, { FC, Key } from 'react'
import { DocFormField, DocFormFieldOptions } from '../../interfaces'

export const FieldRquestForm: FC<{ fieldDescription: DocFormField }> = ({
    fieldDescription: field,
}) => {
    const renderInput = (field: DocFormField) => {
        switch (field.type) {
            case 'checkbox':
                return <input type="checkbox" name={field.name} />
            case 'select':
                return (
                    <select>
                        <option value="">Seleccione</option>
                        {field.options?.map(
                            (option: DocFormFieldOptions, index: Key) => (
                                <option key={index} value={option.value}>
                                    {option.label}
                                </option>
                            )
                        )}
                    </select>
                )
            default:
                return <input type={field.type} name={field.name} />
        }
    }

    return (
        <>
            <label className="fw-semibold mb-1">{field.label}</label>
            {renderInput(field)}
        </>
    )
}
