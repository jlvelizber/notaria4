import React, { Key } from 'react'
import Card, { CardInterface } from '../Common/Card'
import logo from './../../assets/images/logo-notaria-4.jpg'
import { faCheck, faFaceSmile, faHandshake, faLightbulb, faLock, faMagnifyingGlass, faPerson, faPersonRays } from '@fortawesome/free-solid-svg-icons'

function AboutDetails() {
    const ValoresItems: CardInterface[] = [
        {
            content: (
                <>
                    La honestidad es fundamental en cualquier servicio legal,
                    por lo que es importante que se promueva y se fomente dentro
                    de la notaría.
                </>
            ),
            title: 'Honestidad',
            icon: faHandshake
        },
        {
            content: (
                <>
                    La responsabilidad es clave en la atención al cliente y en
                    la gestión de documentos legales. Por ello, es importante
                    que el personal de la notaría asuma su papel con
                    responsabilidad y seriedad.
                </>
            ),
            title: 'Responsabilidad',
            icon: faPersonRays
        },
        {
            content: (
                <>
                    La eficiencia es importante en una notaría para poder
                    prestar un servicio rápido y efectivo a los clientes, lo que
                    a su vez puede mejorar la reputación y satisfacción de los
                    mismos.
                </>
            ),
            title: 'Eficiencia',
            icon: faLightbulb
        },
        {
            content: (
                <>
                    La transparencia es esencial en el ámbito legal, por lo que
                    la notaría debe ser transparente en su gestión y en los
                    procesos que lleva a cabo.
                </>
            ),
            title: 'Transparencia',
            icon: faMagnifyingGlass
        },
        {
            content: (
                <>
                    La búsqueda de la excelencia en la prestación del servicio y
                    en la gestión de documentos legales es fundamental para
                    lograr la satisfacción de los clientes y la consecución de
                    los objetivos estratégicos de la notaría.
                </>
            ),
            title: 'Excelencia',
            icon: faCheck
        },
        {
            content: (
                <>
                    La confidencialidad es un valor muy importante en la
                    notaría, ya que se trata de un ámbito en el que se manejan
                    documentos y datos sensibles de los clientes.
                </>
            ),
            title: 'Confidencialidad',
            icon: faLock
        },
        {
            content: (
                <>
                    La orientación al cliente es importante en cualquier
                    empresa, y en una notaría es fundamental para ofrecer un
                    servicio personalizado y de calidad.
                </>
            ),
            title: 'Orientación al cliente',
            icon:faPerson
        },
        {
            content: (
                <>
                    La innovación puede ser un valor diferencial para una
                    notaría que desee ofrecer servicios innovadores y que se
                    adapten a las nuevas necesidades y demandas del mercado.
                </>
            ),
            title: 'Innovación',
            icon: faLightbulb,
        },
    ]

    return (
        <>
            {/* Mision y vision */}
            <section className="counter-section style-two">
                <div className="container">
                    <div className="title-box">
                        <div className="section-title ">
                            <div className="row clearfix">
                                <div className="column col-lg-4 col-md-12 col-sm-12">
                                    <img
                                        src={logo}
                                        alt="Notaria 4 de Daule"
                                        title="Notaria 4 de Daule"
                                    />
                                </div>
                                <div className="column col-lg-8 col-md-12 col-sm-12">
                                    <div className="row clearfix">
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <p className="text-justify">
                                                <b>Misión.- </b>
                                                Nuestra misión es proporcionar
                                                servicios notariales de alta
                                                calidad, confiables y
                                                personalizados a nuestros
                                                clientes, en un ambiente de
                                                respeto, confidencialidad y
                                                transparencia. Nos esforzamos
                                                por mantenernos actualizados en
                                                los cambios legales y
                                                tecnológicos para ofrecer un
                                                servicio eficiente y efectivo en
                                                todo momento.
                                            </p>
                                        </div>

                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <p className="text-justify">
                                                <b>Visión.- </b>
                                                La Notaría Cuarta de Daule se
                                                proyecta como líder en servicios
                                                notariales en la región,
                                                reconocida por su eficiencia,
                                                rapidez y calidad en la atención
                                                al cliente. Buscamos mantenernos
                                                actualizados en materia legal y
                                                tecnológica, para poder brindar
                                                servicios cada vez más
                                                innovadores y efectivos a
                                                nuestros clientes. Aspiramos a
                                                ser una notaría de referencia en
                                                el mercado, por nuestra ética
                                                profesional, honestidad y
                                                compromiso con nuestros
                                                clientes.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="feature-section-two">
                <div className="container">
                    <div className="section-title text-center text-md-start">
                        <h3>
                            Nuestros <span>valores</span>
                        </h3>
                    </div>
                    <div className="row clearfix">
                        <div className='row values-container'>
                            {ValoresItems.map((valor: CardInterface, key: Key) => (
                                <Card  key={key} card={valor} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

AboutDetails.propTypes = {}

export default AboutDetails
