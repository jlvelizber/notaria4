import React, { FC } from 'react'
import Website from '../layouts/Website'
import SliderWrapper from '../components/Slider/SliderWrapper'
import { SliderInterface } from '../components/Slider/SliderInterface'
import slider1 from '../assets/images/main-slider/notaria-slider.jpg'
import slider2 from '../assets/images/main-slider/notaria-slider-2.jpg'
import Section1 from '../components/Home/Section1'
import Section2 from '../components/Home/Section2'
import Section3 from '../components/Home/Section3'
import Section4 from '../components/Home/Section4'
import Section5 from '../components/Home/Section5'
import Section6 from '../components/Home/Section6'
import { useNavigate } from 'react-router'
import { UnderConstruction } from '../components'
const Home: FC = () => {
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
        // <Website>
        // 	<SliderWrapper slides={slides}/>
        // 	<Section2/>
        // 	<Section3/>
        // 	<Section4/>
        // 	<Section5/>
        // 	<Section6/>
        // </Website>
        <UnderConstruction />
    )
}

export default Home
