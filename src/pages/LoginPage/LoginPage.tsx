import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import { Website } from '../../layouts'
import { LoginForm, PageTitle } from '../../components'
import ImgTitle from '@/images/contact/title.jpg'

export const LoginPage: FC = () => {
    return (
        <Website>
            <>
                {/* <!--Page Title--> */}
                <PageTitle title="Ingreso" background={ImgTitle} />

                {/* <!--End Page Title--> */}
                {/* <!-- Contact Page Section --> */}
                <section className="contact-page-section">
                    <div className="container">
                        <div className="inner-container">
                            <h2 className="text-center">
                                Ingresa con tu usuario para realizar tus
                                trámites en <span>línea</span>
                            </h2>
                            <div className="row clearfix">
                                {/* <!-- Info Column --> */}
                                <div className="info-column col-12">
                                    <div className="inner-column">
                                        <div className="text">
                                            <p>
                                                Gracias por tu interés en
                                                nuestros servicios notariales.
                                            </p>
                                            <p>
                                                Estamos aquí para ayudarte en
                                                todos tus trámites legales y
                                                ofrecerte la asesoría
                                                personalizada que necesitas.
                                            </p>
                                            <p>
                                                Por favor, no dudes en
                                                comunicarte con nosotros a
                                                través del siguiente formulario:
                                            </p>
                                        </div>

                                        <div className="contact-form">
                                            <LoginForm
                                                redirectToAccount={true}
                                            />
                                        </div>
                                        <p>
                                            No tienes cuenta? puedes crear una
                                            presionando{' '}
                                            <Link to={'/registro'}>aquí</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        </Website>
    )
}