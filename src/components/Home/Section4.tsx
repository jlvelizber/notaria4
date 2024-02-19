import React from 'react'

import ImgPostOne from '../../assets/images/home/post1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faUser } from '@fortawesome/free-solid-svg-icons'

export const Section4 = () => {
    return (
        <section className="news-section style-two">
            <div className="container">
                <div className="section-title  text-center text-md-start">
                    <div className="clearfix">
                        <div className="pull-left">
                            <h3>
                                Entérate de las novedades en <br /> nuestro{' '}
                                <span>blog</span>
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="row clearfix">
                    <div className="news-block col-lg-4 col-md-6 col-sm-12">
                        <div
                            className="inner-box wow fadeInLeft"
                            data-wow-delay="0ms"
                            data-wow-duration="1500ms"
                        >
                            <div className="image">
                                <img src={ImgPostOne} alt="" />
                                <div className="overlay-box">
                                    <a
                                        href="images/resource/news-1.jpg"
                                        data-fancybox="news"
                                        data-caption=""
                                        className="plus flaticon-plus"
                                    ></a>
                                </div>
                            </div>
                            <div className="lower-content">
                                <ul className="post-meta">
                                    <li>
                                        <FontAwesomeIcon icon={faCalendar} />
                                        September 12, 2019
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faUser} />
                                        Admin
                                    </li>
                                </ul>
                                <h5>
                                    <a href="blog-single.html">
                                        Strategy for Norway's Peion Fund Global.
                                    </a>
                                </h5>
                                <a
                                    href="blog-single.html"
                                    className="theme-btn btn-style-two"
                                >
                                    Ver más
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="news-block col-lg-4 col-md-6 col-sm-12">
                        <div
                            className="inner-box wow fadeInLeft"
                            data-wow-delay="0ms"
                            data-wow-duration="1500ms"
                        >
                            <div className="image">
                                <img src={ImgPostOne} alt="" />
                                <div className="overlay-box">
                                    <a
                                        href="images/resource/news-1.jpg"
                                        data-fancybox="news"
                                        data-caption=""
                                        className="plus flaticon-plus"
                                    ></a>
                                </div>
                            </div>
                            <div className="lower-content">
                                <ul className="post-meta">
                                    <li>
                                        <FontAwesomeIcon icon={faCalendar} />
                                        September 12, 2019
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faUser} />
                                        Admin
                                    </li>
                                </ul>
                                <h5>
                                    <a href="blog-single.html">
                                        Strategy for Norway's Peion Fund Global.
                                    </a>
                                </h5>
                                <a
                                    href="blog-single.html"
                                    className="theme-btn btn-style-two"
                                >
                                    Ver más
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="news-block col-lg-4 col-md-6 col-sm-12">
                        <div
                            className="inner-box wow fadeInLeft"
                            data-wow-delay="0ms"
                            data-wow-duration="1500ms"
                        >
                            <div className="image">
                                <img src={ImgPostOne} alt="" />
                                <div className="overlay-box">
                                    <a
                                        href="images/resource/news-1.jpg"
                                        data-fancybox="news"
                                        data-caption=""
                                        className="plus flaticon-plus"
                                    ></a>
                                </div>
                            </div>
                            <div className="lower-content">
                                <ul className="post-meta">
                                    <li>
                                        <FontAwesomeIcon icon={faCalendar} />
                                        September 12, 2019
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faUser} />
                                        Admin
                                    </li>
                                </ul>
                                <h5>
                                    <a href="blog-single.html">
                                        Strategy for Norway's Peion Fund Global.
                                    </a>
                                </h5>
                                <a
                                    href="blog-single.html"
                                    className="theme-btn btn-style-two"
                                >
                                    Ver más
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}