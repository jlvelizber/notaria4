import React from 'react'
import BgSection5 from './../../assets/images/home/home-section-contact.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

const Section5 = () => {
    return (
        <section
            className="form-section"
            style={{ backgroundImage: `url(${BgSection5})` }}
        >
            <div className="container">
                <div className="upper-content">
                    <div className="row clearfix">
                        <div className="title-column col-lg-5 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <div className="section-title light">
                                    <div className="title">Contacto</div>
                                    <h3>
                                        Sientete en libertad de escribirnos{' '}
                                        <br />
                                        estamos <span>aquí</span> para ti
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="info-column col-lg-7 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <div className="row clearfix">
                                    <div className="column col-lg-6 col-md-6 col-sm-12">
                                        <ul className="list-style-two">
                                            <li>
                                                <FontAwesomeIcon
                                                    icon={faBuilding}
                                                />
                                                Dirección: Avenida León Febres
                                                Cordero Ribadeneyra, Edificio
                                                Platinium II, Daule 091910{' '}
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="column col-lg-6 col-md-6 col-sm-12">
                                        <ul className="list-style-two">
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
                                                info@notaria4.com
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lower-content">
                    <div className="default-form">
                        <form method="post" action="blog.html">
                            <div className="row clearfix">
                                <div className="form-group col-lg-4 col-md-6 col-sm-12">
                                    <input
                                        type="text"
                                        name="firstname"
                                        value=""
                                        placeholder="Nombres"
                                        required
                                    />
                                </div>

                                <div className="form-group col-lg-4 col-md-6 col-sm-12">
                                    <input
                                        type="text"
                                        name="email"
                                        value=""
                                        placeholder="Apellidos"
                                        required
                                    />
                                </div>

                                <div className="form-group col-lg-4 col-md-12 col-sm-12">
                                    <input
                                        type="text"
                                        name="phone"
                                        value=""
                                        placeholder="Correo electrónico"
                                        required
                                    />
                                </div>

                                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                    <textarea
                                        name="message"
                                        placeholder="Mensaje"
                                    ></textarea>
                                </div>

                                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                    <button
                                        type="submit"
                                        className="theme-btn btn-style-one"
                                    >
                                        Enviar
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section5
