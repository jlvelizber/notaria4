import React, { useEffect } from 'react'
import Website from '../layouts/Website'
import PageTitle from '../components/PageTitle/PageTitle'
import { MyRequestsTable } from '../components'
import { useDocFormStore } from '../hooks'

export const MyRequestsPage = () => {
    const { getListMyDocFormRequests, myRequests } = useDocFormStore()

    useEffect(() => {
        getListMyDocFormRequests()
    }, [])

    return (
        <Website>
            <PageTitle title="Mis solicitudes" background={''} />
            {/* <!--End Page Title--> */}
            {/* <!-- Contact Page Section --> */}
            <section className="contact-page-section">
                <div className="container">
                    <div className="inner-container">
                        {/* <h2 className="text-center">Mis solicitudes</h2> */}
                        <br />

                        <div className="row clearfix">
                            <div className="info-column col-12">
                                {myRequests.length > 0 ? (
                                    <MyRequestsTable myRequests={myRequests} />
                                ) : (
                                    <h5>No tiene solicitudes pendientes</h5>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Website>
    )
}
