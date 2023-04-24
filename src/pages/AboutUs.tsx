import React from 'react'
import Website from '../layouts/Website'
import PageTitle from '../components/PageTitle/PageTitle';
import About from '../components/About/About';
import AboutDetails from '../components/About/AboutDetails';

const AboutUs = () => {
  return (
    <Website>
          <PageTitle title='¿Quiénes Somos?'/>
          <About/>
          <AboutDetails/>
    </Website>
  )
}

export default AboutUs;
