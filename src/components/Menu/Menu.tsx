import React, {
    FC,
    useEffect,
    useRef,
} from 'react'
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

    

    useEffect(() => {
        window.addEventListener('scroll', handleNavigation)
    }, [])

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
            name: 'Servicios',
            path: '/servicios',
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
            <div className="header-upper">
                <Container>
                    <div className="clearfix">
                        <div className="float-start logo-box">
                            <div className="logo">
                                <Link to="/">
                                    <img src={logo} alt="" title="" />
                                </Link>
                            </div>
                        </div>

                        <div className="nav-outer clearfix">
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

                            <div className="outer-box">
                                <div
                                    className="nav-toggler"
                                    onClick={toggleSidebar}
                                >
                                    <div className="nav-btn hidden-bar-opener">
                                        <FontAwesomeIcon icon={faBars} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

            <div className="sticky-header">
                <div className="container clearfix">
                    <div className="logo float-start">
                        <Link to='/' className="img-responsive">
                            <img src={logoSmall} alt="" title="" />
                        </Link>
                    </div>
                    <div className="right-col float-end">
                        <nav className="main-menu navbar-expand-md">
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent1"
                                aria-controls="navbarSupportedContent1"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>

                            <div
                                className="navbar-collapse collapse clearfix"
                                id="navbarSupportedContent1"
                            >
                                <ul className="navigation clearfix">
                                    <ul className="navigation clearfix">
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
                                    </ul>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}
