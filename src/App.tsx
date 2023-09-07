import React, { FC, ReactNode, useEffect } from 'react'
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
import { MyAccount } from './components/MyAccount'

const App: FC = () => {
    const { status: StatusAuth, checkAuthToken } = useAuthStore()

    useEffect(() => {
        checkAuthToken()
    }, [])
    

    if (StatusAuth === 'checking') {
        return <h1>Cargando...</h1>
    }

   

    const getRoutesAuhtRoutes = () => {
        if (StatusAuth === 'not-authenticated') {
            return (
                <>
                    <Route path="registro" element={<Register />} />
                    <Route path="ingreso" element={<Login />} />
                    <Route path="/*" element={<Navigate to="/" />} />
                </>
            )
        } else if (StatusAuth === 'authenticated') {
            return (
                <>
                    <Route path="mi-cuenta" element={<MyAccount />} />{' '}
                    <Route path="/*" element={<Navigate to="/" />} />
                </>
            )
        } else {
            return <Route path="/*" element={<Navigate to="/" />} />
        }
    }

    return (
        <Routes>
            {/* <Route path="/*" element={<Maintance />} /> */}
            <Route path="/" element={<Home />} />
            <Route path="quines-somos" element={<AboutUs />} />
            <Route path="tramites-en-linea" element={<Services />} />
            <Route path="testimonios" element={<Testimonials />} />
            <Route path="preguntas-frecuentes" element={<Faqs />} />
            <Route path="contacto" element={<Contact />} />

            {getRoutesAuhtRoutes()}
        </Routes>
    )
}

export default App
