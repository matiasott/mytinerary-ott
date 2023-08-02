import "./Social.css";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Social() {
    return (
        <div className="social-icons">
            <a className="social-icon-icon" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
            </a>
            <a className="social-icon-icon" href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
            </a>
            <a className="social-icon-icon" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
            </a>
        </div>
    );
}

export default Social;