import React from 'react'
import homeData from './../../data/home.json';
import Card, { CardInterface } from '../Common/Card';
import { useNavigate } from 'react-router';
import { faFileCircleCheck, faPlane } from '@fortawesome/free-solid-svg-icons';
import Comments from '../Comment/Comments';
import OverlayPermisoSalida from './../../assets/images/home/permiso-salida-notaria4.webp'
import OverdeclaracionJurada from './../../assets/images/home/declaracion-jurada.webp'
import OverCopiaCertificada from './../../assets/images/home/copia-certificada.webp'
import OverFirmaPoderes from './../../assets/images/home/firma-poderes.webp'

const Section3 = () => {

    const navigate = useNavigate();

    const {tramitesEnLInea} = homeData;

    const goToContact = () => {
        return navigate('/contacto')
      }

    const servicesOnHome :CardInterface[] =  [
        {
            title: "Permisos de Salida",
            overLayCallAction: () => goToContact(),
            overlay: true,
            overlayTitle: "Permisos de Salida",
            overlayTitleAction : "Contactar",
            icon: faPlane,
            content:<p className='text-justify'>Documento mediante el cual el padre, la madre o de quien ejerce la patria potestad, autoriza la SALIDA DEL ECUADOR de un menor de edad.</p>,
            overlayImg: OverlayPermisoSalida
        },
        {
            title: "Declaración Juramentada",
            overLayCallAction: () => goToContact(),
            overlay: true,
            overlayTitle: "Declaración Juramentada",
            overlayTitleAction : "Contactar",
            icon: faFileCircleCheck,
            content:<p className='text-justify'>Acto mediante el cual los ciudadanos manifiestan de forma escrita, bajo juramento, sobre actos o hechos de los cuales tiene certeza y/o conocimiento.</p>,
            overlayImg: OverdeclaracionJurada
        },
        {
            title: "Copia Certificada",
            overLayCallAction: () => goToContact(),
            overlay: true,
            overlayTitle: "Copia Certificada",
            overlayTitleAction : "Contactar",
            icon: faFileCircleCheck,
            content:<p className='text-justify'>Una copia certificada consiste en la reproducción total o parcial de un documento oficial. Solo se debe tener una copia y el original a certificar
            </p>,
            overlayImg:OverCopiaCertificada
        },
        {
            title: "Poderes Generales",
            overLayCallAction: () => goToContact(),
            overlay: true,
            overlayTitle: "Poderes Generales",
            overlayTitleAction : "Contactar",
            icon: faFileCircleCheck,
            content:<p className='text-justify'>Una copia certificada consiste en la reproducción total o parcial de un documento oficial. Solo se debe tener una copia y el original a certificar
            </p>,
            overlayImg:OverFirmaPoderes
        },
    ]
    
    return (
        <section
            className="services-section-two"
            // style={{backgroundImage: `url(${BgSection3})`}}
        >
            <div className="container">
                <div className="section-title centered">
                    <div className="title">Trámites en línea</div>
                    <h3>
                    {tramitesEnLInea?.title}  <span>{tramitesEnLInea?.titleEnphasis}</span>
                    </h3>
                </div>
                <div className="row clearfix">
                    {
                        servicesOnHome.map( (service: CardInterface, idx: React.Key) => <Card card={service} key={idx}/>   )
                    }
                </div>

                <Comments/>
            </div>
        </section>
    )
}

export default Section3
