import React, { FC } from 'react'
import logo from './../assets/images/logo-small.png'

export const Maintance: FC = () => {
    return (
        <div className="maintance-body">
            <div className="maintance-container">
                <h1>Estamos construyendo</h1>
                <p>
                    Estamos realizando nuestro nuestro sitio web. <br />   Pronto volveremos
                </p>
                <img
                    src={logo}
                    alt="Notaría 4 de Daule"
                    
                />
            </div>
        </div>
    )
}
