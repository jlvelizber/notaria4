import React, { FC, useRef } from 'react';
import Preloader from './Preloader/Preloader';
import { Menu } from './Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRemove } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';
const Header: FC = () => {

    const navigationBar = useRef<HTMLDivElement>(null);

    const openSidebar = () => {
        navigationBar?.current?.classList.add("visible-sidebar")
        document.body.classList.add("background-visible");
    }

    const closeSidebar = () => {
        navigationBar?.current?.classList.remove("visible-sidebar")
        document.body.classList.remove("background-visible")
    }

    return (
        <>
            <Preloader />
            <Menu onOpenSidebar={openSidebar}/>

            {/* <!--Form Back Drop--> */}
            <div className="form-back-drop"></div>

            {/* <!-- Hidden Navigation Bar --> */}
            <section className="hidden-bar right-align" ref={navigationBar}>
                <div className="hidden-bar-closer">
                    <button onClick={closeSidebar}>
                        <FontAwesomeIcon icon={faRemove}/>
                    </button>
                </div>
                {/* <!-- Hidden Bar Wrapper --> */}
                <div className="hidden-bar-wrapper">
                    <div className="inner-box">
                        <div className="logo">
                            <a href="index.html">
                                <img src="images/logo-notaria4-daule.png" alt="Notaria 4 de Daule" />
                            </a>
                        </div>
                        <div className="text">
                            Lorem ipsum, or lipsum as it is sometimes the known,
                            is dummy text used in laying out print, graphic or
                            web designs. The passage
                        </div>
                        {/* <!-- List Style Four --> */}
                        <ul className="list-style-four">
                            <li>
                                <span className="icon flaticon-house"></span>{' '}
                                Km.1 Av. León Febres Cordero <strong> C.C. Plaza Avalon </strong> Local 6 1er. Piso
                            </li>
                            <li>
                                <span className="icon flaticon-phone-call"></span>{' '}
                                <strong>Llámanos!</strong>042-145-544
                            </li>
                            <li>
                                <span className="icon flaticon-talk"></span>
                                <strong>Correo</strong> <a href='mailto:notaria4daule.com'>info@notaria4daule.com</a> 
                            </li>
                        </ul>
                        <div className="lower-box">
                            {/* <!-- Social Icons --> */}
                            <ul className="social-icons">
                                <li className="facebook">
                                    <a href="#">
                                    <FontAwesomeIcon icon={faFacebookF} />
                                    </a>
                                </li>
                                <li className="twitter">
                                    <a href="#">
                                        <span className="fa fa-twitter"></span>
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Header