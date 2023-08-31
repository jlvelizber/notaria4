import React, { SyntheticEvent } from 'react'
import { Alert } from 'react-bootstrap'
import { useAuthStore, useForm } from '../../hooks'
import { LoginUserInterface } from '../../interfaces'

const LoginFieldsForm: LoginUserInterface = {
    email: '',
    password: '',
}

export const LoginForm = () => {
    const { startLogin, errorMessage } = useAuthStore()
    const { formState, onInputChange } = useForm(LoginFieldsForm)

    const handleSubmit = async (event: SyntheticEvent<HTMLFormElement>) => {
        event.stopPropagation()
        event.preventDefault()

        await startLogin(formState)
    }

    return (
        <>
            {errorMessage?.message && (
                <Alert show={true} variant="danger" dismissible>
                    {errorMessage.message}
                </Alert>
            )}

            <form method="post" onSubmit={handleSubmit} id="contact-form">
                <h5>
                    <strong>Ingrese sus credenciales</strong>
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
                    <button type="submit" className="theme-btn btn-style-one">
                        Ingresar
                    </button>
                </div>
            </form>
        </>
    )
}
