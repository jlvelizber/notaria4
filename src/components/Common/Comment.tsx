import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react'

export interface CommentInterface {
    content: string;
    avatar: string;
    name: string;
    role?:string;

}

const Comment : FC<{comment: CommentInterface}> = ({comment}) => {

    const {avatar, content, name , role} = comment;

    return (
        <div className="testimonial-block">
            <div className="inner-box">
                <div className="testimonial-content">
                    {/* <span className="quote-icon flaticon-left-quote"></span> */}
                    <FontAwesomeIcon icon={faQuoteLeft} className='quote-icon'/>
                    <div className="text">
                        {content}
                    </div>
                    <div className="lower-box">
                        <div className="box-inner">
                            <div className="image">
                                <img
                                    src={avatar}
                                    alt=""
                                />
                            </div>
                            <h3>{name}</h3>
                            {role && <div className="designation">{role}</div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comment
