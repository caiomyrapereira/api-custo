import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Arrow from './fontes/Arrow.png';
import Settings from './fontes/Settings.png';
import Informaçõespessoais from './fontes/Informaçõespessoais.png';
import LuizaPerfil01 from './fontes/luizaPerfil01.png';
import LuizaPerfil02 from './fontes/luizadireito.png'
import LuizaPerfil03 from './fontes/luizaesquerda.png';
import Linkedin from './fontes/Linkedin.png';
import Instagram from './fontes/Instagram.png';
import './perfil.css';


function Perfil() {
    return (
        <div className="perfil pb-5">
            <header className=' d-flex justify-content-between py-3'>
                <a href='#' className='ms-4'>
                    <img src={Arrow} alt='voltar' />
                </a>
                <a href='#' className='me-4'>
                    <img src={Settings} alt='configurar' />
                </a>
            </header>

            <h1 className='text-center mt-5 mb-5'>
                <img src={Informaçõespessoais} alt='perfilcentral' />
            </h1>

            <section className='text-center mb-5'>
                <img src={LuizaPerfil03} className='imgEsquerda' />
                <img src={LuizaPerfil01} className='imgCentral' />
                <img src={LuizaPerfil02} className='imgDireita' />
            </section>
            <section className='mx-auto p-3 dadosPessoas mb-5'>
                <ul className='p-0 m-0' type="none">
                    <li><p> <b>Nome:</b> Luiza Reis Carrion </p></li>
                    <li><p> <b>Data de nascimento:</b> 17/09/2002 </p></li>
                    <li><p> <b>Estado Civil:</b> Solteira </p></li>
                    <li className='d-flex justify-content-between '><p> <b>CEP:</b> 01538-001 </p><button className='localizeCep d-flex align-items-center'>Localizar CEP</button></li>
                    <li><p> <b>Celular:</b> +1 (551) 242-9464 </p></li>
                    <li><p> <b>E-mail:</b> luiza.carrion@outlook.com </p></li>
                    <li> <p> <b>Gênero:</b> Feminino </p></li>
                    <li><p> <b>Nacionalidade:</b> Brasileiro </p></li>
                    <li> <p> <b>Profissão:</b> Estudante </p></li>
                    <li className='d-flex'>
                        <p><b>Redes sociais:</b>  </p>
                        <a href='#'><img src={Linkedin} className='icone mx-2' /></a>  <a href='#'><img src={Instagram} className='icone' /> </a>
                    </li>
                </ul>
            </section>


            <section className='mx-auto p-3 dadosPessoas mb-5'>
                <h2 className='titleBio'>AUTO-Biografia</h2>
                <p>Olá, meu nome é Luiza Reis Carrion e nasci em 17 de setembro de 2002, na cidade de São Paulo, Brasil. Sempre fui uma pessoa muito curiosa e interessada em tecnologia, o que me levou a escolher a carreira de Sistemas para Internet.</p>
                <p>Atualmente, sou estudante na Faculdade FIAP, onde estou me aprofundando em assuntos como programação, desenvolvimento de sistemas e inteligência artificial. Acredito que a tecnologia pode ser uma ferramenta incrível para mudar o mundo e estou empolgada em fazer parte dessa revolução.</p>
            </section>

            <div className='d-flex justify-content-center'>
                <button className='buttonAcesso text-white mx-auto'>
                    Acessar página autodidata
                </button>
            </div>

        </div>
    );
}

export default Perfil;