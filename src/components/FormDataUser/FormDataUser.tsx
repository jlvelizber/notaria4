import React, {
    FC,
    Key,
    ReactNode,
    SyntheticEvent,
    useEffect,
    useState,
} from 'react'
import { CountryInterface, RegisterUserInterface } from '../../interfaces'
import { useCollections, useForm } from '../../hooks'

export const FormDataUser: FC<{
    dataUser: RegisterUserInterface
    handleSubmit: (
        event: SyntheticEvent<HTMLFormElement>,
        postData: RegisterUserInterface
    ) => void
    fieldValues: RegisterUserInterface
    fieldErrors: RegisterUserInterface
    canInsertAccountData?: boolean
    children?: ReactNode
}> = ({
    dataUser,
    handleSubmit,
    fieldErrors,
    children,
    canInsertAccountData = true,
}) => {
    const { formState, onInputChange, fieldValues, onResetForm } =
        useForm(dataUser)

    const { getListCountries } = useCollections()

    const [countries, setCountries] = useState<CountryInterface[]>([])

    // Una vez que hay error registramos en el use form los datos

    const loadCollections = async () => {
        const countriesData = await getListCountries()
        if (countriesData?.length) setCountries(countriesData)
    }

    const onsubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
        handleSubmit(e, formState)
    }

    useEffect(() => {
        loadCollections()
    }, [])

    useEffect(() => {
        onResetForm(fieldValues)
    }, [fieldValues])

    return (
        <form method="post" onSubmit={onsubmit} id="contact-form">
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
                    <div className="invalid-feedback">{fieldErrors?.name}</div>
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
                            fieldErrors?.first_last_name && 'is-invalid error'
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
                            fieldErrors?.second_last_name && 'is-invalid error'
                        }
                    />
                    <div className="invalid-feedback">
                        {fieldErrors?.second_last_name}
                    </div>
                </div>
            </div>
            {/* Otra columna */}
            <div className="row align-items-start">
                <div className="mb-3 col-12 col-md-12 ">
                    <select
                        name="country_id"
                        value={formState?.country_id}
                        placeholder="Nacionalidad"
                        required
                        onChange={onInputChange}
                        disabled={status === 'checking'}
                        className={
                            fieldErrors?.country_id && 'is-invalid error'
                        }
                    >
                        <option value="">Nacionalidad</option>
                        {countries &&
                            countries.map(
                                (country: CountryInterface, id: Key) => (
                                    <option value={country.id} key={id}>
                                        {country.name}
                                    </option>
                                )
                            )}
                    </select>
                    <div className="invalid-feedback">
                        {fieldErrors?.first_last_name}
                    </div>
                </div>
            </div>
            {canInsertAccountData && (
                <>
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
                        <div className="invalid-feedback">
                            {fieldErrors?.email}
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
                                fieldErrors?.password && 'is-invalid error'
                            }
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
                </>
            )}

            {children}
        </form>
    )
}
