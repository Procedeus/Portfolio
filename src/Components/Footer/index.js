import { SiMicrosoftoutlook } from 'react-icons/si';
import { BsInstagram } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';
import './index.css';

const Footer = () => {
    return (
        <footer className="container-footer">
            <a href='mailto:murilorez79@hotmail.com'><SiMicrosoftoutlook/> Email</a>
            <a href='https://www.instagram.com/mu.rezende/'><BsInstagram/>Instagram</a>
            <a href='https://www.linkedin.com/in/murilo-rez/'><FaLinkedin/>Linkedin</a>
            <p>Criado por Murilo Rezende</p>
        </footer>
    );
}
      

export default Footer;