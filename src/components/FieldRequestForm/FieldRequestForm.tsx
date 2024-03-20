import React, { ChangeEvent, FC, Key, useRef } from 'react'
import {
    Controller,
    useController,
    useForm,
    ControllerRenderProps,
    Control,
} from 'react-hook-form'
import {
    DocFormField,
    DocFormFieldOptions,
    FieldDataInterface,
} from '../../interfaces'
import { FieldRequestFormStyles } from './FieldRequestFormStyles'

export const FieldRequestForm: FC<{
    fieldForm: DocFormField
    control: Control<FieldDataInterface>
}> = ({ fieldForm, control }) => {
    const inputFileRef = useRef(null)

    const { fieldState } = useController<FieldDataInterface>({
        name: fieldForm.name,
        control: control,
    })

    const renderInput = (
        field: ControllerRenderProps,
        fieldDescription: DocFormField
    ) => {
        switch (fieldDescription.type) {
            case 'select':
                return (
                    <select
                        {...field}
                        className={fieldState?.error && 'is-invalid error'}
                    >
                        <option>Seleccione</option>
                        {fieldDescription.options?.map(
                            (option: DocFormFieldOptions, index: Key) => (
                                <option key={index} value={option.value}>
                                    {option.label}
                                </option>
                            )
                        )}
                    </select>
                )
            case 'file':
                return (
                    <div style={FieldRequestFormStyles.customFileUpload}>
                        <label
                            htmlFor="file-upload"
                            style={FieldRequestFormStyles.fileUploadLabel}
                        >
                            Subir archivo
                        </label>
                        <input
                            {...field}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                field.onChange(e.target.files?.[0])
                            }}
                            type={fieldDescription.type}
                            className={fieldState?.error && 'is-invalid error'}
                            value={field.value?.fileName}
                            ref={inputFileRef}
                            accept="application/pdf"
                            style={FieldRequestFormStyles.fileUploadInput}
                        />
                    </div>
                )
            default:
                return (
                    <input
                        {...field}
                        type={fieldDescription.type}
                        className={fieldState?.error && 'is-invalid error'}
                    />
                )
        }
    }
    return (
        <>
            <Controller
                name={fieldForm.name}
                control={control}
                rules={{
                    required: 'Campo requerido',
                }}
                render={({ field }) => (
                    <>
                        <label className="fw-semibold mb-1">
                            {fieldForm.label}
                        </label>

                        {renderInput(field, fieldForm)}

                        {fieldState?.error?.message && (
                            <div className="invalid-feedback">
                                {fieldState?.error?.message}
                            </div>
                        )}
                    </>
                )}
            />
        </>
    )
}
