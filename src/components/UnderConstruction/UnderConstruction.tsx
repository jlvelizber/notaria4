import React from 'react'
import UnderConsutrccionImg from './../../assets/images/under_construction.svg'
import LogoNotaria from './../../assets/images/logo-notaria4-daule.png'

export const UnderConstruction = () => {
    return (
        <div className="container h-100 my-5 rounded bg-light">
            <div className="row align-items-center">
                <div className="col-12 col-md-6 text-center">
                    <h1 className="text-center fs-1 fw-bold">
                        Página en construcción
                    </h1>
                    <img src={`${LogoNotaria}`} alt="Notaria 4 de Daule" />
                </div>
                <div className="col-sm-12 col-md-6">
                    <img
                        src={`${UnderConsutrccionImg}`}
                        className="img-fluid"
                    />
                </div>
            </div>
        </div>
    )
}
