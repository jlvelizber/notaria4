import React from 'react'
import LaAbg from './../../assets/images/home/la-abogada-notaria4.webp'
import HomeService from './../../assets/images/home/home-section-services.webp'
import ImgSignature from './../../assets/images/home/signature.png';
import ImageColumn from '../Common/ImageColumn'

const Section2 = () => {
    return (
        <section className="about-section style-two">
            <div className="image-layer" style={{backgroundImage:`url(${HomeService})`}}></div>
            <div className="container">
                <div className="row clearfix">
                    <div className="content-column col-lg-6 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="section-title text-center text-md-start">
                                <div className="title">Bienvenidos</div>
                                <h3>
                                    a la Notaría cuarta de <span>Daule</span>
                                </h3>
                            </div>

                            <div className="text text-justify">
                                <p>
                                    La Notaria 4 de Daule ofrece a la ciudadania
                                    un servicio de alta calidad, con
                                    profesionalismo, ética y transparencia.
                                    Estamos comprometidos en brindarles una
                                    experiencia satisfactoria y confiable en
                                    cada uno de los trámites que realicen con
                                    nosotros.
                                </p>
                                <p>Atentamente.</p>
                            </div>
                            <div className="signature  text-center text-md-start">
                                <div className="signature-img">
                                    <img
                                        src={ImgSignature}
                                        alt=""
                                    />
                                </div>
                                <h5>Abogada Maria del Carmen Carvajal</h5>
                                <div className="designation">Notaria</div>
                            </div>
                        </div>
                    </div>

                    <div className="image-column col-lg-6 col-md-12 col-sm-12">
                        <ImageColumn
                            image={LaAbg}
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

export default Section2
