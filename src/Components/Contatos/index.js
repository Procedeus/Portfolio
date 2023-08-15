import './index.css';
import { useRef } from 'react'
import { MdEmail } from 'react-icons/md';
import { BsInstagram } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { IoLogoWhatsapp } from 'react-icons/io5';

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
        <section id='contatos'>
            <h1>Contatos</h1>
            <p>Aqui estão as redes sociais e formas de entrar em contato comigo</p>
            <div className='icons-contact'>
                <IoLogoWhatsapp className='icon-contact' />
                <MdEmail className='icon-contact' />
                <FaLinkedin className='icon-contact' />
                <BsInstagram className='icon-contact' />
            </div>

            <form ref={form} onSubmit={sendEmail} className='form-contact'>
                <h2>Me Envie um Email.</h2>
                <input type="text" id="name" name="name" placeholder="Nome"/>
                <input type="text" id="email" name="email" placeholder="Email"/>
                <textarea  className='textarea' name="descricao" placeholder="Descrição..."/>
                <button>Confirmar</button>
            </form> 
        </section>
    );
}
      

export default Contatos;