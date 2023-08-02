import "./Footer.css";
import Social from "./sociales/Social.jsx"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaMapMarkerAlt } from 'react-icons/fa';


function Footer() {
    return (
        <>
            <div className="footer.social">
                <Container>                    
                    <Nav className="me-auto nav-footer">
                        <Nav.Link className="link-footer" href="#home">Home</Nav.Link>
                        <Nav.Link className="link-footer" href="#link">Citis</Nav.Link>
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