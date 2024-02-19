import React, { FC, useEffect, useState } from 'react'
import { Alert } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'
import { useAuthStore } from '../../hooks'
import { Website } from '../../layouts'
import { PageTitle } from '../../components'
import ImgTitle from '@/images/contact/title.jpg'

export const VerifyAccountPage: FC = () => {
    const [params] = useSearchParams()

    const [existError, setExistError] = useState<boolean>(false)
    const {
        verifyAccount,
        errors: { message },
        successMessage,
    } = useAuthStore()

    const id = params.get('id') as string
    const hash = params.get('hash') as string

    useEffect(() => {
        if (id && hash) {
            verifyAccount(id, hash)
        } else {
            setExistError(true)
        }
    }, [])

    return (
        <Website>
            {/* <!--Page Title--> */}
            <PageTitle title="Verificar Cuenta" background={ImgTitle} />
            <section className="services-section-four">
                <div className="container">
                    <div className="row clearfix">
                        <div className="section-title text-center text-md-start">
                            {existError && (
                                <Alert variant="danger" dismissible>
                                    Ocurrió un error Url inválida
                                </Alert>
                            )}
                            {message && (
                                <Alert variant="danger" dismissible>
                                    {message}
                                </Alert>
                            )}

                            {successMessage && (
                                <Alert variant="success" dismissible>
                                    {successMessage}
                                </Alert>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </Website>
    )
}
