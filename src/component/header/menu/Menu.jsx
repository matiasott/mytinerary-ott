
import Image from 'react-bootstrap/Image';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import "./Menu.css";

function Menu() {
    return (
        <>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">MENU</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className="link-menu-menu" href="#home">Home</Nav.Link>
                        <Nav.Link className="link-menu-menu" href="#link">Citis</Nav.Link>
                    </Nav>
                </Navbar.Collapse >
                <Image className='menu-nav' src="/img/usuario-anonimo.png" roundedCircle />
            </Container>
        </Navbar>
        </>
    );
}

export default Menu;