import './index.css';
import img from '../../assets/amigo-secreto.png'

const Projetos = () => {
    return (
        <div className="container-projetos">
            <div className='col-3'>
                <h1>Projetos no Github</h1>
                <p>Quais são os projetos que eu já fiz?</p>
            </div>
            <div className='p-col-6'>
                <div className='project'>
                    <img src={img} alt=""/>
                    <div className='padding-project'>
                        <h2>Amigo Secreto com React</h2>
                        <p>Projeto cadastra pessoas em um tabela e as sorteia, enviando um email com as informações de qual é o amigo secreto.</p>
                        <p>As tecnologias utilizadas foram:</p>
                        <p>React</p>
                        <p>Axios</p>
                        <p>EmailJs</p>
                        <p>DotEnv</p>
                    </div>
                    <a href="/">Saber Mais</a>
                </div>
            </div>
        </div>
    );
}
      

export default Projetos;