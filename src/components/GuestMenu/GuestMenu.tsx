import React from 'react'
import { Nav } from 'react-bootstrap'

export const GuestMenu = () => {
    return (
        <Nav as={'ul'} className="ps-5 me-auto auth-menu" navbar={false}>
            <li>
                <Nav.Link href="ingreso">Ingreso</Nav.Link>
            </li>
            <li>
                <Nav.Link eventKey={2} href="registro">
                    Registro
                </Nav.Link>
            </li>
        </Nav>
    )
}
