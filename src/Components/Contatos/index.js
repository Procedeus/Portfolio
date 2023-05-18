import { SiMicrosoftoutlook } from 'react-icons/si';
import { BsInstagram } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';
import './index.css';

const Contatos = () => {
    return (
        <div className="container-contatos color-lite">
            <div className='contatos-coluna'>
                <h1>Contatos</h1>
                <p>Quais são as formas de entrar em contato comigo?</p>
                <div>
                    <SiMicrosoftoutlook className='icon'/>
                    <BsInstagram className='icon'/>
                    <FaLinkedin className='icon'/>
                </div>
            </div>
            <div className='contatos'>
                <form>
                    <h2>Me Envie um Email.</h2>
                    <input type="text" id="name" name="name" placeholder="Nome"/>
                    <input type="text" id="email" name="email" placeholder="Email"/>
                    <textarea  className='textarea' placeholder="Descrição..."/>
                    <button>Confirmar</button>
                </form> 
            </div>
        </div>
    );
}
      

export default Contatos;