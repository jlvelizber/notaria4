import React, { FC } from 'react'
import { SliderInterface } from './SliderInterface'
import { Link } from 'react-router-dom'

export const Slider: FC<{ slide: SliderInterface }> = ({ slide }) => {
    return (
        <div className="slide" style={{ backgroundImage: `url(${slide.img})` }}>
            <div className="container">
                <div className="content">
                    <div className="title">{slide.title}</div>
                    <h1>{slide.description}</h1>
                    {slide.img && (
                        <Link
                            to={slide.actions.path}
                            className="theme-btn btn-style-one"
                        >
                            {slide.actions.label}
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Slider
