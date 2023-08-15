import './index.css';
import img from '../../assets/person.png'

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
                <h1 className='size-50'>Olá, eu sou</h1>
                <h1 className='size-70'>Murilo</h1>
                <h1 className='size-70'>Rezende</h1>
                <p>
                Texto é uma produção, verbal ou não verbal, que se constitui 
                com algum código, no intuito de comunicar algo a alguém
                </p>
                <a href='#contatos'>Contate me</a>
            </div>
            <div className='img-header'>
                <img src={img} alt='Person' />
            </div>
        </header>
        
    );
}
      

export default Header;