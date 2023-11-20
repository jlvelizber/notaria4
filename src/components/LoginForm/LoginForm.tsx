import React, { FC, SyntheticEvent, useEffect } from 'react'
import { Alert } from 'react-bootstrap'
import { useAuthStore, useForm } from '../../hooks'
import { LoginUserInterface } from '../../interfaces'
import { useNavigate } from 'react-router'

const LoginFieldsForm: LoginUserInterface = {
    email: '',
    password: '',
}

export const LoginForm: FC<{ redirectToAccount?: boolean }> = ({
    redirectToAccount = false,
}) => {
    const navigate = useNavigate()
    const {
        startLogin,
        errors: { message: errorMessage, fieldValues, errors: fieldErrors },
    } = useAuthStore()
    const { formState, onInputChange, onResetForm } = useForm(LoginFieldsForm)

    const handleSubmit = async (event: SyntheticEvent<HTMLFormElement>) => {
        event.stopPropagation()
        event.preventDefault()

        const wasSuccess = await startLogin(formState)
        if (wasSuccess) {
            if (redirectToAccount) navigate('/')
        }
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
                        className={fieldErrors.email && 'is-invalid error'}
                    />
                    <div className="invalid-feedback">{fieldErrors.email}</div>
                </div>
                <div className="mb-3">
                    <input
                        type="password"
                        name="password"
                        value={formState?.password}
                        placeholder="Contraseña"
                        onChange={onInputChange}
                        disabled={status === 'checking'}
                        className={fieldErrors.password && 'is-invalid error'}
                    />
                    <div className="invalid-feedback">
                        {fieldErrors.password}
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
