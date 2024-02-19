import React from 'react'
import { Website } from '../../layouts';
import { Faq, PageTitle } from '../../components';
import ImgTitle from '@/images/faq/title.jpg';


export const FaqsPage = () => {
    return (
        <Website>
            <PageTitle title="Preguntas Frecuentes" background={ImgTitle}/>
            <Faq />
        </Website>
    )
}
