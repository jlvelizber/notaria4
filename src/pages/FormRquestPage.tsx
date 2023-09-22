import React, { FC, useEffect } from 'react'
import { Navigate, useParams } from 'react-router'
import { FormRequestDocPage } from '../interfaces'
import { useAuthStore, useDocFormStore } from '../hooks'
import Website from '../layouts/Website'
import PageTitle from '../components/PageTitle/PageTitle'
import { LoginForm } from '../components'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

export const FormRquestPage: FC = () => {
    const { codeForm } = useParams<FormRequestDocPage>()

    const { status } = useAuthStore()
    const { getDocByCode } = useDocFormStore()

    const { activeDoc } = useSelector((state: RootState) => state.docs)


    useEffect(() => {
        if (codeForm) {
            getDocByCode(codeForm)
        }
    }, [codeForm])

    return (
        <Website>
            {/* <!--Page Title--> */}
            {/* <section className="page-title" style="background-image:url(images/background/4.jpg)"> */}
            <PageTitle title={`${activeDoc?.name}`} />
            {/* <!--End Page Title--> */}
            {/* <!-- Contact Page Section --> */}
            <section className="contact-page-section">
                <div className="container">
                    <div className="inner-container">
                        {status === 'not-authenticated' && (
                            <>
                                <h2 className="text-center">
                                    Ingresa con tu usuario para realizar tus
                                    trámites en <span>línea</span>
                                </h2>
                                <div className="row clearfix">
                                    <div className="contact-form">
                                        <LoginForm />
                                    </div>
                                    <p>
                                        No tienes cuenta? puedes crear una
                                        presionando{' '}
                                        <Link to={'/registro'}>aquí</Link>
                                    </p>
                                </div>
                            </>
                        )}

                        {status === 'authenticated' && ( activeDoc?.field_requests )}
                    </div>
                </div>
            </section>
        </Website>
    )
}
