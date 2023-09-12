import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, onLogout } from '../../store'

export const AuthenticatedMenu = () => {
    const dispatch = useDispatch()
    const { user } = useSelector((state: RootState) => state.auth)

    const logout = () => {
        dispatch(onLogout())
    }
    return (
        <Nav as={'ul'} className="ps-5 me-auto auth-menu">
            <Navbar.Collapse id="navbar-dark-example">
                <NavDropdown
                    id="nav-dropdown-dark-example"
                    title={
                        <>
                            <FontAwesomeIcon icon={faUser} /> {user?.name}{' '}
                            {user?.first_last_name}{' '}
                        </>
                    }
                >
                    <NavDropdown.Item >
                        <Link to={'/mis-solicitudes'}> Mis solicitudes</Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                        <Link to={'/mi-cuenta'}>Mi perfil </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={logout}>Salir</NavDropdown.Item>
                </NavDropdown>
            </Navbar.Collapse>
        </Nav>
    )
}
