import React from 'react'
import Website from '../layouts/Website'
import PageTitle from '../components/PageTitle/PageTitle';
import About from '../components/About/About';
import AboutDetails from '../components/About/AboutDetails';
import ImgTitle from './../assets/images/about/quienes-somos-bg.jpg';

const AboutUs = () => {
  return (
    <Website>
          <PageTitle title='¿Quiénes Somos?' background={ImgTitle}/>
          <About/>
          <AboutDetails/>
    </Website>
  )
}

export default AboutUs;
