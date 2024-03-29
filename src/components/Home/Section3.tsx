import React from 'react'
import homeData from './../../data/home.json'
import Comments from '../Comment/Comments'
import { InlineServices } from '../Common/InlineServices'

export const Section3 = () => {
    const { tramitesEnLInea } = homeData

    return (
        <section
            className="services-section-two"
            // style={{backgroundImage: `url(${BgSection3})`}}
        >
            <div className="container">
                <div className="section-title centered text-center text-md-start">
                    <div className="title">Servicios en línea</div>
                    <h3>
                        {tramitesEnLInea?.title}{' '}
                        <span>{tramitesEnLInea?.titleEnphasis}</span>
                    </h3>
                </div>

                <>
                    <InlineServices />
                </>

                <Comments />
            </div>
        </section>
    )
}
