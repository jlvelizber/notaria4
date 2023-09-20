import React from 'react'
import Website from '../layouts/Website'
import PageTitle from '../components/PageTitle/PageTitle'

import ImgTitle from './../assets/images/services/servicios-title.jpg'
import { ButtonGoForm } from '../components'

const PermisoSalidaPage = () => {
    return (
        <Website>
            <PageTitle title="Trámites en línea" background={ImgTitle} />
            <section className="services-section-four">
                <div className="container">
                    <div className="row clearfix">
                        <div className="section-title text-center text-md-start">
                            <div className="title">Notaría cuarta de Daule</div>
                            <h3>Permisos de salida</h3>
                        </div>

                        <div className="content-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <div className="text text-justify">
                                    <h3 className="title">Requisitos</h3>
                                    <ol className="requirements-list">
                                        <li>
                                            Cédula o pasaporte original
                                            ecuatoriano vigente (para
                                            extranjeros: pasaporte original
                                            vigente) de quien autoriza.
                                            <ul>
                                                <li>Madre</li>
                                                <li>Padre</li>
                                                <li>
                                                    Quien ejerce patria potestad
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            Copia del documento de identidad
                                            ecuatoriano del menor (cédula o
                                            pasaporte).
                                        </li>
                                        <li>
                                            Información del viaje
                                            <ul>
                                                <li>Motivo de viaje</li>
                                                <li>
                                                    Destino final con escalas
                                                    incluídas.
                                                </li>
                                                <li>
                                                    Fecha de finalización del
                                                    viaje
                                                </li>
                                                <li>
                                                    Lugar de estadía del menor
                                                    en el extranjero:
                                                    <ul>
                                                        <li>Dirección</li>
                                                        <li>Código Postal</li>
                                                        <li>Ciudad</li>
                                                        <li>
                                                            Provincia/Estado/Departamento
                                                        </li>
                                                        <li>Teléfono</li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            Número de cédula o pasaporte y
                                            teléfono de la persona que viajará
                                            con el menor. Si el menor viaja solo
                                            o a cargo del personal de la
                                            aerolínea, debe especificarse el día
                                            de la cita
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>

                        <div className="image-column col-lg-6 col-md-8 col-sm-12">
                            <h3>Permisos de salida disponibles</h3>
                            <ButtonGoForm
                                label="Padre o Madre autorizando a contraparte (Padre o Madre)"
                                actionRoute="autoriza-padre-madre"
                            />
                            <ButtonGoForm
                                label="Menor de edad viaja solo"
                                actionRoute="menor-edad-viaja-solo"
                            />
                            <ButtonGoForm
                                label="Representante con poder especial"
                                actionRoute="poder-especial"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </Website>
    )
}

export default PermisoSalidaPage
