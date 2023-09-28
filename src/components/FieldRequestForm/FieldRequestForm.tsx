import React, { FC, Key } from 'react'
import { useController, ControllerFieldState } from 'react-hook-form'
import {
    DocFormField,
    DocFormFieldOptions,
    FieldDataInterface,
} from '../../interfaces'

export const FieldRequestForm: FC<{
    fieldDescription: DocFormField
    fieldControl: any
    control: any
}> = ({ fieldDescription, fieldControl, control }) => {
    const { fieldState } = useController<FieldDataInterface>({
        name: fieldDescription.name,
        control: control,
    })

    const renderInput = (
        field: DocFormField,
        fieldControl: any,
        fieldState: ControllerFieldState
    ) => {
        switch (field.type) {
            case 'select':
                return (
                    <select
                        {...fieldControl}
                        className={fieldState?.error && 'is-invalid error'}
                    >
                        <option>Seleccione</option>
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
                return (
                    <input
                        {...fieldControl}
                        type={field.type}
                        className={fieldState?.error && 'is-invalid error'}
                    />
                )
        }
    }

    return (
        <>
            <label className="fw-semibold mb-1">{fieldDescription.label}</label>
            {renderInput(fieldDescription, fieldControl, fieldState)}
            {fieldState?.error?.message && (
                <div className="invalid-feedback">
                    {fieldState?.error?.message}
                </div>
            )}
        </>
    )
}
