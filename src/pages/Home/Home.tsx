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

    const goToLink = (path: string) => {
        return navigate(`${path}`)
    }

    const slides: SliderInterface[] = [
        {
            title: 'Notaria IV de Daule',
            description: 'Servicios en línea',
            img: slider1,
            actions: {
                label: 'Ingresar',
                path: `/servicios-en-linea`
            }
        },
        {
            title: 'Notaria IV de Daule',
            description: 'Servicios en línea',
            img: slider2,
            actions: {
                label: 'Contacto',
                path: `/contacto`
            }
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
