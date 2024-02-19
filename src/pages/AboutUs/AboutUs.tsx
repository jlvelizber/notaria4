import React from 'react'
import { Website } from '../../layouts'
import ImgTitle from '@/images/about/quienes-somos-bg.jpg'
import { PageTitle, About, AboutDetails } from '../../components'

export const AboutUs = () => {
    return (
        <Website>
            <PageTitle title="¿Quiénes Somos?" background={ImgTitle} />
            <About />
            <AboutDetails />
        </Website>
    )
}