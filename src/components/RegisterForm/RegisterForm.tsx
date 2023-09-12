import React, { FC, SyntheticEvent, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { RegisterUserInterface } from '../../interfaces'
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
    const navigate = useNavigate()

    const {
        startRegister,
        errors: { message: errorMessage, fieldValues, errors: fieldErrors },
    } = useAuthStore()
    const { formState, onInputChange, onResetForm } =
        useForm(RegisterFieldsForm)

    const handleSubmit = async (event: SyntheticEvent<HTMLFormElement>) => {
        event.stopPropagation()
        event.preventDefault()

        const wasSuccess = await startRegister(formState)
        if (wasSuccess) navigate('/')
    }

    // Una vez que hay error registramos en el use form los datos
    useEffect(() => {
        onResetForm(fieldValues)
    }, [fieldValues])

    return (
        <>
            {errorMessage && (
                <Alert show={true} variant="danger" dismissible>
                    {errorMessage}
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
                                fieldErrors?.identification_type &&
                                'is-invalid error'
                            }
                        >
                            <option value="">Tipo de identificación</option>
                            <option value="cedula">Cédula</option>
                            <option value="pasaporte">Pasaporte</option>
                        </select>

                        <div className="invalid-feedback">
                            {fieldErrors?.identification_type}
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
                                fieldErrors?.identification_num &&
                                'is-invalid error'
                            }
                        />
                        <div className="invalid-feedback">
                            {fieldErrors?.identification_num}
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
                            className={fieldErrors?.name && 'is-invalid error'}
                        />
                        <div className="invalid-feedback">
                            {fieldErrors?.name}
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
                                fieldErrors?.midle_name && 'is-invalid error'
                            }
                        />
                        <div className="invalid-feedback">
                            {fieldErrors?.midle_name}
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
                                fieldErrors?.first_last_name &&
                                'is-invalid error'
                            }
                        />
                        <div className="invalid-feedback">
                            {fieldErrors?.first_last_name}
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
                                fieldErrors?.second_last_name &&
                                'is-invalid error'
                            }
                        />
                        <div className="invalid-feedback">
                            {fieldErrors?.second_last_name}
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
                        className={fieldErrors?.email && 'is-invalid error'}
                    />
                    <div className="invalid-feedback">{fieldErrors?.email}</div>
                </div>
                <div className="mb-3">
                    <input
                        type="password"
                        name="password"
                        value={formState?.password}
                        placeholder="Contraseña"
                        onChange={onInputChange}
                        disabled={status === 'checking'}
                        className={fieldErrors?.password && 'is-invalid error'}
                    />
                    <div className="invalid-feedback">
                        {fieldErrors?.password}
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
                            fieldErrors?.password_confirmation &&
                            'is-invalid error'
                        }
                    />
                    <div className="invalid-feedback">
                        {fieldErrors?.password_confirmation}
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
