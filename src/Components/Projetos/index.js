import './index.css';
import img from '../../assets/projeto-01.png'
import img2 from '../../assets/projeto-02.gif'

const Projetos = () => {
    return (
        <section id='projetos'>
            <h1>Projetos</h1>
            <p>Projetos desenvolvidos recentemente</p>
            <div className='projects'>
                <div className='project-box'>
                    <img src={img} alt='imagem projeto' />
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
                    <img src={img2} alt='imagem projeto' />
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
      

export default Projetos;