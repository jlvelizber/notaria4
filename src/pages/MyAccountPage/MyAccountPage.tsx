import React, { SyntheticEvent } from 'react'
import { useSelector } from 'react-redux'
import { Alert } from 'react-bootstrap'
import { RootState } from '../../store'
import { useAuthStore } from '../../hooks'
import { RegisterUserInterface } from '../../interfaces'
import { Website } from '../../layouts'
import { FormDataUser, PageTitle } from '../../components'

export const MyAccountPage = () => {
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
