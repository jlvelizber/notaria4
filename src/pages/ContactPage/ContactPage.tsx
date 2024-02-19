import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faEnvelope,
    faPhone,
    faBuilding,
    faClock,
} from '@fortawesome/free-solid-svg-icons'
import { Website } from '../../layouts'
import { PageTitle } from '../../components'
import ImgTitle from '@/images/contact/title.jpg'

export const ContactPage: FC = () => {
    return (
        <Website>
            <>
                {/* <!--Page Title--> */}
                {/* <section className="page-title" style="background-image:url(images/background/4.jpg)"> */}
                <PageTitle title="Contacto" background={ImgTitle} />

                {/* <!--End Page Title--> */}
                {/* <!-- Contact Page Section --> */}
                <section className="contact-page-section">
                    <div className="container">
                        <div className="inner-container">
                            <h2 className="text-center">
                                Contáctanos y despeja todas tus{' '}
                                <span>dudas</span>
                            </h2>
                            <div className="row clearfix">
                                {/* <!-- Info Column --> */}
                                <div className="info-column col-lg-7 col-md-12 col-sm-12">
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
                                            <form
                                                method="post"
                                                action="sendemail.php"
                                                id="contact-form"
                                            >
                                                <div className="mb-3">
                                                    <input
                                                        type="text"
                                                        name="firstname"
                                                        value=""
                                                        placeholder="Nombre Completo"
                                                        required
                                                    />
                                                </div>

                                                <div className="mb-3">
                                                    <input
                                                        type="text"
                                                        name="email"
                                                        value=""
                                                        placeholder="Correo"
                                                        required
                                                    />
                                                </div>

                                                <div className="mb-3">
                                                    <input
                                                        type="text"
                                                        name="mobile"
                                                        value=""
                                                        placeholder="Celular"
                                                        required
                                                    />
                                                </div>

                                                <div className="mb-3">
                                                    <textarea
                                                        name="message"
                                                        placeholder="Consulta..."
                                                    ></textarea>
                                                </div>

                                                <div className="mb-3">
                                                    <button
                                                        type="submit"
                                                        className="theme-btn btn-style-one"
                                                    >
                                                        Enviar
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="text">
                                            <p>
                                                Nuestro equipo de profesionales
                                                notariales estará encantado de
                                                atenderte y resolver todas tus
                                                dudas y consultas legales.
                                            </p>
                                        </div>
                                        <hr />
                                        <ul className="list-style-six">
                                            <li>
                                                <FontAwesomeIcon
                                                    icon={faBuilding}
                                                />
                                                Dirección: Avenida León Febres
                                                Cordero Ribadeneyra, Edificio
                                                Platinium II, Daule 091910{' '}
                                                <br />
                                            </li>
                                            <li>
                                                <FontAwesomeIcon
                                                    icon={faPhone}
                                                />
                                                (04) 214-5544
                                            </li>
                                            <li>
                                                <FontAwesomeIcon
                                                    icon={faEnvelope}
                                                />
                                                <Link
                                                    to={
                                                        'mailto:info@notaria4daule.com'
                                                    }
                                                >
                                                    info@notaria4daule.com
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* <!-- Form Column --> */}
                                <div className="form-column col-lg-5 col-md-12 col-sm-12">
                                    <div className="inner-column">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.2512472905655!2d-79.87986498532872!3d-2.0554336985016195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902d124a8a4fbf23%3A0x8da2093e8dd4ef51!2sNotaria%20IV!5e0!3m2!1ses-419!2sec!4v1681230698843!5m2!1ses-419!2sec"
                                            width="100%"
                                            height="300"
                                            style={{ border: '0px' }}
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                        ></iframe>
                                        <div className="column col-12">
                                            <h4>Horarios de Atención</h4>
                                            <ul className="list-style-seven">
                                                <li>
                                                    <FontAwesomeIcon
                                                        icon={faClock}
                                                    />{' '}
                                                    Lunes: 8:00 - 17:00
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon
                                                        icon={faClock}
                                                    />{' '}
                                                    Martes: 8:00 - 17:00
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon
                                                        icon={faClock}
                                                    />{' '}
                                                    Miercoles: 8:00 - 17:00
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon
                                                        icon={faClock}
                                                    />{' '}
                                                    Jueves: 8:00 - 17:00
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon
                                                        icon={faClock}
                                                    />{' '}
                                                    Viernes: 8:00 - 17:00
                                                </li>
                                            </ul>
                                        </div>
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
