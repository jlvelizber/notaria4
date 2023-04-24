import React from 'react'
import Website from '../layouts/Website'
import PageTitle from '../components/PageTitle/PageTitle'
import Faq from '../components/Faq/Faq'

const Faqs = () => {
    return (
        <Website>
            <PageTitle title="Preguntas Frecuentes" />
            <Faq />
        </Website>
    )
}

export default Faqs
