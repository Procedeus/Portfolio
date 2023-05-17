import './index.css';
import img from '../../assets/teste.png'

const Projetos = () => {
    return (
        <div className="container-projetos">
            <div className='col-3'>
                <h1>Projetos no Github</h1>
                <p>Quais são os projetos que eu já fiz?</p>
            </div>
            <div className='p-col-6'>
                <div className='project'>
                    <img src={img} alt="Girl in a jacket"/>
                    <div className='padding-project'>
                        <h2>Titulo do Projeto</h2>
                        <p>Descrição do projeto e tecnologias utilizadas</p>
                    </div>
                    <a href="/">Saber Mais</a>
                </div>
                <div className='project'>
                    <img src={img} alt="Girl in a jacket"/>
                    <div className='padding-project'>
                        <h2>Titulo do Projeto</h2>
                        <p>Descrição do projeto e tecnologias utilizadas</p>
                    </div>
                    <a href="/">Saber Mais</a>
                </div>
            </div>
        </div>
    );
}
      

export default Projetos;