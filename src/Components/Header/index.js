import './index.css';
import { SiMicrosoftoutlook } from 'react-icons/si';
import { BsInstagram } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';

const Header = () => {
    return (
        <div className="container-header">
            <div className="col-4">
                <div className='flex'>
                    <h1>Olá, eu sou o Murilo</h1>
                    <p>Formado em Análise e Desenvolvimento de Sistemas pela Faculdade de Tecnologia de Presidente Prudente.</p>
                    <div>
                        <a href='mailto:murilorez79@hotmail.com' className='icon'><SiMicrosoftoutlook/></a>
                        <a href='https://www.instagram.com/mu.rezende/' className='icon'><BsInstagram/></a>
                        <a href='https://www.linkedin.com/in/murilo-rez/' className='icon'><FaLinkedin/></a>
                    </div>
                    <div>
                        <a href="/" className='header-button'>Curriculo</a>
                        <a href="/" className='header-button'>Contatos</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
      

export default Header;