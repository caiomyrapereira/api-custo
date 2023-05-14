import logo from '../fontes/logo.png';
import CreateAccount from '../fontes/criarumaconta.png';
import './createPerfil.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import { useFormik } from 'formik';

function Create() {
  const formik = useFormik({
    initialValues: {
      nomeCompleto: '',
      email: '',
      date: '',
      genero: '1',
      justMe: true,
      email: '',
      pais: '1',
      cep: '',
      estadoCivil: '1',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className='App pb-5'>
      <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']} minBreakpoint='xxs'>
        <img src={logo} className='mb-5 block m-auto' alt='logo' />
        <img src={CreateAccount} className='my-5' alt='logo' />

        <form onSubmit={formik.handleSubmit} noValidate>
          <div className='form-item mb-3 mx-auto d-flex flex-column align-items-start'>
            <label htmlFor='nomeCompleto' className='form-label'>
              Nome Completo:
            </label>
            <input
              type='text'
              onChange={formik.handleChange}
              className='form-control'
              name='nomeCompleto'
              id='nomeCompleto'
              placeholder='Ex: Robson Fagundes'
            ></input>
          </div>
          <div className='form-item mb-3 mx-auto d-flex flex-column align-items-start'>
            <label htmlFor='email' className='form-label'>
              Email:
            </label>
            <input
              type='email'
              onChange={formik.handleChange}
              className='form-control'
              name='email'
              id='email'
              placeholder='Ex: RobFagundes34@gmail.com'
            ></input>
          </div>
          <div className='form-item mb-3 mx-auto d-flex flex-column align-items-start'>
            <label htmlFor='date' className='form-label'>
              Data de nascimento:
            </label>
            <input type='date' onChange={formik.handleChange} className='form-control' name='date' id='date' placeholder='Ex: 20/08/1998'></input>
          </div>
          <div className='form-item mb-3 mx-auto d-flex flex-column align-items-start'>
            <label htmlFor='genero' className='form-label'>
              Gênero:
            </label>
            <select
              className='form-select'
              onChange={formik.handleChange}
              value='{formik.values.genero}'
              id='genero'
              name='genero'
              aria-label='Gênero'
            >
              <option value='1'>Homem cisgênero</option>
              <option value='2'>Mulher cisgênero</option>
              <option value='3'>Homem transgênero</option>
              <option value='4'>Mulher transgênero</option>
              <option value='5'>Não binário</option>
              <option value='6'>Agênero</option>
              <option value='7'>Genêro neutro</option>
              <option value='8'>Gênero fluido</option>
              <option value='9'>Prefiro não responder</option>
              <option value='10'>Outro</option>
            </select>
            <div className='form-check mt-2'>
              <input className='form-check-input' type='checkbox' name='justMe' id='justMe'></input>
              <label className='form-check-label' htmlFor='justMe'>
                Exibir somente para mim
              </label>
            </div>
          </div>
          <div className='form-item mb-3 mx-auto d-flex flex-column align-items-start'>
            <label htmlFor='email' className='form-label'>
              Email address
            </label>
            <input
              type='email'
              onChange={formik.handleChange}
              className='form-control'
              id='email'
              name='email'
              placeholder='name@example.com'
            ></input>
          </div>
          <div className='form-item mb-3 mx-auto d-flex flex-column align-items-start'>
            <label htmlFor='pais' className='form-label'>
              País:
            </label>
            <select className='form-select' onChange={formik.handleChange} value={formik.values.pais} id='pais' name='pais' aria-label='País'>
              <option value='1'>Brasil</option>
              <option value='2'>Estados Unidos</option>
              <option value='3'>Argentina</option>
              <option value='4'>França</option>
              <option value='10'>Outro</option>
            </select>
          </div>
          <div className='form-item mb-3 mx-auto d-flex flex-column align-items-start'>
            <label htmlFor='cep' className='form-label'>
              CEP:
            </label>
            <input type='text' onChange={formik.handleChange} className='form-control' name='cep' id='cep' placeholder='Ex: 09304-440'></input>
          </div>
          <div className='form-item mb-3 mx-auto d-flex flex-column align-items-start'>
            <label htmlFor='estadoCivil' className='form-label'>
              Estado civíl:
            </label>
            <select
              className='form-select'
              onChange={formik.handleChange}
              value={formik.values.estadoCivil}
              id='estadoCivil'
              name='estadoCivil'
              aria-label='Estado civíl'
            >
              <option value='1'>Solteiro (a)</option>
              <option value='2'>Casado (a)</option>
              <option value='3'>Viúvo (a)</option>
              <option value='4'>Prefiro não responder</option>
              <option value='5'>Divorciado (a)</option>
            </select>
          </div>
          <button type='submit' className='btn-submit btn rounded-4 mb-4'>
            Submit
          </button>
        </form>
      </ThemeProvider>
    </div>
  );
}

export default Create;
