import React, { FC, ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

export const AuthenticateRoute: FC<{
    children: ReactNode
    authenticated: boolean
}> = ({ children, authenticated }): any => {
    if (authenticated) return <>{children}</>
    return <Navigate to="/" />
}
