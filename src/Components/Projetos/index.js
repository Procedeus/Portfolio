import './index.css';

const Projetos = () => {
    return (
        <section id='projetos'>
            <h1>Projetos</h1>
            <p>Projetos desenvolvidos recentemente</p>
            <div className='projects'>
                <div className='project-box'>
                    <img src='https://imgur.com/7ewJJFu.png' alt='imagem projeto' />
                    <div className='project-content'>
                        <div className='project-text'>
                            <h2>Cursos de Instrumentos</h2>
                            <p>Uma landing page de cursos de instrumentos, apenas para praticar.</p>
                            <p>Tecnologias Utilizadas:</p>
                            <p>HTML, CSS, Javascript e React</p>
                        </div>
                        <div className='align-button'>
                            <a href='https://github.com/Procedeus/curso-instrumentos' className='project-button color-blue'>Source Code</a>
                            <a href='https://cursoinstrumentos.netlify.app/' className='project-button color-red'>Live Demo</a>
                        </div>
                    </div>
                </div>
                <div className='project-box'>
                    <img src='https://imgur.com/TBg8moz.gif' alt='imagem projeto' />
                    <div className='project-content'>
                        <div className='project-text'>
                            <h2>Amigo Secreto</h2>
                            <p>Um projeto de amigo secreto, onde é criado uma tabela e adicionado as pessoas que irão participar, após isso é 
                                sorteado e enviado um email para cada integrante.</p>
                            <p>Tecnologias Utilizadas:</p>
                            <p>HTML, CSS, Javascript, React, Axios, EmailJs</p>
                        </div>
                        <div className='align-button'>
                            <a href='https://github.com/Procedeus/React-amigo-secreto' className='project-button color-blue'>Source Code</a>
                            <a href='https://react-amigo-secreto.netlify.app/login' className='project-button color-red'>Live Demo</a>
                        </div>
                    </div>
                </div>
                <div className='project-box'>
                    <img src='https://i.imgur.com/0N9W9Dn.png' alt='imagem projeto' />
                    <div className='project-content'>
                        <div className='project-text'>
                            <h2>Jogo da Velha</h2>
                            <p>Um projeto de Jogo da Velha, ele permite que dois jogadores joguem o clássico jogo da velha em um ambiente web.</p>
                            <p>Tecnologias Utilizadas:</p>
                            <p>HTML, CSS, Javascript, React</p>
                        </div>
                        <div className='align-button'>
                            <a href='https://github.com/Procedeus/jogo-da-velha' className='project-button color-blue'>Source Code</a>
                            <a href='https://p-jogo-da-velha.netlify.app/' className='project-button color-red'>Live Demo</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
      

export default Projetos;