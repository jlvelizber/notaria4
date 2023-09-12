import React from 'react'
import Website from '../../layouts/Website'
import PageTitle from '../PageTitle/PageTitle'

export const MyRequests = () => {
    return (
        <Website>
            <PageTitle title="Mis solicitudes" background={''} />
             {/* <!--End Page Title--> */}
            {/* <!-- Contact Page Section --> */}
            <section className="contact-page-section">
                <div className="container">
                    <div className="inner-container">
                        <div>Mis SOlicitudes</div>
                    </div>
                </div>
            </section>
        </Website>
    )
}
