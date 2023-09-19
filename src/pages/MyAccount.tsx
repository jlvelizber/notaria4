import React from 'react'
import Website from '../layouts/Website'

import PageTitle from '../components/PageTitle/PageTitle'

export const MyAccount = () => {
    return (
        <Website>
            <PageTitle title="Mi Cuenta" background={''} />
            {/* <!--End Page Title--> */}
            {/* <!-- Contact Page Section --> */}
            <section className="contact-page-section">
                <div className="container">
                    <div className="inner-container">
                        <div>MyAccount</div>
                    </div>
                </div>
            </section>
        </Website>
    )
}
