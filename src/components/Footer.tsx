import React from 'react'
import logoFotoer from './../assets/images/logo-notaria4-daule.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faPhone,
    faEnvelope,
    faHome,
    faAngleRight,
} from '@fortawesome/free-solid-svg-icons'
const Footer = () => {

    const year = (new Date()).getFullYear();

    return (
        <footer className="main-footer">
            <div className="container">
                <div className="widgets-section">
                    <div className="row clearfix">
                        <div className="big-column col-lg-5 col-md-12 col-sm-12">
                            <div className="row clearfix">
                                <div className="footer-column col-lg-12 col-md-6 col-sm-12">
                                    <div className="footer-widget logo-widget">
                                        <div className="logo">
                                            <Link to="/">
                                                <img
                                                    src={logoFotoer}
                                                    alt="Notaria 4 de Daule"
                                                />
                                            </Link>
                                        </div>
                                        <div className="text">
                                            Estamos comprometidos en brindarles
                                            una experiencia satisfactoria y
                                            confiable en cada uno de los
                                            trámites que realicen con nosotros
                                            Gracias por visitarnos y confiar en
                                            nuestros servicios.
                                        </div>
                                        <ul className="list-style-three">
                                            <li>
                                                <FontAwesomeIcon
                                                    className="icon"
                                                    icon={faPhone}
                                                />
                                                +593 042145544
                                            </li>
                                            <li>
                                                <FontAwesomeIcon
                                                    className="icon"
                                                    icon={faEnvelope}
                                                />
                                               <Link to={"mailto:info@notaria4daule.com"}> info@notaria4daule.com</Link>
                                            </li>
                                            <li>
                                                <FontAwesomeIcon
                                                    className="icon"
                                                    icon={faHome}
                                                />
                                                Avenida León Febres Cordero Ribadeneyra, Edificio Platinium II, Daule 091910
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="big-column col-lg-7 col-md-12 col-sm-12">
                            <div className="row clearfix">
                                <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                                    <div className="footer-widget links-widget">
                                        <h4>Enlaces</h4>
                                        <ul className="list-link">
                                            <li>
                                                <Link to="/">
                                                    {' '}
                                                    <FontAwesomeIcon
                                                        icon={faAngleRight}
                                                    />{' '}
                                                    Inicio
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/quienes-somos">
                                                    {' '}
                                                    <FontAwesomeIcon
                                                        icon={faAngleRight}
                                                    />{' '}
                                                    ¿Quiénes Somos?
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/servicios">
                                                    {' '}
                                                    <FontAwesomeIcon
                                                        icon={faAngleRight}
                                                    />{' '}
                                                    Servicios
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/preguntas-frecuentes">
                                                    {' '}
                                                    <FontAwesomeIcon
                                                        icon={faAngleRight}
                                                    />{' '}
                                                    Preguntas Frecuentes
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/contacto">
                                                    {' '}
                                                    <FontAwesomeIcon
                                                        icon={faAngleRight}
                                                    />{' '}
                                                    Contacto
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                                    <div className="footer-widget links-widget">
                                        <h4>Servicios</h4>
                                        <ul className="list-link">
                                            <li>
                                                <Link to="/servicios">
                                                    {' '}
                                                    <FontAwesomeIcon
                                                        icon={faAngleRight}
                                                    />
                                                    Escrituras públicas
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/servicios">
                                                    {' '}
                                                    <FontAwesomeIcon
                                                        icon={faAngleRight}
                                                    />
                                                    Constitución de compañías
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/servicios">
                                                    {' '}
                                                    <FontAwesomeIcon
                                                        icon={faAngleRight}
                                                    />
                                                    Poderes
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/servicios">
                                                    {' '}
                                                    <FontAwesomeIcon
                                                        icon={faAngleRight}
                                                    />
                                                    Testamentos
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/servicios">
                                                    {' '}
                                                    <FontAwesomeIcon
                                                        icon={faAngleRight}
                                                    />
                                                    Trámites ante el Registro de
                                                    la Propiedad
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <div className="row clearfix">
                        <div className="copyright-column col-lg-6 col-md-6 col-sm-12">
                            <div className="copyright">
                                {year} &copy; Todos los derechos reservados por{' '}
                                <a href="#">Èltief Strategic Consulting</a>
                            </div>
                        </div>

                        {/* <div className="social-column col-lg-6 col-md-6 col-sm-12">
                            <ul>
                                <li className="follow">Follow us: </li>
                                <li>
                                    <a href="#">
                                        <span className="fa fa-facebook-square"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="fa fa-twitter-square"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="fa fa-linkedin-square"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="fa fa-google-plus-square"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="fa fa-rss-square"></span>
                                    </a>
                                </li>
                            </ul>
                        </div> */}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
