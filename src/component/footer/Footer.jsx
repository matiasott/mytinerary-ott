import "./Footer.css";
import { Link as LinkRouter, useLocation } from 'react-router-dom';
import Social from "./sociales/Social.jsx"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaMapMarkerAlt } from 'react-icons/fa';


function Footer() {
    const location = useLocation();
    return (
        <>
            <div className="footer.social">
                <Container className="div-footer-social" >
                    <Nav className="me-auto nav-footer">
                        <Nav.Link as={LinkRouter} className={`link-footer ${location.pathname === '/' ? 'active-link-footer' : ''}`} to="/">Home</Nav.Link>
                        <Nav.Link as={LinkRouter} className={`link-footer ${location.pathname === '/cities' ? 'active-link-footer' : ''}`} to="/cities">Cities</Nav.Link>
                    </Nav>
                    <Social />
                    <div className="direccion-footer">
                        <h6 className="direccion-name">Location: Balcarce 78 -  Bs. As. - Argentina</h6>
                        <a className="social-icon-icon direccion-icon" href="https://www.google.com.ar/maps/" target="_blank" rel="noopener noreferrer">
                            <FaMapMarkerAlt />
                        </a>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default Footer;