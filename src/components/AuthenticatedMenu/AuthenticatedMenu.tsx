import React, { useEffect } from 'react'
import { Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, onLogout } from '../../store'
import { useNavigate } from 'react-router'

export const AuthenticatedMenu = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector((state: RootState) => state.auth)

    const logout = () => {
        dispatch(onLogout())
    }

    const gotoRoute = (route: string) => {
        navigate(route)
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
                    <NavDropdown.Item
                        onClick={() => gotoRoute('mis-solicitudes')}
                    >
                        Mis solicitudes
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={() => gotoRoute('mi-cuenta')}>
                        Mi perfil
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={logout}>Salir</NavDropdown.Item>
                </NavDropdown>
            </Navbar.Collapse>
        </Nav>
    )
}
