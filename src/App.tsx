import React, { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuthStore } from './hooks'
import { onLoadingDependency } from './store'
import { ThankyouRequestPage } from './pages/ThankyouRequestPage'

import {
    AboutUs,
    ContactPage,
    CopiaCertificadaPage,
    DeclaracionJuramentadaPage,
    FaqsPage,
    FormRquestPage,
    Home,
    LoginPage,
    MyAccountPage,
    PermisoSalidaPage,
    PoderesGeneralesPage,
    RegisterPage,
    Services,
    TestimonialsPage,
    VerifyAccountPage,
    MyRequestsPage,
} from './pages'

import { AuthenticateRoute, GuestRoute } from './components'

const App: FC = () => {
    const dispatch = useDispatch()
    const { checkAuthToken, status } = useAuthStore()

    useEffect(() => {
        checkAuthToken()
        dispatch(onLoadingDependency(false))
    }, [])

    if (status === 'checking') {
        return <h1>Cargando...</h1>
    }

    return (
        <Routes>
            <Route path="/" element={<Home />} />

            <Route path="quines-somos" element={<AboutUs />} />

            <Route path="servicios-en-linea">
                <Route path="" element={<Services />} />

                <Route path="permiso-salida">
                    <Route path="" element={<PermisoSalidaPage />} />
                    <Route path=":codeForm" element={<FormRquestPage />} />
                </Route>

                <Route path="copia-certificada">
                    <Route path="" element={<CopiaCertificadaPage />} />
                    <Route path=":codeForm" element={<FormRquestPage />} />
                </Route>

                <Route path="declaracion-juramentada">
                    <Route path="" element={<DeclaracionJuramentadaPage />} />
                    <Route path=":codeForm" element={<FormRquestPage />} />
                </Route>

                <Route path="poderes-generales">
                    <Route path="" element={<PoderesGeneralesPage />} />
                    <Route path=":codeForm" element={<FormRquestPage />} />
                </Route>
                <Route path="gracias" element={<ThankyouRequestPage />} />
            </Route>

            <Route path="testimonios" element={<TestimonialsPage />} />

            <Route path="preguntas-frecuentes" element={<FaqsPage />} />
            <Route path="contacto" element={<ContactPage />} />

            <Route
                path="registro"
                element={
                    <GuestRoute authenticated={status === 'not-authenticated'}>
                        <RegisterPage />
                    </GuestRoute>
                }
            />

            <Route
                path="ingreso"
                element={
                    <GuestRoute authenticated={status === 'not-authenticated'}>
                        <LoginPage />
                    </GuestRoute>
                }
            />

            <Route
                path="verificar-cuenta"
                element={
                    <GuestRoute authenticated={status === 'not-authenticated'}>
                        <VerifyAccountPage />
                    </GuestRoute>
                }
            />

            <Route
                path="mi-cuenta"
                element={
                    <AuthenticateRoute
                        authenticated={status === 'authenticated'}
                    >
                        <MyAccountPage />
                    </AuthenticateRoute>
                }
            />

            <Route
                path="mis-solicitudes"
                element={
                    <AuthenticateRoute
                        authenticated={status === 'authenticated'}
                    >
                        <MyRequestsPage />
                    </AuthenticateRoute>
                }
            />

            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
    )
}

export default App
