import React from 'react'
import Card, { CardInterface } from './Card'
import { faFileCircleCheck, faPlane } from '@fortawesome/free-solid-svg-icons'
import OverlayPermisoSalida from './../../assets/images/home/permiso-salida-notaria4.webp'
import OverdeclaracionJurada from './../../assets/images/home/declaracion-jurada.webp'
import OverCopiaCertificada from './../../assets/images/home/copia-certificada.webp'
import OverFirmaPoderes from './../../assets/images/home/firma-poderes.webp'
import { useNavigate } from 'react-router'

export const InlineServices = () => {
    const navigate = useNavigate()

    const classesCard = 'col-lg-6 col-md-6 col-sm-12'

    const goToContact = () => {
        return navigate('/contacto')
    }

    const servicesOnHome: CardInterface[] = [
        {
            title: 'Permisos de Salida',
            overLayCallAction: () => goToContact(),
            overlay: true,
            overlayTitle: 'Permisos de Salida',
            overlayTitleAction: 'Solicitar',
            icon: faPlane,
            content: (
                <p className="text-justify">
                    Documento mediante el cual el padre, la madre o de quien
                    ejerce la patria potestad, autoriza la SALIDA DEL ECUADOR de
                    un menor de edad.
                </p>
            ),
            overlayImg: OverlayPermisoSalida,
            classes: classesCard,
        },
        {
            title: 'Declaración Juramentada',
            overLayCallAction: () => goToContact(),
            overlay: true,
            overlayTitle: 'Declaración Juramentada',
            overlayTitleAction: 'Contactar',
            icon: faFileCircleCheck,
            content: (
                <p className="text-justify">
                    Acto mediante el cual los ciudadanos manifiestan de forma
                    escrita, bajo juramento, sobre actos o hechos de los cuales
                    tiene certeza y/o conocimiento.
                </p>
            ),
            overlayImg: OverdeclaracionJurada,
            classes: classesCard,
        },
        {
            title: 'Copia Certificada',
            overLayCallAction: () => goToContact(),
            overlay: true,
            overlayTitle: 'Copia Certificada',
            overlayTitleAction: 'Contactar',
            icon: faFileCircleCheck,
            content: (
                <p className="text-justify">
                    Una copia certificada consiste en la reproducción total o
                    parcial de un documento oficial. Solo se debe tener una
                    copia y el original a certificar
                </p>
            ),
            overlayImg: OverCopiaCertificada,
            classes: classesCard,
        },
        {
            title: 'Poderes Generales',
            overLayCallAction: () => goToContact(),
            overlay: true,
            overlayTitle: 'Poderes Generales',
            overlayTitleAction: 'Contactar',
            icon: faFileCircleCheck,
            content: (
                <p className="text-justify">
                    Una copia certificada consiste en la reproducción total o
                    parcial de un documento oficial. Solo se debe tener una
                    copia y el original a certificar
                </p>
            ),
            overlayImg: OverFirmaPoderes,
            classes: classesCard,
        },
    ]

    return (
        <div className="row clearfix px-md-5">
            {servicesOnHome.map((service: CardInterface, idx: React.Key) => {
                return <Card card={service} key={idx} />
            })}
        </div>
    )
}
