import React from 'react'

export const Section1 = () => {
  return (
    <section className="services-section">
        <div
            className="icon-one wow zoomIn"
            data-wow-delay="250ms"
            data-wow-duration="1500ms"
            // style="background-image: url(images/icons/icon-1.png)"
        ></div>
        <div
            className="icon-two wow fadeInRight"
            data-wow-delay="500ms"
            data-wow-duration="1500ms"
            // style="background-image: url(images/icons/icon-2.png)"
        ></div>
        <div className="container">
            <div className="row clearfix">
                <div className="services-block col-lg-4 col-md-6 col-sm-12">
                    <div
                        className="inner-box wow fadeInUp"
                        data-wow-delay="0ms"
                        data-wow-duration="1500ms"
                    >
                        <div className="border-one"></div>
                        <div className="border-two"></div>
                        <div className="content">
                            <div className="icon-box">
                                <span
                                    className="icon flaticon-family"
                                ></span>
                            </div>
                            <h6>
                                <a href="services-detail.html"
                                    >99% winning guarantee</a>
                            </h6>
                            <div className="text">
                                Lorem ipsum dolor sit amet, con sectetu
                                adipiscing elit, sed do eius mod tempor.
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className="services-block col-lg-4 col-md-6 col-sm-12">
                    <div
                        className="inner-box wow fadeInUp"
                        data-wow-delay="300ms"
                        data-wow-duration="1500ms"
                    >
                        <div className="border-one"></div>
                        <div className="border-two"></div>
                        <div className="content">
                            <div className="icon-box">
                                <span
                                    className="icon flaticon-fingerprint-1"
                                ></span>
                            </div>
                            <h6>
                                <a href="services-detail.html"
                                    >Business Planning</a>
                            </h6>
                            <div className="text">
                                Lorem ipsum dolor sit amet, con sectetu
                                adipiscing elit, sed do eius mod tempor.
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className="services-block col-lg-4 col-md-6 col-sm-12">
                    <div
                        className="inner-box wow fadeInUp"
                        data-wow-delay="600ms"
                        data-wow-duration="1500ms"
                    >
                        <div className="border-one"></div>
                        <div className="border-two"></div>
                        <div className="content">
                            <div className="icon-box">
                                <span
                                    className="icon flaticon-non-stop-call"
                                ></span>
                            </div>
                            <h6>
                                <a href="services-detail.html"
                                    >Investment Trade</a>
                            </h6>
                            <div className="text">
                                Lorem ipsum dolor sit amet, con sectetu
                                adipiscing elit, sed do eius mod tempor.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
  )
}