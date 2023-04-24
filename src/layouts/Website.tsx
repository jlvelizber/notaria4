import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ScrollTop from '../components/ScrollTop/ScrollTop'

const Website = ({ children }: any): any => {
    return (
        <>
        <div className="page-wrapper">
            <Header />
            {children}
            <Footer />
        </div>
        <ScrollTop/>
        </>
    )
}

export default Website
