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

import ImgTitle from './../assets/images/services/servicios-title.jpg'
import { CommonTextInterface } from '../interfaces/Common.interface'
import { Accordion } from 'react-bootstrap'
import { InlineServices } from '../components/Common/InlineServices'

const Services = () => {
    const navigate = useNavigate()

    const classesCard= 'col-lg-4 col-md-6 col-sm-12'

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
            classes: classesCard,
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
            classes: classesCard,
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
            classes: classesCard,
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
            classes: classesCard,
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
            classes: classesCard,
        },
    ]

    const otherServices: CommonTextInterface[] = [
        {
            title: 'Escritura de Declaración Juramentada',
            content: 'Cédula y certificado de votación del compareciente',
        },
        {
            title: 'Garantía económica',
            content:
                'Cédula y certificado de votación del compareciente y cédula de aquí en garantiza', // TODO
        },
        {
            title: 'Permiso de salida del país para menores',
            content:
                'Petición dirigida a la Notaría, cédula y certificación de  votación de papá, mamá, menor y de la persona con quien sale',
        },
        {
            title: 'Escritura de Información sumaria',
            content:
                'Cédula  y certificado de votación del compareciente con 2 testigos.',
        },
        {
            title: 'Escritura de poder General; poder especial; y procuración Judicial',
            content:
                'Cédula y certificado de votación del compareciente y cédula de a quien da el poder.',
        },
        {
            title: 'Escritura de Compraventa',
        },
        {
            title: 'Certificado de avalúo por el municipio del cantón donde se encuentra el bien',
        },
        {
            title: 'Impuesto predial del año en curso ',
        },
        {
            title: 'Certificado de Historia de Dominio emitido por el Registro de la Propiedad cédula y votación de vendedor y comprador',
        },
        {
            title: 'Escritura de Donación',
        },
        {
            title: 'Escritura de Donación',
            content:
                'Carta 2 originales firmado con bolígrafo azul, cédula y certificado de votación de la persona o personas que forman',
        },
        {
            title: 'Reconocimiento de firma para venta de vehículo',
            content: `Contrato de venta 3 originales 
            Certificado de registro único vehicular vigente 
            Original y copia de la matrícula 
            Original y copia de la cédula y votación de los compareciente
            Certificación de documentos igual al original 
            Original y copia del documento a certificar
            `,
        },
        {
            title: 'Materialización de documentos electrónicos',
            content:
                'Dar información de donde se baja el documento para poder ser impreso en notaria (buscar)',
        },
        {
            title: 'Inscripción de Contratos de arrendamientos',
            content:
                'Contrato por triplicado Cédula y certificado de votación del arrendador, arrendatario y garante si es que lo hay y copia del predio a ser arrendado.',
        },
        {
            title: 'Escritura de Constitución de compañías',
            content:
                'Aprobación del nombre de la Compañía a constituirse emitido por la Superintendencia de Compañías,  cédula y certificado de votación de los accionistas de la Compañia a constituirse, minuta firmada por un abogado con su respectiva credencial en que se le acredite como abogado.',
        },
        {
            title: 'Escritura de posesión efectiva',
            content: `Presentar certificado de defunción del causante
            Certificado de nacimiento de los herederos, siempre y cuando haya hijos, por medio de cédula y certificados de votación de los herederos. 
            Si es un bien inmueble presentar certificado de historia de dominio 
            Impuesto predial
            Pago y/o liberatorio del impuesto a la herencia
            `,
        },
        {
            title: 'Amojonamiento de predio rústico (linderos y medidas del terreno)',
            content: `Petición dirigida a la notaría firmado por un abogado y peticionario certificado de historia de dominio impuesto predial y avalúo del año en curso 
            Cédula y certificado de votación del peticionario y credencial del abogado patrocinador
            Plano con las dimensiones y coordenadas UTM del predio a inspeccionar`,
        },
    ]

    return (
        <Website>
            <PageTitle title="Trámites en línea" background={ImgTitle} />
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
                        <InlineServices/>
                        
                    </div>
                </div>
            </section>

            <section className="services-section-four">
                <div className="container">
                    <div className="section-title centered">
                        <div className="title">Otros servicios</div>
                        <h3>
                            En la Notaría IV de Daule <br /> se realizan los
                            siguientes <span>trámites</span>
                        </h3>
                    </div>
                    <div className="row clearfix p-md-4 mx-auto">
                    {services.map((service: CardInterface, key: Key) => (
                            <Card card={service} key={key} />
                        ))}
                    <Accordion>
                                {otherServices.map((faq: CommonTextInterface, idx: Key) => {
                                    return (
                                        <Accordion.Item
                                            eventKey={`${idx}`}
                                            key={idx}
                                        >
                                            <Accordion.Button className="py-3">
                                                {faq.title}
                                            </Accordion.Button>
                                            {
                                                faq.content && (
                                                    <Accordion.Body>
                                                        <strong>Requisitos:</strong> <br/>
                                                        {faq.content}
                                                    </Accordion.Body>
                                                )
                                            }
                                        </Accordion.Item>
                                    )
                                })}
                            </Accordion>
                        </div>
                </div>
            </section>
        </Website>
    )
}

export default Services
