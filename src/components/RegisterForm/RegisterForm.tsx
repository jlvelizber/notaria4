import React, { FC, SyntheticEvent } from 'react'
import { RegisterUserInterface } from '../../interfaces'
import { useAuthStore } from '../../hooks'
import { Alert } from 'react-bootstrap'
import { FormDataUser } from '../FormDataUser/FormDataUser'

const RegisterFieldsForm: RegisterUserInterface = {
    identification_type: '',
    identification_num: '',
    name: '',
    midle_name: '',
    first_last_name: '',
    second_last_name: '',
    email: '',
    password: '',
    password_confirmation: '',
    country_id: '',
}

export const RegisterForm: FC = () => {
    const {
        startRegister,
        errors: { message: errorMessage, fieldValues, errors: fieldErrors },
        successMessage,
    } = useAuthStore()

    const handleSubmit = async (
        event: SyntheticEvent<HTMLFormElement>,
        formState: RegisterUserInterface
    ) => {
        event.stopPropagation()
        event.preventDefault()

        await startRegister(formState)
    }

    return (
        <>
            {errorMessage && (
                <Alert show={true} variant="danger" dismissible>
                    {errorMessage}
                </Alert>
            )}

            {successMessage && (
                <Alert show={true} variant="success" dismissible>
                    {successMessage}
                </Alert>
            )}
            <FormDataUser
                dataUser={RegisterFieldsForm}
                handleSubmit={(
                    event: SyntheticEvent<HTMLFormElement>,
                    postData: RegisterUserInterface
                ) => handleSubmit(event, postData)}
                fieldValues={fieldValues}
                fieldErrors={fieldErrors}
            >
                <div className="mb-3">
                    <button type="submit" className="theme-btn btn-style-one">
                        Registrarse
                    </button>
                </div>
            </FormDataUser>
        </>
    )
}
