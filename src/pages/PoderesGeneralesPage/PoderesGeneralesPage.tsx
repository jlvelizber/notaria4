import React, { Key, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { useDocFormStore } from '../../hooks'
import { RootState } from '../../store'
import { FormDocInterface } from '../../interfaces'
import { Website } from '../../layouts'
import { ButtonGoForm, PageTitle } from '../../components'
import ImgTitle from '@/images/services/servicios-title.jpg'

export const PoderesGeneralesPage = () => {
    const { getListDocs } = useDocFormStore()
    const docForms = useSelector((state: RootState) => state.docs.docForms)

    useEffect(() => {
        getListDocs('poderes_generales')
    }, [])

    return (
        <Website>
            <PageTitle title="Servicios en línea" background={ImgTitle} />
            <section className="services-section-four">
                <div className="container">
                    <div className="row clearfix">
                        <div className="section-title text-center text-md-start">
                            <div className="title">Notaría cuarta de Daule</div>
                            <h3>
                                Poderes generales para Ciudadanos Ecuatorianos y
                                Extranjeros
                            </h3>
                        </div>

                        <div className="content-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <div className="text text-justify">
                                    <h3 className="title">Requisitos</h3>
                                    <ol className="requirements-list">
                                        <li>Datos del solicitante</li>
                                        <li>
                                            Cédula o pasaporte original
                                            ecuatoriano vigente (para
                                            extranjeros: pasaporte original
                                            vigente)
                                        </li>
                                        <li>
                                            Copia de certificado de votación.
                                        </li>
                                        <li>
                                            Datos del quién recibe los poderes
                                        </li>
                                        <li>
                                            Cédula o pasaporte original
                                            ecuatoriano vigente (para
                                            extranjeros: pasaporte original
                                            vigente) de quién recibe los poderes
                                        </li>
                                        <li>
                                            Copia de certificado de votación de
                                            quién recibe los poderes
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>

                        <div className="image-column col-lg-6 col-md-8 col-sm-12">
                            <h3>Tipos</h3>
                            {docForms.map(
                                (docForm: FormDocInterface, key: Key) => (
                                    <ButtonGoForm
                                        key={key}
                                        label={`Generar ${docForm.name}`}
                                        actionRoute={`${docForm.code_name}`}
                                    />
                                )
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </Website>
    )
}
