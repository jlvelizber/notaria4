import React, { Key } from 'react'
import Card, { CardInterface } from '../Common/Card'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'
import { faBinoculars } from '@fortawesome/free-solid-svg-icons'

function AboutDetails() {
    const valores: CardInterface[] = [
        {
            content:
                'Nuestra misión es proporcionar servicios notariales de alta calidad, confiables y personalizados a nuestros clientes, en un ambiente de respeto, confidencialidad y transparencia. Nos esforzamos por mantenernos actualizados en los cambios legales y tecnológicos para ofrecer un servicio eficiente y efectivo en todo momento.',
            title: 'Misión',
            icon: faCircleCheck,
        },
        {
            content:
                'La Notaría Cuarta de Daule se proyecta como líder en servicios notariales en la región, reconocida por su eficiencia, rapidez y calidad en la atención al cliente. Buscamos mantenernos actualizados en materia legal y tecnológica, para poder brindar servicios cada vez más innovadores y efectivos a nuestros clientes. Aspiramos a ser una notaría de referencia en el mercado, por nuestra ética profesional, honestidad y compromiso con nuestros clientes.',
            title: 'Visión',
            icon: faBinoculars,
        },
        {
            content: (
                <>
                    En la Notaría Cuarta de Daule, nos regimos por los
                    siguientes valores: <br />
                    <b>Honestidad:</b> nos comprometemos a ser transparentes y
                    éticos en todas nuestras interacciones con nuestros
                    clientes.
                    <br />
                    <b>Transparencia:</b> nos esforzamos por ofrecer una
                    comunicación clara y comprensible en todo momento.
                    <br />
                    <b>Confidencialidad:</b> protegemos la privacidad y los
                    derechos de nuestros clientes y mantenemos toda la
                    información en la más estricta confidencialidad.
                </>
            ),
            title: 'Visión',
            icon: faBinoculars,
        },
    ]

    return (
        <section className="services-section-one">
            <div className="container">
                <div className="section-title centered">
                    <h3>
                        Lo que nos <span>representa </span>
                    </h3>
                </div>
                <div className="row clearfix">
                    {valores.map((valor: CardInterface, key: Key) => (
                        <Card key={key} card={valor} />
                    ))}
                </div>
            </div>
        </section>
    )
}

AboutDetails.propTypes = {}

export default AboutDetails
