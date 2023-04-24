import React from 'react'

const Section5 = () => {
    return (
        <section
            className="form-section"
            // style="background-image: url(images/background/2.jpg)"
        >
            <div className="container">
                <div className="upper-content">
                    <div className="row clearfix">
                        <div className="title-column col-lg-5 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <div className="section-title light">
                                    <div className="title">Contact us</div>
                                    <h3>
                                        Feel free to ask somthing <br />
                                        we are <span>here</span>
                                    </h3>
                                </div>
                            </div>
                        </div>

                        <div className="info-column col-lg-7 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <div className="row clearfix">
                                    <div className="column col-lg-6 col-md-6 col-sm-12">
                                        <ul className="list-style-two">
                                            <li>
                                                <span className="icon flaticon-placeholder-1"></span>
                                                4 G-ral. Traian Mosoiu Street, A
                                                Building, 2nd Entrance, Flat 30,
                                                Cluj-Napoca, Romania
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="column col-lg-6 col-md-6 col-sm-12">
                                        <ul className="list-style-two">
                                            <li>
                                                <span className="icon flaticon-phone-call"></span>
                                                +012 (3456) 7890
                                            </li>
                                            <li>
                                                <span className="icon flaticon-chat"></span>
                                                support@lawsight.com
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lower-content">
                    <div className="default-form">
                        <form method="post" action="blog.html">
                            <div className="row clearfix">
                                <div className="form-group col-lg-4 col-md-6 col-sm-12">
                                    <input
                                        type="text"
                                        name="firstname"
                                        value=""
                                        placeholder="First name.."
                                        required
                                    />
                                </div>

                                <div className="form-group col-lg-4 col-md-6 col-sm-12">
                                    <input
                                        type="text"
                                        name="email"
                                        value=""
                                        placeholder="Last name.."
                                        required
                                    />
                                </div>

                                <div className="form-group col-lg-4 col-md-12 col-sm-12">
                                    <input
                                        type="text"
                                        name="phone"
                                        value=""
                                        placeholder="Email Address.."
                                        required
                                    />
                                </div>

                                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                    <textarea
                                        name="message"
                                        placeholder="Write..."
                                    ></textarea>
                                </div>

                                <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                    <button
                                        type="submit"
                                        className="theme-btn btn-style-one"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section5
