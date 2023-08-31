import React, { FC, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
export const Preloader: FC = () => {
    const ref = useRef<HTMLDivElement>(null)
    const { status } = useSelector((state: RootState) => state.auth)

    useEffect(() => {
        // setTimeout(() => {
        ref.current?.classList.add('animate__animated')
        ref.current?.classList.add('animate__fadeout')
        ref.current?.classList.add('animate__delay-3s')
        // ref.current?.classList.remove('preloader')
        // },3000)
    }, [status])

    return status === 'checking' ? (
        <div ref={ref} className="preloader" />
    ) : null
}
