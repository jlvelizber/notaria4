import React, {FC, useEffect, useRef} from 'react'
const Preloader: FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        setTimeout(() => {
            ref.current?.classList.add('animate__animated')
            ref.current?.classList.add('animate__fadeout')
            ref.current?.classList.add('animate__delay-3s')
            ref.current?.classList.remove('preloader')
        },2000)
    }, []);

    return <div ref={ref} className='preloader' />
}

export default Preloader