import React, { SyntheticEvent, useEffect, useState } from 'react'
import Website from '../layouts/Website'

import PageTitle from '../components/PageTitle/PageTitle'
import { FormDataUser } from '../components/FormDataUser'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import { useAuthStore } from '../hooks'
import { RegisterUserInterface } from '../interfaces'
import { Alert } from 'react-bootstrap'

export const MyAccount = () => {
    const { user } = useSelector((state: RootState) => state.auth)

    const {
        updateUserData,
        errors: { message: errorMessage, fieldValues, errors: fieldErrors },
        successMessage,
    } = useAuthStore()

    const handleSubmit = async (
        e: SyntheticEvent<HTMLFormElement>,
        postData: RegisterUserInterface
    ) => {
        e.preventDefault()
        e.stopPropagation()
        try {
            await updateUserData(postData)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Website>
            <PageTitle title="Mi Cuenta" background={''} />
            {/* <!--End Page Title--> */}
            {/* <!-- Contact Page Section --> */}
            <section className="contact-page-section">
                <div className="container">
                    <div className="inner-container">
                        <div className="contact-form">
                            {errorMessage && (
                                <Alert show={true} variant="danger" dismissible>
                                    {errorMessage}
                                </Alert>
                            )}
                            {successMessage && (
                                <Alert
                                    show={true}
                                    variant="success"
                                    dismissible
                                >
                                    {successMessage}
                                </Alert>
                            )}

                            <FormDataUser
                                dataUser={user}
                                handleSubmit={(
                                    event: SyntheticEvent<HTMLFormElement>,
                                    postData: RegisterUserInterface
                                ) => handleSubmit(event, postData)}
                                fieldValues={fieldValues}
                                fieldErrors={fieldErrors}
                                canInsertAccountData={false}
                            >
                                <div className="mb-3">
                                    <button
                                        type="submit"
                                        className="theme-btn btn-style-one"
                                    >
                                        Guardar
                                    </button>
                                </div>
                            </FormDataUser>
                        </div>
                    </div>
                </div>
            </section>
        </Website>
    )
}
