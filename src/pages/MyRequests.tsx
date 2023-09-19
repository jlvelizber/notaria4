import React from 'react'
import Website from '../layouts/Website'
import PageTitle from '../components/PageTitle/PageTitle'
import { MyRequestsTable } from '../components'

export const MyRequests = () => {
    return (
        <Website>
            <PageTitle title="Mis solicitudes" background={''} />
            {/* <!--End Page Title--> */}
            {/* <!-- Contact Page Section --> */}
            <section className="contact-page-section">
                <div className="container">
                    <div className="inner-container">
                        {/* <h2 className="text-center">Mis solicitudes</h2> */}
                        <br/>

                        <div className="row clearfix">
                            <div className="info-column col-12">
                                <MyRequestsTable />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Website>
    )
}
