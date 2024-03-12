import React, { FC } from 'react'
import { useNavigate } from 'react-router'
import { Website } from '../../layouts'
import {
    Section2,
    Section3,
    Section4,
    Section5,
    Section6,
    SliderInterface,
    SliderWrapper,
} from '../../components'
import slider1 from '@/images/main-slider/notaria-slider.webp'
import slider2 from '@/images/main-slider/notaria-slider-2.webp'
export const Home: FC = () => {
    const navigate = useNavigate()

    const goToContact = () => {
        return navigate('/contacto')
    }

    const slides: SliderInterface[] = [
        {
            title: 'Notaria IV de Daule',
            description: 'Trámites en línea',
            img: slider1,
            callToAction: () => goToContact(),
        },
        {
            title: 'Notaria IV de Daule',
            description: 'Trámites en línea',
            img: slider2,
            callToAction: () => goToContact(),
        },
    ]

    return (
        <Website>
            <SliderWrapper slides={slides} />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
        </Website>
    )
}