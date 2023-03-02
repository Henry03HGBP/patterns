import React from 'react'
import '@/assets/css/form.css'
import useForm from '../hooks/useform'

const Singup = () => {
  const sendData = (data) => {
    console.log('Data submit del form', data)
  }
  const { input, handleInputChange, handleSubmit } = useForm(sendData, {
    first_name: '',
    last_name: '',
    gender: '',
    email: '',
    password: ''
  })
  return (
    <main className='form-signin w-100 m-auto'>
      <form onSubmit={handleSubmit}>
        <img className='mb-4' src='https://tse1.mm.bing.net/th?id=OIP._5aE_gpJTZzOeEjt7zpZwAAAAA&pid=Api&P=0' width='72' height='57' />
        <h1 className='h3 mb-3'>Crear cuenta</h1>
        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='first_name'
            name='Nombre'
            value={input.first_name}
            onChange={handleInputChange}
            placeholder='Henry'
          />
          <label htmlFor='first-name'>Nombre</label>
        </div>

        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='last_name'
            name='Apellido'
            value={input.last_name}
            onChange={handleInputChange}
            placeholder='Apellido'
          />
          <label htmlFor='last_name'>Apellido</label>
          <div className='form-floating'>
            <select
              className='form-select'
              id='gender'
              name='gender'
              value={input.gender}
              onChange={handleInputChange}
            >
              <option value=''>Choose....</option>
              <option value='H'>Homabre</option>
              <option value='M'>Mujer</option>
            </select>
            <label htmlFor='gender'>Genero</label>
          </div>
          <div className='form-floating'>
            <input
              type='email'
              className='form-control'
              id='email'
              value={input.email}
              onChange={handleInputChange}
              placeholder='nombre@ejemplo.com'
            />
            <label htmlFor='email'>Dirección de Email</label>
          </div>
          <div className='form-control'>
            <input
              type='password'
              name='password'
              value={input.password}
              onChange={handleInputChange}
              placeholder='Contraseña'
            />
          </div>
        </div>
        <button className='w-100 btn btn-lg btn-primary' type='submit'>Iniciar Sesión</button>
      </form>
    </main>
  )
}

export default Singup
