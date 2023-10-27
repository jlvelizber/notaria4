import React, { FC } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const ButtonGoForm: FC<{ label: string; actionRoute: string }> = ({
    label,
    actionRoute,
}) => {
    return (
        <div className="m-y">
            <Button
                className="button-go-to-form theme-btn btn-style-one "
                variant="link"
            >
                <Link to={`${actionRoute}`}> {label}</Link>
            </Button>
        </div>
    )
}
