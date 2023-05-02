import React, { Key } from 'react'
import Website from '../layouts/Website'
import PageTitle from '../components/PageTitle/PageTitle'
import Card, { CardInterface } from '../components/Common/Card'
import {
    faBuilding,
    faCheck,
    faFile,
    faHouse,
    faList,
} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router'

const Services = () => {
    const navigate = useNavigate()

    const goToContact = () => {
        return navigate('/contacto')
    }

    const services: CardInterface[] = [
        {
            title: 'Escrituras públicas',
            content: (
                <ul className="text-start">
                    <li
                        className="border-bottom border-1"
                        style={{ borderBottomStyle: 'dashed' }}
                    >
                        Compra venta de bienes inmuebles
                    </li>
                    <li
                        className="border-bottom border-1"
                        style={{ borderBottomStyle: 'dashed' }}
                    >
                        Hipotecas
                    </li>
                    <li
                        className="border-bottom border-1"
                        style={{ borderBottomStyle: 'dashed' }}
                    >
                        Donaciones
                    </li>
                    <li
                        className="border-bottom border-1"
                        style={{ borderBottomStyle: 'dashed' }}
                    >
                        Pactos de opción de compra
                    </li>
                    <li
                        className="border-bottom border-1"
                        style={{ borderBottomStyle: 'dashed' }}
                    >
                        Cesión de derechos y acciones
                    </li>
                    <li
                        className="border-bottom border-1"
                        style={{ borderBottomStyle: 'dashed' }}
                    >
                        Constitución de garantías
                    </li>
                    <li
                        className="border-bottom border-1"
                        style={{ borderBottomStyle: 'dashed' }}
                    >
                        Cancelación de hipotecas
                    </li>
                    <li
                        className="border-bottom border-1"
                        style={{ borderBottomStyle: 'dashed' }}
                    >
                        Ampliación y reducción de capital
                    </li>
                    <li
                        className="border-bottom border-1"
                        style={{ borderBottomStyle: 'dashed' }}
                    >
                        Otorgamiento de testamentos
                    </li>
                </ul>
            ),
            icon: faFile,
            overlay: true,
            overlayTitle: 'Escrituras públicas',
            overlayTitleAction: 'Contáctanos',
            overLayCallAction: () => goToContact(),
        },
        {
            title: 'Constitución de compañías',
            content: (
                <ul className="text-start">
                    <li
                        className="border-bottom border-1"
                        style={{ borderBottomStyle: 'dashed' }}
                    >
                        Registro de sociedades y empresas
                    </li>
                    <li
                        className="border-bottom border-1"
                        style={{ borderBottomStyle: 'dashed' }}
                    >
                        Modificaciones de estatutos
                    </li>
                    <li
                        className="border-bottom border-1"
                        style={{ borderBottomStyle: 'dashed' }}
                    >
                        Ampliación de capital
                    </li>
                    <li
                        className="border-bottom border-1"
                        style={{ borderBottomStyle: 'dashed' }}
                    >
                        Asambleas generales
                    </li>
                    <li
                        className="border-bottom border-1"
                        style={{ borderBottomStyle: 'dashed' }}
                    >
                        Liquidación de sociedades y empresas
                    </li>
                    <li
                        className="border-bottom border-1"
                        style={{ borderBottomStyle: 'dashed' }}
                    >
                        Reformas a los estatutos de la empresa
                    </li>
                </ul>
            ),
            icon: faBuilding,
            overlay: true,
            overlayTitle: 'Constitución de compañías',
            overlayTitleAction: 'Contáctanos',
            overLayCallAction: () => goToContact(),
        },
        {
            title: 'Poderes',
            content: (
                <ul className="text-start">
                    <li
                        className="border-bottom border-1"
                        style={{ borderBottomStyle: 'dashed' }}
                    >
                        Poderes especiales
                    </li>
                    <li
                        className="border-bottom border-1"
                        style={{ borderBottomStyle: 'dashed' }}
                    >
                        Poderes generales
                    </li>
                    <li
                        className="border-bottom border-1"
                        style={{ borderBottomStyle: 'dashed' }}
                    >
                        Poderes especiales de administración
                    </li>
                    <li
                        className="border-bottom border-1"
                        style={{ borderBottomStyle: 'dashed' }}
                    >
                        Poderes especiales de venta
                    </li>
                    <li
                        className="border-bottom border-1"
                        style={{ borderBottomStyle: 'dashed' }}
                    >
                        Poderes especiales de cobro
                    </li>
                </ul>
            ),
            icon: faCheck,
            overlay: true,
            overlayTitle: 'Poderes',
            overlayTitleAction: 'Contáctanos',
            overLayCallAction: () => goToContact(),
        },
        {
            title: 'Testamentos',
            content: (
                <ul className="text-start">
                    <li
                        className="border-bottom border-1"
                        style={{ borderBottomStyle: 'dashed' }}
                    >
                        Testamento público abierto
                    </li>
                    <li
                        className="border-bottom border-1"
                        style={{ borderBottomStyle: 'dashed' }}
                    >
                        Testamento cerrado
                    </li>
                    <li
                        className="border-bottom border-1"
                        style={{ borderBottomStyle: 'dashed' }}
                    >
                        Codicilos
                    </li>
                </ul>
            ),
            icon: faList,
            overlay: true,
            overlayTitle: 'Testamentos',
            overlayTitleAction: 'Contáctanos',
            overLayCallAction: () => goToContact(),
        },
        {
            title: 'Trámites ante el Registro de la Propiedad',
            content: (
                <ul className="text-start">
                    <li
                        className="border-bottom border-1"
                        style={{ borderBottomStyle: 'dashed' }}
                    >
                        Inscripción de escrituras públicas
                    </li>
                    <li
                        className="border-bottom border-1"
                        style={{ borderBottomStyle: 'dashed' }}
                    >
                        Levantamiento de gravámenes
                    </li>
                    <li
                        className="border-bottom border-1"
                        style={{ borderBottomStyle: 'dashed' }}
                    >
                        Saneamiento de escrituras públicas
                    </li>
                    <li
                        className="border-bottom border-1"
                        style={{ borderBottomStyle: 'dashed' }}
                    >
                        Rectificación de partidas
                    </li>
                </ul>
            ),
            icon: faHouse,
            overlay: true,
            overlayTitle: 'Trámites ante el Registro de la Propiedad',
            overlayTitleAction: 'Contáctanos',
            overLayCallAction: () => goToContact(),
        },
    ]

    return (
        <Website>
            <PageTitle title="Trámites en línea" />
            <section className="services-section-four">
                <div className="container">
                    <div className="section-title centered">
                        <div className="title">Trámites en línea</div>
                        <h3>
                            ofrecemos una gran variedad de <br />
                            servicios con nuestra <span>experiencia</span>
                        </h3>
                    </div>
                    <div className="row clearfix">
                        {services.map((service: CardInterface, key: Key) => (
                            <Card card={service} key={key} />
                        ))}
                    </div>
                </div>
            </section>
        </Website>
    )
}

export default Services
