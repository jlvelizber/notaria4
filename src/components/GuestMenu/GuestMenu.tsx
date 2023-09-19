import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const GuestMenu = () => {
    return (
        <Nav as={'ul'} className="ps-5 me-auto auth-menu" navbar={false}>
            <li>
                <Nav.Link>
                    <Link to="/ingreso"> Ingreso</Link>
                </Nav.Link>
            </li>
            <li>
                <Nav.Link>
                    <Link to="/registro">Registro</Link>
                </Nav.Link>
            </li>
        </Nav>
    )
}
