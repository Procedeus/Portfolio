import { useRef } from 'react'
import { SiMicrosoftoutlook } from 'react-icons/si';
import { BsInstagram } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import './index.css';

const Contatos = () => {
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
            alert('Email Enviado Com Sucesso!!')
            console.log(result.text);
      }, (error) => {
            console.log(error.text);
      });

    e.target.reset()
    };

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
                <form ref={form} onSubmit={sendEmail}>
                    <h2>Me Envie um Email.</h2>
                    <input type="text" id="name" name="name" placeholder="Nome"/>
                    <input type="text" id="email" name="email" placeholder="Email"/>
                    <textarea  className='textarea' name="descricao" placeholder="Descrição..."/>
                    <input type='submit' value='Confrimar'/>
                    <button>Confirmar</button>
                </form> 
            </div>
        </div>
    );
}
      

export default Contatos;