import { SiMicrosoftoutlook } from 'react-icons/si';
import { BsInstagram } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';
import './index.css';

const Footer = () => {
    return (
        <footer className="container-footer">
            <a href='https://www.google.com.br/'><SiMicrosoftoutlook/> Email</a>
            <a href='https://www.google.com.br/'><BsInstagram/>Instagram</a>
            <a href='https://www.google.com.br/'><FaLinkedin/>Linkedin</a>
            <p>Criado por Murilo Rezende</p>
        </footer>
    );
}
      

export default Footer;