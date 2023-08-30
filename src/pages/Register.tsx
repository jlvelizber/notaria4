import React, { FC, SyntheticEvent, useEffect } from 'react'
import Website from '../layouts/Website'
import PageTitle from '../components/PageTitle/PageTitle'
import ImgTitle from './../assets/images/contact/title.jpg'
import { useForm } from '../hooks'
import { RegisterUserInterface } from '../interfaces/RegisterUserInterface'

const RegisterFieldsForm: RegisterUserInterface = {
    identification_type: '',
    identification: '',
    name: '',
    middlename: '',
    first_last_name: '',
    second_last_name: '',
    email: '',
    password: '',
    password_confirmation: '',
}

const Contact: FC = () => {
    const { formState, onInputChange, errorMessage } =
        useForm(RegisterFieldsForm)

    const handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
        event.stopPropagation();
        event.preventDefault();
        console.log(formState)
    }

    return (
        <Website>
            <>
                {/* <!--Page Title--> */}
                <PageTitle title="Registro" background={ImgTitle} />

                {/* <!--End Page Title--> */}
                {/* <!-- Contact Page Section --> */}
                <section className="contact-page-section">
                    <div className="container">
                        <div className="inner-container">
                            <h2 className="text-center">
                                Crea un usuario para realizar tus trámites en{' '}
                                <span>línea</span>
                            </h2>
                            <div className="row clearfix">
                                {/* <!-- Info Column --> */}
                                <div className="info-column col-12">
                                    <div className="inner-column">
                                        <div className="text">
                                            <p>
                                                Gracias por tu interés en
                                                nuestros servicios notariales.
                                            </p>
                                            <p>
                                                Estamos aquí para ayudarte en
                                                todos tus trámites legales y
                                                ofrecerte la asesoría
                                                personalizada que necesitas.
                                            </p>
                                            <p>
                                                Por favor, no dudes en
                                                comunicarte con nosotros a
                                                través del siguiente formulario:
                                            </p>
                                        </div>

                                        <div className="contact-form">
                                            <form
                                                method="post"
                                                onSubmit={handleSubmit}
                                                id="contact-form"
                                            >
                                                <h5>
                                                    <strong>
                                                        Datos Personales
                                                    </strong>
                                                </h5>
                                                <hr />
                                                {/* Otra columna */}
                                                <div className="row align-items-start">
                                                    <div className="mb-3 col-12 col-md-6 ">
                                                        <select
                                                            name="identification_type"
                                                            value={
                                                                formState?.identification_type
                                                            }
                                                            placeholder="Tipo de identificación"
                                                            required
                                                            onChange={
                                                                onInputChange
                                                            }
                                                        >
                                                            <option value="">
                                                                Tipo de
                                                                identificación
                                                            </option>
                                                            <option value="cedula">
                                                                Cédula
                                                            </option>
                                                            <option value="cedula">
                                                                Pasaporte
                                                            </option>
                                                        </select>
                                                    </div>
                                                    <div className="mb-3 col-12 col-md-6 ">
                                                        <input
                                                            type="text"
                                                            name="identification"
                                                            value={
                                                                formState?.identification
                                                            }
                                                            placeholder="Identificación"
                                                            onChange={
                                                                onInputChange
                                                            }
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                {/* Otra columna */}
                                                <div className="row align-items-start">
                                                    <div className="mb-3 col-12 col-md-6 ">
                                                        <input
                                                            type="text"
                                                            name="name"
                                                            value={
                                                                formState?.name
                                                            }
                                                            placeholder="Primer Nombre"
                                                            required
                                                            onChange={
                                                                onInputChange
                                                            }
                                                        />
                                                    </div>

                                                    <div className="mb-3 col-12 col-md-6 ">
                                                        <input
                                                            type="text"
                                                            name="middlename"
                                                            value={
                                                                formState?.middlename
                                                            }
                                                            placeholder="Segundo Nombre"
                                                            onChange={
                                                                onInputChange
                                                            }
                                                        />
                                                    </div>
                                                </div>

                                                {/* Otra columna */}
                                                <div className="row align-items-start">
                                                    <div className="mb-3 col-12 col-md-6 ">
                                                        <input
                                                            type="text"
                                                            name="first_last_name"
                                                            value={
                                                                formState?.first_last_name
                                                            }
                                                            placeholder="Primer Apellido"
                                                            onChange={
                                                                onInputChange
                                                            }
                                                        />
                                                    </div>
                                                    <div className="mb-3 col-12 col-md-6 ">
                                                        <input
                                                            type="text"
                                                            name="second_last_name"
                                                            value={
                                                                formState?.second_last_name
                                                            }
                                                            placeholder="Segundo Apellido"
                                                            onChange={
                                                                onInputChange
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                                <h5>
                                                    <strong>
                                                        Datos de Cuenta
                                                    </strong>
                                                </h5>
                                                <hr />
                                                <div className="mb-3">
                                                    <input
                                                        type="text"
                                                        name="email"
                                                        value={formState?.email}
                                                        placeholder="Correo electrónico"
                                                        required
                                                        onChange={onInputChange}
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <input
                                                        type="password"
                                                        name="password"
                                                        value={
                                                            formState?.password
                                                        }
                                                        placeholder="Contraseña"
                                                        required
                                                        onChange={onInputChange}
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <input
                                                        type="password"
                                                        name="password_confirmation"
                                                        value={
                                                            formState?.password_confirmation
                                                        }
                                                        placeholder="Confirmar contraseña"
                                                        required
                                                        onChange={onInputChange}
                                                    />
                                                </div>

                                                <div className="mb-3">
                                                    <button
                                                        type="submit"
                                                        className="theme-btn btn-style-one"
                                                    >
                                                        Registrarse
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        </Website>
    )
}

export default Contact
