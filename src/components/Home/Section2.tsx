import React from 'react'
import About from '../About/About'

const Section2 = () => {
    return (
        <section className="about-section style-two">
            <div className="container">
                <div className="row clearfix">
                    <div className="content-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="section-title">
                                <div className="title">Bienvenidos</div>
                                <h3>
                                    a la Notaría cuarta de <span>Daule</span>
                                </h3>
                            </div>

                            <div className="text">
                                <p>
                                    La Notaria 4 de Daule ofrece a la ciudadania
                                    un servicio de alta calidad, con
                                    profesionalismo, ética y transparencia.
                                    Estamos comprometidos en brindarles una
                                    experiencia satisfactoria y confiable en
                                    cada uno de los trámites que realicen con
                                    nosotros.
                                </p>
                                <p>
                                    Atentamente.
                                </p>
                            </div>
                            <div className="signature">
                                <div className="signature-img">
                                    <img
                                        src="images/icons/signature.png"
                                        alt=""
                                    />
                                </div>
                                <h5>Abogada Maria del Carmen Carvajal</h5>
                                <div className="designation">
                                    Notaria
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="image-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="video-box">
                                <figure className="video-image">
                                    <img
                                        src="images/resource/video-img.jpg"
                                        alt=""
                                    />
                                </figure>
                                <a
                                    href="https://www.youtube.com/watch?v=kxPCFljwJws"
                                    className="lightbox-image overlay-box"
                                >
                                    <span className="flaticon-play-button"></span>
                                </a>
                            </div>

                            <div className="fact-counter style-two">
                                <div className="container">
                                    <div className="row clearfix">
                                        <div className="column counter-column col-lg-4 col-md-6 col-sm-12">
                                            <div
                                                className="inner wow fadeInLeft"
                                                data-wow-delay="0ms"
                                                data-wow-duration="1500ms"
                                            >
                                                <div className="count-outer count-box">
                                                    <span
                                                        className="count-text"
                                                        data-speed="2000"
                                                        data-stop="1235"
                                                    >
                                                        0
                                                    </span>
                                                    <div className="counter-title">
                                                        Satisfied Clients
                                                    </div>
                                                    <div className="text">
                                                        Dolore magna aliq
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="column counter-column col-lg-4 col-md-6 col-sm-12">
                                            <div
                                                className="inner wow fadeInLeft"
                                                data-wow-delay="300ms"
                                                data-wow-duration="1500ms"
                                            >
                                                <div className="count-outer count-box">
                                                    <span
                                                        className="count-text"
                                                        data-speed="3500"
                                                        data-stop="1402"
                                                    >
                                                        0
                                                    </span>
                                                    +
                                                    <div className="counter-title">
                                                        Completed works
                                                    </div>
                                                    <div className="text">
                                                        connstur adicing
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="column counter-column col-lg-4 col-md-12 col-sm-12">
                                            <div
                                                className="inner wow fadeInLeft"
                                                data-wow-delay="600ms"
                                                data-wow-duration="1500ms"
                                            >
                                                <div className="count-outer count-box">
                                                    <span
                                                        className="count-text"
                                                        data-speed="2000"
                                                        data-stop="35"
                                                    >
                                                        0
                                                    </span>
                                                    <div className="counter-title">
                                                        Winning Awards
                                                    </div>
                                                    <div className="text">
                                                        Lorem ipsum dolor
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section2
