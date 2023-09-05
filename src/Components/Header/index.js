import './index.css';

const Header = () => {
    return (
        <header id='home' className='grid-12'>
            <nav>
                <ul>
                    <li>
                        <a href='#home'>Home</a>
                    </li>
                    <li>
                        <a href='#habilidades'>Habilidades</a>
                    </li>
                    <li>
                        <a href='#projetos'>Projetos</a>
                    </li>
                </ul>
                <div>
                    <a href='#contatos' className='button-navbar'>Contatos</a>
                </div>
            </nav>
            <div className='header-content'>
                <h1 className='size-50'>Olá, eu sou </h1>
                <h1 className='size-50'>Murilo Rezende</h1>
                <h1 className='size-70'>Desenvolvedor </h1>
                <h1 className='size-70 fullstack-animation'>FullStack</h1>
                <p>
                    Em busca de novas oportunidades no mercado de trabalho, pronto para aplicar 
                    conjunto diversificado de habilidades e conhecimentos para contribuir 
                    positivamente em um ambiente que valoriza a criatividade, a inovação e a colaboração.
                </p>
                <a href='#contatos'>Contate me</a>
            </div>
            <div className='img-header'>
                <img src='https://i.imgur.com/fnCthe3.png' alt='Person' />
            </div>
        </header>
        
    );
}
      

export default Header;