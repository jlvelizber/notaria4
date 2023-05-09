import React, { Key } from 'react'
import { Accordion } from 'react-bootstrap'
import { FAQ_DATA, FaqInterface } from './FaqData'
import { Link } from 'react-router-dom'

const faqs: FaqInterface[] = FAQ_DATA

const Faq = () => {
    return (
        <section className="faq-page-section">
            <div className="container">
                <div className="inner-container">
                    <div className="section-title text-center text-md-start">
                        <h3>
                        Despejamos todas tus <span>dudas</span>
                        </h3>
                    </div>
                    <div className="row clearfix p-md-4 mx-auto">
                        <div className="content-column col-lg-9 col-md-12 col-sm-12 mx-auto">
                            <Accordion>
                                {faqs.map((faq: FaqInterface, idx: Key) => {
                                    return (
                                        <Accordion.Item
                                            eventKey={`${idx}`}
                                            key={idx}
                                        >
                                            <Accordion.Button className="py-3">
                                                {faq.title}
                                            </Accordion.Button>

                                            <Accordion.Body>
                                                {faq.content}
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    )
                                })}
                            </Accordion>
                        </div>
                    </div>

                    <p className="text" style={{fontSize:'16px', color:'black'}}>
                        Esperamos que estas preguntas frecuentes te hayan sido
                        de utilidad. Recuerda que si tienes alguna otra
                        consulta, puedes contactarnos directamente en el
                        siguiente <Link to={'/contacto'}>enlace</Link> 
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Faq
