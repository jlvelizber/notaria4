import React from 'react'
import notaria4 from './../../assets/images/about/notaria4-daule-abogacia.jpg'
import abogado from './../../assets/images/about/abogado.webp'
import ImageColumn from '../Common/ImageColumn'

const About = () => {
    return (
        <section className="about-section">
            {/* <div className="image-layer" style="background-image:url(images/resource/about-1.jpg)"></div> */}
            <div
                className="image-layer"
                style={{ backgroundImage: `url(${notaria4})` }}
            ></div>
            <div className="container">
                <div className="row clearfix">
                    <div className="content-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="section-title text-center text-md-start">
                                <div className="title">
                                    Notaría cuarta de Daule
                                </div>
                                <h3>
                                    Brindamos asesoramiento y atención
                                    personalizada en la realización de sus{' '}
                                    <span>trámites y procesos legales</span>
                                </h3>
                            </div>

                            <div className="text text-justify">
                                <p>
                                    En la Notaría IV de Daule nos complace poder
                                    brindarles nuestros servicios legales en
                                    línea, para que puedan realizar sus trámites
                                    desde la comodidad de su hogar o lugar de
                                    trabajo. Ofrecemos a nuestros clientes un
                                    servicio de alta calidad, con
                                    profesionalismo, ética y transparencia.
                                </p>
                                <p>
                                    Estamos comprometidos en brindarles una
                                    experiencia satisfactoria y confiable en
                                    cada uno de los trámites que realicen con
                                    nosotros Gracias por visitarnos y confiar en
                                    nuestros servicios.
                                </p>

                                <h4 className="title">
                                    Atentamente <span>Notaría 4 de Daule</span>
                                </h4>
                            </div>
                        </div>
                    </div>

                    <div className="image-column col-lg-6 col-md-8 col-sm-12">
                        <ImageColumn
                            image={abogado}
                            content={
                                <>
                                    23
                                    <span>años de experiencia</span>
                                </>
                            }
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
