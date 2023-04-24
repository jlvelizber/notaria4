import React, { useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons'

const ScrollTop = () => {
    const ref = useRef<HTMLDivElement>(null)

    const handleScrollTop = () => {
        const body = document.body //IE 'quirks'
        let bodyIe = document.documentElement //IE with doctype
        bodyIe = bodyIe.clientHeight ? bodyIe : body

        if (bodyIe.scrollTop == 0) {
            ref.current?.style ? (ref.current.style.display = 'none') : null
        } else {
            ref.current?.style ? (ref.current.style.display = 'block') : null
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScrollTop)
    }, [])

    const goTop = () => {
        window.scrollTo(0, 0)
    }

    return (
        <div
            ref={ref}
            className="scroll-to-top scroll-to-target"
            data-target="html"
            onClick={goTop}
        >
            <FontAwesomeIcon icon={faArrowCircleUp} />
        </div>
    )
}

export default ScrollTop
