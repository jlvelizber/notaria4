import React, { FC, SyntheticEvent } from 'react'
import { RegisterUserInterface } from '../../interfaces'
import { RootState } from '../../store'
import { useSelector } from 'react-redux'
import { useAuthStore, useForm } from '../../hooks'
import { Alert } from 'react-bootstrap'

const RegisterFieldsForm: RegisterUserInterface = {
    identification_type: '',
    identification_num: '',
    name: '',
    midle_name: '',
    first_last_name: '',
    second_last_name: '',
    email: '',
    password: '',
    password_confirmation: '',
}

export const RegisterForm: FC = () => {
    const status = useSelector((state: RootState) => state.auth.status)

    const { startRegister, errorMessage } = useAuthStore()
    const { formState, onInputChange } = useForm(RegisterFieldsForm)

    const handleSubmit = async (event: SyntheticEvent<HTMLFormElement>) => {
        event.stopPropagation()
        event.preventDefault()

        await startRegister(formState)
    }

    console.log(errorMessage)

    return (
        <>
            {errorMessage?.message && (
                <Alert show={true} variant="danger" dismissible>
                    {errorMessage.message}
                </Alert>
            )}

            <form method="post" onSubmit={handleSubmit} id="contact-form">
                <h5>
                    <strong>Datos Personales</strong>
                </h5>
                <hr />
                {/* Otra columna */}
                <div className="row align-items-start">
                    <div className="mb-3 col-12 col-md-6 ">
                        <select
                            name="identification_type"
                            value={formState?.identification_type}
                            placeholder="Tipo de identificación"
                            required
                            onChange={onInputChange}
                            disabled={status === 'checking'}
                            className={
                                errorMessage?.errors.identification_type &&
                                'is-invalid error'
                            }
                        >
                            <option value="">Tipo de identificación</option>
                            <option value="cedula">Cédula</option>
                            <option value="pasaporte">Pasaporte</option>
                        </select>

                        <div className="invalid-feedback">
                            {errorMessage?.errors.identification_type}
                        </div>
                    </div>
                    <div className="mb-3 col-12 col-md-6 ">
                        <input
                            type="text"
                            name="identification_num"
                            value={formState?.identification_num}
                            placeholder="Identificación"
                            onChange={onInputChange}
                            disabled={status === 'checking'}
                            className={
                                errorMessage?.errors.identification_num &&
                                'is-invalid error'
                            }
                        />
                        <div className="invalid-feedback">
                            {errorMessage?.errors.identification_num}
                        </div>
                    </div>
                </div>
                {/* Otra columna */}
                <div className="row align-items-start">
                    <div className="mb-3 col-12 col-md-6 ">
                        <input
                            type="text"
                            name="name"
                            value={formState?.name}
                            placeholder="Primer Nombre"
                            onChange={onInputChange}
                            disabled={status === 'checking'}
                            className={
                                errorMessage?.errors.name && 'is-invalid error'
                            }
                        />
                        <div className="invalid-feedback">
                            {errorMessage?.errors.name}
                        </div>
                    </div>

                    <div className="mb-3 col-12 col-md-6 ">
                        <input
                            type="text"
                            name="midle_name"
                            value={formState?.midle_name}
                            placeholder="Segundo Nombre"
                            onChange={onInputChange}
                            disabled={status === 'checking'}
                            className={
                                errorMessage?.errors.midle_name &&
                                'is-invalid error'
                            }
                        />
                        <div className="invalid-feedback">
                            {errorMessage?.errors.midle_name}
                        </div>
                    </div>
                </div>

                {/* Otra columna */}
                <div className="row align-items-start">
                    <div className="mb-3 col-12 col-md-6 ">
                        <input
                            type="text"
                            name="first_last_name"
                            value={formState.first_last_name}
                            placeholder="Primer Apellido"
                            onChange={onInputChange}
                            disabled={status === 'checking'}
                            className={
                                errorMessage?.errors.first_last_name &&
                                'is-invalid error'
                            }
                        />
                        <div className="invalid-feedback">
                            {errorMessage?.errors.first_last_name}
                        </div>
                    </div>
                    <div className="mb-3 col-12 col-md-6 ">
                        <input
                            type="text"
                            name="second_last_name"
                            value={formState.second_last_name}
                            placeholder="Segundo Apellido"
                            onChange={onInputChange}
                            disabled={status === 'checking'}
                            className={
                                errorMessage?.errors.second_last_name &&
                                'is-invalid error'
                            }
                        />
                        <div className="invalid-feedback">
                            {errorMessage?.errors.second_last_name}
                        </div>
                    </div>
                </div>
                <h5>
                    <strong>Datos de Cuenta</strong>
                </h5>
                <hr />
                <div className="mb-3">
                    <input
                        type="text"
                        name="email"
                        value={formState?.email}
                        placeholder="Correo electrónico"
                        onChange={onInputChange}
                        disabled={status === 'checking'}
                        className={
                            errorMessage?.errors.email && 'is-invalid error'
                        }
                    />
                    <div className="invalid-feedback">
                        {errorMessage?.errors.email}
                    </div>
                </div>
                <div className="mb-3">
                    <input
                        type="password"
                        name="password"
                        value={formState?.password}
                        placeholder="Contraseña"
                        onChange={onInputChange}
                        disabled={status === 'checking'}
                        className={
                            errorMessage?.errors.password && 'is-invalid error'
                        }
                    />
                    <div className="invalid-feedback">
                        {errorMessage?.errors.password}
                    </div>
                </div>
                <div className="mb-3">
                    <input
                        type="password"
                        name="password_confirmation"
                        value={formState?.password_confirmation}
                        placeholder="Confirmar contraseña"
                        onChange={onInputChange}
                        disabled={status === 'checking'}
                        className={
                            errorMessage?.errors.password_confirmation &&
                            'is-invalid error'
                        }
                    />
                    <div className="invalid-feedback">
                        {errorMessage?.errors.password_confirmation}
                    </div>
                </div>

                <div className="mb-3">
                    <button type="submit" className="theme-btn btn-style-one">
                        Registrarse
                    </button>
                </div>
            </form>
        </>
    )
}
