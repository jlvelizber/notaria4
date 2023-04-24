import React, { FC } from 'react'
import { SliderInterface } from './SliderInterface'

const Slider : FC<{slide: SliderInterface}> = ({slide}) => {
    return (
        <div className="slide" style={{backgroundImage: `url(${slide.img})`}}>
            <div className="container">
                <div className="content">
                    <div className="title">{slide.title}</div>
                    <h1>
                        {slide.description}
                    </h1>
                    {
                        slide.img && (
                            <a href="#" className="theme-btn btn-style-one">
                            Contact us today
                        </a>
                        )
                    }
                   
                </div>
            </div>
        </div>
    )
}

export default Slider
