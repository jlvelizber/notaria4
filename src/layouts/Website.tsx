import React, { FC, ReactNode } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ScrollTop from '../components/ScrollTop/ScrollTop'

export const Website: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <>
            <div className="page-wrapper">
                <Header />
                {children}
                <Footer />
            </div>
            <ScrollTop />
        </>
    )
}
