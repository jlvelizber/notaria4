import React, { FC } from 'react'
import Website from '../layouts/Website'
import PageTitle from '../components/PageTitle/PageTitle'
import ImgTitle from './../assets/images/contact/title.jpg'

import { RegisterForm } from '../components/RegisterForm'
import { Link } from 'react-router-dom'

const Contact: FC = () => {
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
                                Crea tu usuario para realizar tus trámites
                                notariales en <span>línea</span>
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
                                                Por favor rellena el formulario
                                                a continuación para la creación
                                                de tu cuenta en Notaría IV de
                                                Daule:
                                            </p>
                                        </div>

                                        <div className="contact-form">
                                            <RegisterForm />
                                        </div>
                                        <p>
                                            Si ya tienes cuenta puedes acceder
                                            presionando{' '}
                                            <Link to={'/ingreso'}>aquí</Link>
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

export default Contact
