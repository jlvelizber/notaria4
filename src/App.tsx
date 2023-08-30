import React, { FC, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Contact from './pages/Contact'
import Register from './pages/Register'
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Testimonials from './pages/Testimonials';
import Faqs from './pages/Faqs';
import { Maintance } from './pages/Maintance';

const App: FC = () => {
    return (
        <Routes>
            <Route path='/*' element={<Maintance/>}/>
            <Route path="/" element={<Home />} />
            <Route path="quines-somos" element={<AboutUs />} />
            <Route path="tramites-en-linea" element={<Services />} />
            <Route path="testimonios" element={<Testimonials />} />
            <Route path="preguntas-frecuentes" element={<Faqs />} />
            <Route path="contacto" element={<Contact />} />
            <Route path="registro" element={<Register />} />
        </Routes>
    )
}

export default App
