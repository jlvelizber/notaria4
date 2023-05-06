import React, { FC } from 'react'

const ImageColumn: FC<{ image: string; content: any }> = ({ image, content }) => {
    return (
        <div
            className="inner-column wow fadeInRight"
            data-wow-delay="0ms"
            data-wow-duration="1500ms"
        >
            <div className="image">
                <img src={image} alt="" />
                <div className="overlay-box">
                    <div className="overlay-inner">
                        <div className="content">
                            <h2>{content}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageColumn
