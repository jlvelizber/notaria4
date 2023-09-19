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
import { MyRequests } from './pages/MyRequests'

const App: FC = () => {
    const { checkAuthToken, status } = useAuthStore()

    useEffect(() => {
        checkAuthToken()
    }, [])

  
    if (status === 'checking') {
        return <h1>Cargando...</h1>
    }

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="quines-somos" element={<AboutUs />} />
            <Route path="tramites-en-linea" element={<Services />} />
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
                        <MyRequests />
                    </AuthenticateRoute>
                }
            />

            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
    )
}

export default App
