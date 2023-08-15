import './index.css';
import img from '../../assets/person.png'

const Header = () => {
    return (
        <header className='grid-12'>
            <nav>
                <ul>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='#habilidades'>Habilidades</a>
                    </li>
                    <li>
                        <a href='/'>Projetos</a>
                    </li>
                </ul>
                <div>
                    <a href='/' className='button-navbar'>Contatos</a>
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
                <a href='/'>Contate me</a>
            </div>
            <div className='img-header'>
                <img src={img} alt='Person' />
            </div>
        </header>
        
    );
}
      

export default Header;