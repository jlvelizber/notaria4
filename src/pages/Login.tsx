import React, { FC } from 'react'
import Website from '../layouts/Website'
import PageTitle from '../components/PageTitle/PageTitle'
import ImgTitle from './../assets/images/contact/title.jpg'

import { LoginForm } from '../components/LoginForm'
import { Link } from 'react-router-dom'

const Login: FC = () => {
    return (
        <Website>
            <>
                {/* <!--Page Title--> */}
                <PageTitle title="Registro" background={ImgTitle} />

                {/* <!--End Page Title--> */}
                {/* <!-- Contact Page Section --> */}
                <section className="contact-page-section">
                    <div className="container">
                        <div className="inner-container">
                            <h2 className="text-center">
                                Ingresa con tu usuario para realizar tus trámites en{' '}
                                <span>línea</span>
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
                                            <LoginForm />
                                        </div>
                                        <p>No tienes cuenta? puedes crear una presionando <Link to={'/registro'}>aquí</Link></p>
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

export default Login
