import React from 'react'
import BgSection6 from '@/images/home/newsletter.jpg'

export const Section6 = () => {
    return (
        <section className="subscribe-section">
            <div className="container">
                <div
                    className="inner-container"
                    style={{backgroundImage: `url(${BgSection6})`}}
                >
                    <h2>
                        Sucríbete a nuestro canal de <br />noticias
                    </h2>
                    <div className="subscribe-form">
                        <form method="post" action="contact.html">
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    value=""
                                    placeholder="Correo electrónico"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="theme-btn subscribe-btn"
                                >
                                    Suscribirse
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}