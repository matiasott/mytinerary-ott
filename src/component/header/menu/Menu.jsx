
import Image from 'react-bootstrap/Image';
import { Link as LinkRouter, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Menu.css";



function Menu() {

    const location = useLocation();
    

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
                    </Navbar.Collapse>
                    <Image className='menu-nav' src="/img/usuario-anonimo.png" roundedCircle />
                </Container>
            </Navbar>
        </>
    );
}

export default Menu;