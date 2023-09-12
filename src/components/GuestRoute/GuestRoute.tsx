import React, { FC, ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

export const GuestRoute: FC<{
    children: ReactNode
    authenticated: boolean
}> = ({ children, authenticated }): any => {
    if (!authenticated) return <Navigate to="/mi-cuenta" />
    return <>{ children }</>
}
