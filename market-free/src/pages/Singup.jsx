import React from 'react'
import '@/assets/css/form.css'

const Singup = () => {
  return (
    <main className='form-signin w-100 m-auto'>
      <form>
        <img className='mb-4' src='https://tse1.mm.bing.net/th?id=OIP._5aE_gpJTZzOeEjt7zpZwAAAAA&pid=Api&P=0' width='72' height='57' />
        <h1 className='h3 mb-3'>Crear cuenta</h1>
        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='first_name'
            name='Nombre'
            value=''
            onChange={() => {}}
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
            value=''
            onChange={() => {}}
            placeholder='Apellido'
          />
          <div className='form-floating'>
            <select
              className='form-select'
              id='gender'
              name='gender'
              value=''
              onChange={() => {}}
            >
              <option value=''>Chose....</option>
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
              value=''
              onChange={() => {}}
              placeholder='nombre@ejemplo.com'
            />
            <label htmlFor='email'>Dirección de Email</label>
          </div>
          <div className='form-control'>
            <input
              type='password'
              name='password'
              value=''
              onChange={() => {}}
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
