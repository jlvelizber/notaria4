import React, { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

export interface CardInterface {
    icon?: IconProp
    title: string
    content: any;
    overlay?: boolean | false
    overlayTitle?: string
    overlayTitleAction?: string;
    overLayCallAction?: (param?: any) => void
}

const Card: FC<{ card: CardInterface }> = ({ card }) => {
    const { content, title, icon, overlay, overlayTitle, overLayCallAction, overlayTitleAction } =
        card
    return (
        <div className="services-block-two style-two col-lg-4 col-md-6 col-sm-12">
            <div className="inner-box">
                <div className="icon-box">
                    {/* <span className="icon flaticon-internet"></span> */}
                    <FontAwesomeIcon className='icon' icon={icon}/>
                </div>
                <h3>{title}</h3>
                <div className="text text-start">{content}</div>

                {overlay && (
                    <div className="overlay-box">
                        <div className="overlay-inner">
                            <div className="content">
                                <span className="icon flaticon-internet"></span>
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

export default Card
