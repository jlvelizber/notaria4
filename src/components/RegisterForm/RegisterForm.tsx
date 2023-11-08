import React, { FC, Key, SyntheticEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { RegisterUserInterface } from '../../interfaces'
import { useAuthStore, useForm } from '../../hooks'
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
    const navigate = useNavigate()

    const {
        startRegister,
        errors: { message: errorMessage, fieldValues, errors: fieldErrors },
    } = useAuthStore()

    const handleSubmit = async (
        event: SyntheticEvent<HTMLFormElement>,
        formState: RegisterUserInterface
    ) => {
        event.stopPropagation()
        event.preventDefault()

        const wasSuccess = await startRegister(formState)
        if (wasSuccess) navigate('/')
    }

    return (
        <>
            {errorMessage && (
                <Alert show={true} variant="danger" dismissible>
                    {errorMessage}
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
