import logo from './fontes/logo.png';
import Usuarios from './fontes/usuarios.png';
import Add from './fontes/add.png';
import './Usuarios.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider'

function Inicio() {
  const employees = [
    { id: 1, fullName: 'Allan de Albuquerque', img: './fontes/allan.png' },
    { id: 2, fullName: 'Caio Myra Pereira', img: './fontes/caio.png' },
    { id: 3, fullName: 'Heloisa Botelho Caitano', img: './fontes/hello.png' },
    { id: 4, fullName: 'Luiza Reis Carrion', img: './fontes/luiza.png' },
  ];
  return (
    <div className="App pb-5">
      <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        minBreakpoint="xxs"
      >
        <img src={logo} className='mb-5 block m-auto' alt="logo" />
        <img src={Usuarios} className='my-5' alt="logo" />

        <div>
          {employees.map((employee, index) => {
            return (
              <div key={index} className='usuarios d-flex mx-auto p-1  mb-3' role="button">
                <img src={require(`${employee.img}`)} alt={employee.fullName} className='' />
                <p className='d-flex justify-content-center align-items-center  ms-4 my-0 text-white fullName'>{employee.fullName}</p>
              </div>
            )
          })}
        </div>
        <a href='#'> 
          <img src={Add} alt='adicionar um cv' className='add d-block mx-auto' />
        </a>
        <a href='#' className='text-white text-decoration-none fs-3 fw-bold'>
          Sair
        </a>
      </ThemeProvider>
    </div>
  );
}

export default Inicio;
