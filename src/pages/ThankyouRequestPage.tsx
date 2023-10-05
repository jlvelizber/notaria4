import React from 'react'
import Website from '../layouts/Website'
import PageTitle from '../components/PageTitle/PageTitle'

import ImgTitle from './../assets/images/services/servicios-title.jpg'

export const ThankyouRequestPage = () => {
    return (
        <Website>
            <PageTitle title="Trámites en línea" background={ImgTitle} />
            <section className="services-section-four">
                <div className="container">
                    <div className="row clearfix">
                        {' '}
                        <div className="section-title text-center text-md-start">
                            <div className="title">Notaría cuarta de Daule</div>
                            <h3>Gracias por ingresar su requerimiento</h3>
                            <p className='text'>Tramitaremos tu requerimiento con la brevedad posible. Puedes revisar el estado de tu solicitud ingresando a la sección de `Mis Solicitudes` ubicado en el menú superior derecho</p>
                        </div>
                    </div>
                </div>
            </section>
        </Website>
    )
}
