import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Arrow from './fontes/Arrow.png';
import Settings from './fontes/Settings.png';
import Informaçõespessoais from './fontes/Informaçõespessoais.png';
import Linkedin from './fontes/Linkedin.png';
import Instagram from './fontes/Instagram.png';
import './perfil.css';
import { useNavigate, useParams } from 'react-router-dom'
 

function Perfil() {
    const {id} = useParams();
    const history = useNavigate();
	const handleBack = () => {
		history({ pathname: '/' });

	};

   const usuarios = {
        '4':{
            'imgs':{
                'centro':'./fontes/luizaPerfil01.png',
                'esquerdo':'./fontes/luizaesquerda.png',
                'direito':'./fontes/luizadireito.png',
            },
            'fullName':'Luiza Reis Carrion',
            'dataNascimento':'17/09/2002',
            'civil':'solteira',
            'cep':'01538-001',
            'celular':'(551) 242-9464',
            'email':'luiza.carrion@outlook.com',
            'genero':'Feminino',
            'nacionalidade':'Brasileiro',
            'profissao':'Estudante',
            'rede':{
                'instagram':'https://www.instagram.com/',
                'linkedin':'https://www.linkedin.com/'
            }
        },
        '2':{
            'imgs':{
                'centro':'./fontes/caio.png',
                'esquerdo':'',
                'direito':'',
            },
            'fullName':'Caio myra pereira',
            'dataNascimento':'17/09/2002',
            'civil':'solteiro',
            'cep':'03930-110',
            'celular':'(11) 2242-9464',
            'email':'caio.seila@outlook.com',
            'genero':'masculino',
            'nacionalidade':'Brasileiro',
            'profissao':'Estudante',
            'rede':{
                'instagram':'https://www.instagram.com/',
                'linkedin':'https://www.linkedin.com/'
            }
        },
        '3':{
            'imgs':{
                'centro':'./fontes/hello.png',
               
            },
            'fullName':'Heloisa Botelho Caitano',
            'dataNascimento':'17/09/2002',
            'civil':'solteira',
            'cep':'03490-000',
            'celular':'(11) 5242-9464',
            'email':'hello.seila@outlook.com',
            'genero':'Feminino',
            'nacionalidade':'Brasileiro',
            'profissao':'Estudante',
            'rede':{
                'instagram':'https://www.instagram.com/',
                'linkedin':'https://www.linkedin.com/'
            }
        },
        '1':{
            'imgs':{
                'centro':'./fontes/allan.png',
            },
            'fullName':'Allan de Albuquerque',
            'dataNascimento':'17/09/2002',
            'civil':'solteiro',
            'cep':'03527-905',
            'celular':'(11) 8242-9464',
            'email':'allan.seila@outlook.com',
            'genero':'masculino',
            'nacionalidade':'Brasileiro',
            'profissao':'Estudante',
            'rede':{
                'instagram':'https://www.instagram.com/',
                'linkedin':'https://www.linkedin.com/'
            }
        }
    }
    return (
        <div className="perfil pb-5">
            <header className=' d-flex justify-content-between py-3'>
                <a  href='#' className='ms-4'  onClick={handleBack}>
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
              {usuarios[id].imgs.esquerdo && <img src={require(`${usuarios[id].imgs.esquerdo}`)} className='imgEsquerda' />}
              {usuarios[id].imgs.centro && <img src={require(`${usuarios[id].imgs.centro}`)} className='imgCentral' />}
              {usuarios[id].imgs.direito && <img src={require(`${usuarios[id].imgs.direito}`)} className='imgDireita' />} 
            </section>
            <section className='mx-auto p-3 dadosPessoas mb-5'>
                <ul className='p-0 m-0' type="none">
                    <li><p> <b>Nome:</b> {usuarios[id].fullName}  </p>  </li>
                    <li><p> <b>Data de nascimento:</b> {usuarios[id].dataNascimento} </p></li>
                    <li><p> <b>Estado Civil:</b> {usuarios[id].civil} </p></li>
                    <li className='d-flex justify-content-between '><p> <b>CEP:</b> {usuarios[id].cep} </p><button className='localizeCep d-flex align-items-center'>Localizar CEP</button></li>
                    <li><p> <b>Celular:</b> {usuarios[id].celular} </p></li>
                    <li><p> <b>E-mail:</b> {usuarios[id].email} </p></li>
                    <li> <p> <b>Gênero:</b> {usuarios[id].genero} </p></li>
                    <li><p> <b>Nacionalidade:</b> {usuarios[id].nacionalidade} </p></li>
                    <li> <p> <b>Profissão:</b> {usuarios[id].profissao} </p></li>
                    <li className='d-flex'>
                        <p><b>Redes sociais:</b>  </p>
                        <a href='https://www.linkedin.com/'><img src={Linkedin} className='icone mx-2' /></a>  <a href='https://www.linkedin.com/'><img src={Instagram} className='icone' /> </a>
                    </li>
                </ul>
            </section>


            <section className='mx-auto p-3 dadosPessoas mb-5'>
                <h2 className='titleBio'>AUTO-Biografia</h2>
                <p>Olá, meu nome é {usuarios[id].fullName} e nasci em 17 de setembro de 2002, na cidade de São Paulo, Brasil. Sempre fui uma pessoa muito curiosa e interessada em tecnologia, o que me levou a escolher a carreira de Sistemas para Internet.</p>
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