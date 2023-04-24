import React, { FC } from 'react'
import Website from '../layouts/Website'
import SliderWrapper from '../components/Slider/SliderWrapper'
import { SliderInterface } from '../components/Slider/SliderInterface'
import slider1 from '../assets/images/main-slider/1.jpg';
import slider2 from '../assets/images/main-slider/2.jpg';
import Section1 from '../components/Home/Section1';
import Section2 from '../components/Home/Section2';
import Section3 from '../components/Home/Section3';
import Section4 from '../components/Home/Section4';
import Section5 from '../components/Home/Section5';
import Section6 from '../components/Home/Section6';
const Home: FC = () => {

	const slides : SliderInterface[] = [
		{
			title: 'Introduce with LawSight',
			description: 'We are here to protect',
			img: slider1,
			callToAction: 'any',
		},
		{
			title: 'Introduce with LawSight2',
			description: 'We are here to protect2',
			img: slider2,
			callToAction: 'any',
		}
	]

    return (
        <Website>
			<SliderWrapper slides={slides}/>
			<Section1/>
			<Section2/>
			<Section3/>
			<Section4/>
			<Section5/>
			<Section6/>
        </Website>
    )
}

export default Home
