import React from 'react'

const Section6 = () => {
    return (
        <section className="subscribe-section">
            <div className="container">
                <div
                    className="inner-container"
                    // style="background-image: url(images/background/3.jpg)"
                >
                    <h2>
                        Subscribe Your Email for Newsletter <br />& Promotion
                    </h2>
                    <div className="subscribe-form">
                        <form method="post" action="contact.html">
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    value=""
                                    placeholder="Email address.."
                                    required
                                />
                                <button
                                    type="submit"
                                    className="theme-btn subscribe-btn"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section6
