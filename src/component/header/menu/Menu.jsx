import React, { useState, useEffect } from 'react';
import { Link as LinkRouter, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import { useSelector, useDispatch } from 'react-redux';
import { borrarUsuario } from '../../../redux/actions/userActions.js';
import "./Menu.css";

function Menu() {
    const location = useLocation();
    const currentUser = useSelector(state => state.user.user);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if (currentUser && currentUser.name) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, [currentUser]);

    const logout = () => {
        localStorage.removeItem('token');
        dispatch(borrarUsuario());
        setIsLoggedIn(false); 
    };

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">MENU</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={LinkRouter} className={`link-menu-menu ${location.pathname === '/' ? 'active-link' : ''}`} to="/">Home</Nav.Link>
                            <Nav.Link as={LinkRouter} className={`link-menu-menu ${location.pathname === '/cities' ? 'active-link' : ''}`} to="/cities">Cities</Nav.Link>
                        </Nav>
                        <div className="d-flex align-items-center navUser">
                            {isLoggedIn ? (
                                <>
                                    <span className="me-2">{currentUser.name}</span>
                                    <Image className='menu-nav' src={currentUser.photo} roundedCircle />
                                    <Nav.Link onClick={logout} className="ms-3">Cerrar Sesión</Nav.Link>
                                </>
                            ) : (
                                <>
                                    <Nav.Link as={LinkRouter} to="/login" className="me-3">Iniciar Sesión</Nav.Link>
                                    <Nav.Link as={LinkRouter} to="/register" className="me-3">Register</Nav.Link>
                                    <Image className='menu-nav' src="/img/usuario-anonimo.png" roundedCircle />
                                </>
                            )}
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Menu;



