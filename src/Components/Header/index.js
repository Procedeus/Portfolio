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
                        <SiMicrosoftoutlook className='icon'/>
                        <BsInstagram className='icon'/>
                        <FaLinkedin className='icon'/>
                    </div>
                    <div>
                        <a href="/">Curriculo</a>
                        <a href="/">Contatos</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
      

export default Header;