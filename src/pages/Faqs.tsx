import React from 'react'
import Website from '../layouts/Website'
import PageTitle from '../components/PageTitle/PageTitle'
import Faq from '../components/Faq/Faq'
import ImgTitle from './../assets/images/faq/title.jpg';


const Faqs = () => {
    return (
        <Website>
            <PageTitle title="Preguntas Frecuentes" background={ImgTitle}/>
            <Faq />
        </Website>
    )
}

export default Faqs
