import React, { FC, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Container, Nav, Navbar } from 'react-bootstrap'
import logo from './../../assets/images/logo-notaria4-daule.png'
import logoSmall from './../../assets/images/logo-small.png'

interface MenuInterface {
    onOpenSidebar: () => void
}

export const Menu: FC<MenuInterface> = ({ onOpenSidebar }) => {
    const ref = useRef<HTMLDivElement>(null)

    const navigation = useLocation()

    const { pathname } = navigation
    //Javascript split method to get the name of the path in array
    const location = pathname.split('/')[1]

    const handleNavigation = () => {
        const body = document.body //IE 'quirks'
        let bodyIe = document.documentElement //IE with doctype
        bodyIe = bodyIe.clientHeight ? bodyIe : body

        if (bodyIe.scrollTop == 0) {
            ref.current?.classList.remove('fixed-header')
        } else {
            ref.current?.classList.add('fixed-header')
        }
    }

    const toggleSidebar = () => {
        onOpenSidebar()
    }

 
    const menuItems = [
        {
            name: 'Inicio',
            path: '/',
        },
        {
            name: '¿Quiénes Somos?',
            path: '/quines-somos',
        },
        {
            name: 'Trámites en línea',
            path: '/tramites-en-linea',
        },
        {
            name: 'Preguntas frecuentes',
            path: '/preguntas-frecuentes',
        },
        {
            name: 'Contacto',
            path: '/contacto',
        },
    ]

    return (
        <header className="main-header" ref={ref}>
            <div className="sticky-header">
                <Container className="clearfix">
                    <div className="float-start  logo-box">
                        <Link to="/" className="img-responsive">
                            <img src={logoSmall} alt="" title="" />
                        </Link>
                    </div>
                    <div className="right-col float-end">
                        <Navbar
                            className="main-menu  py-0"
                            expand="md"
                            bg="none"
                            collapseOnSelect={true}
                        >
                            <div className="navbar-header">
                                <Navbar.Toggle
                                    aria-controls="navbarScroll"
                                    onClick={() => console.log('navbar')}
                                />
                            </div>
                            <Navbar.Collapse
                                id="navbarSupportedContent"
                                className="clearfix"
                            >
                                <Nav
                                    as={'ul'}
                                    className="navigation clearfix"
                                    navbar={false}
                                >
                                    {menuItems.map((item, idx) => {
                                        return (
                                            <li
                                                key={idx}
                                                className={
                                                    location ===
                                                    item.path.split('/')[1]
                                                        ? 'current'
                                                        : ''
                                                }
                                            >
                                                <Link to={item.path}>
                                                    {item.name}
                                                </Link>
                                            </li>
                                        )
                                    })}
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </div>
                </Container>
            </div>

            
        </header>
    )
}
