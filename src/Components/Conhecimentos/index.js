import './index.css';

const Conhecimentos = () => {
    return (
        <div className="container-conhecimentos color-lite">
            <div className='col-3'>
                <h1>Conhecimentos e Habilidades</h1>
                <p>Quais são as tecnologias que possuo conhecimento até o momento?</p>
            </div>
            <div className='col-5'>
                <div className='layer'>
                    <h2>HTML</h2>
                    <h2>2 Anos</h2>
                </div>
                <div className='layer'>
                    <h2>CSS</h2>
                    <h2>2 Anos</h2>
                </div>
                <div className='layer'>
                    <h2>Javascript</h2>
                    <h2>1 Ano</h2>
                </div>
            </div>
        </div>
    );
}
      

export default Conhecimentos;