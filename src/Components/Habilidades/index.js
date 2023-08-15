import './index.css';
import { PiGearFill } from 'react-icons/pi';
import { IoCodeSlash } from 'react-icons/io5';
import { RiToolsFill } from 'react-icons/ri';

const Habilidades = () => {
    return (
        <section id='habilidades'>
            <h1>Habilidades</h1>
            <p>Tecnologias utlizadas nos projetos</p>
            <div className='grid-12'>
                <div className='frontend'>
                    <IoCodeSlash className='skill-icon'/>
                    <h1 className='title-skills'>Front-end</h1>
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>Javascript</p>
                    <p>React</p>
                    <p>Axios</p>
                </div>
                <div className='backend'>
                    <PiGearFill className='skill-icon' />
                    <h1 className='title-skills'>Back-end</h1>
                    <p>Mongoose</p>
                    <p>Express</p>
                    <p>Cors</p>
                    <p>Nodejs</p>
                </div>
                <div className='tools'>
                    <RiToolsFill className='skill-icon' />
                    <h1 className='title-skills'>Tools</h1>
                    <p>VSCode</p>
                    <p>Git</p>
                    <p>Github</p>
                    <p>Photoshop</p>
                    <p>Figma</p>
                </div>
            </div>
        </section>
    );
}
      

export default Habilidades;