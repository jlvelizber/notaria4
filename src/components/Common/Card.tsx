import React, { FC, ReactNode } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CardInterface } from '../../interfaces'


export const Card: FC<{ card: CardInterface }> = ({ card }) => {
    const {
        content,
        title,
        icon,
        overlay,
        overlayTitle,
        overLayCallAction,
        overlayTitleAction,
        overlayImg,
        classes = 'col-12 col-sm-6 col-lg-4',
    } = card
    return (
        <div className={`services-block-two style-two ${classes}`}>
            <div className="inner-box">
                <div className="icon-box">
                    {icon && <FontAwesomeIcon className="icon" icon={icon} />}
                </div>
                <h3>{title}</h3>
                <div className="text text-start">{content}</div>

                {overlay && (
                    <div
                        className="overlay-box"
                        style={{
                            backgroundImage: overlayImg
                                ? `url(${overlayImg})`
                                : undefined,
                        }}
                    >
                        <div className="overlay-inner">
                            <div className="content">
                                {icon && (
                                    <FontAwesomeIcon
                                        className="icon"
                                        icon={icon}
                                    />
                                )}
                                <h4>
                                    <a onClick={overLayCallAction}>
                                        {overlayTitle}
                                    </a>
                                </h4>
                                <button
                                    className="theme-btn btn-style-one"
                                    onClick={overLayCallAction}
                                >
                                    {overlayTitleAction}
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
