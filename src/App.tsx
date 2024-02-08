import React, { FC, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Register from './pages/Register'
import AboutUs from './pages/AboutUs'
import Services from './pages/Services'
import Testimonials from './pages/Testimonials'
import Faqs from './pages/Faqs'
import Login from './pages/Login'
import { useAuthStore } from './hooks'
import { AuthenticateRoute, GuestRoute } from './components'
import { MyAccount } from './pages/MyAccount'
import { MyRequestsPage } from './pages/MyRequestsPage'
import PermisoSalidaPage from './pages/PermisoSalidaPage'
import { FormRquestPage } from './pages/FormRquestPage'
import { useDispatch } from 'react-redux'
import { onLoadingDependency } from './store'
import { ThankyouRequestPage } from './pages/ThankyouRequestPage'
import CopiaCertificadaPage from './pages/CopiaCertificadaPage'
import DeclaracionJuramentadaPage from './pages/DeclaracionJuramentadaPage'
import PoderesGeneralesPage from './pages/PoderesGeneralesPage'
import { VerifyAccount } from './pages/VerifyAccount'

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

            <Route path="tramites-en-linea">
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

            <Route path="testimonios" element={<Testimonials />} />
            <Route path="preguntas-frecuentes" element={<Faqs />} />
            <Route path="contacto" element={<Contact />} />

            <Route
                path="registro"
                element={
                    <GuestRoute authenticated={status === 'not-authenticated'}>
                        <Register />
                    </GuestRoute>
                }
            />

            <Route
                path="ingreso"
                element={
                    <GuestRoute authenticated={status === 'not-authenticated'}>
                        <Login />
                    </GuestRoute>
                }
            />

            <Route
                path="verificar-cuenta"
                element={
                    <GuestRoute authenticated={status === 'not-authenticated'}>
                        <VerifyAccount />
                    </GuestRoute>
                }
            />

            <Route
                path="mi-cuenta"
                element={
                    <AuthenticateRoute
                        authenticated={status === 'authenticated'}
                    >
                        <MyAccount />
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
