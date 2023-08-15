import './index.css';
import img from '../../assets/amigo-secreto.gif'

const Projetos = () => {
    return (
        <section id='projetos' className='grid-12'>
            <h1>Projetos</h1>
            <div className='projects'>
                <div className='project-box'>
                    <img src={img}/>
                    <div className='project-text'>
                        <h2>Nome do Projeto</h2>
                        <p>Descrição do projeto Descrição do projeto Descrição do projeto Descrição do projeto</p>
                        <p>Tecnologias Utilizadas</p>
                        <div className='align-button'>
                            <a href='/' className='project-button color-blue'>Source Code</a>
                            <a href='/' className='project-button color-red'>Live Demo</a>
                        </div>
                    </div>
                </div>
                <div className='project-box'>
                    <img src={img}/>
                    <div className='project-text'>
                        <h2>Nome do Projeto</h2>
                        <p>Descrição do projeto Descrição do projeto Descrição do projeto Descrição do projeto</p>
                        <p>Tecnologias Utilizadas</p>
                        <div className='align-button'>
                            <a href='/' className='project-button color-blue'>Source Code</a>
                            <a href='/' className='project-button color-red'>Live Demo</a>
                        </div>
                    </div>
                </div>
                <div className='project-box'>
                    <img src={img}/>
                    <div className='project-text'>
                        <h2>Nome do Projeto</h2>
                        <p>Descrição do projeto Descrição do projeto Descrição do projeto Descrição do projeto</p>
                        <p>Tecnologias Utilizadas</p>
                        <div className='align-button'>
                            <a href='/' className='project-button color-blue'>Source Code</a>
                            <a href='/' className='project-button color-red'>Live Demo</a>
                        </div>
                    </div>
                </div>
                <div className='project-box'>
                    <img src={img}/>
                    <div className='project-text'>
                        <h2>Nome do Projeto</h2>
                        <p>Descrição do projeto Descrição do projeto Descrição do projeto Descrição do projeto</p>
                        <p>Tecnologias Utilizadas</p>
                        <div className='align-button'>
                            <a href='/' className='project-button color-blue'>Source Code</a>
                            <a href='/' className='project-button color-red'>Live Demo</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
      

export default Projetos;