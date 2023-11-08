import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

export const FormDataUserApplicant: FC<{
    title?: string
}> = ({ title }) => {
    const { user } = useSelector((state: RootState) => state.auth)

    return (
        <>
            <h5>
                <strong>{title || "Datos del Solicitante"}</strong>
            </h5>
            <hr />
            <div className="mb-3">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <label className="fw-semibold mb-1">Nombres</label>
                        <input
                            type="text"
                            value={`${user.name}  ${user.midle_name}`}
                            readOnly
                            disabled={true}
                        />
                    </div>
                    <div className="col-12 col-lg-6">
                        <label className="fw-semibold mb-1">Apellidos</label>
                        <input
                            type="text"
                            value={`${user.first_last_name}  ${user.second_last_name}`}
                            readOnly
                            disabled={true}
                        />
                    </div>
                </div>
            </div>
            <div className="mb-3">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <label className="fw-semibold mb-1">Nacionalidad</label>
                        <input
                            type="text"
                            value={`${user.country ? user.country : ''}`}
                            readOnly
                            disabled={true}
                        />
                    </div>
                    <div className="col-12 col-lg-6">
                        <label className="fw-semibold mb-1">
                            Identificación
                        </label>
                        <input
                            type="text"
                            value={`${
                                user.identification_num
                                    ? user.identification_num
                                    : ''
                            } `}
                            readOnly
                            disabled={true}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
