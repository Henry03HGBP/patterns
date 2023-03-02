import React from 'react'
import '@/assets/css/form.css'

const Login = () => {
  return (
    <main className='form-signin w-100 m-auto'>
      <form action=''>
        <img className='mb-4' src='https://tse1.mm.bing.net/th?id=OIP._5aE_gpJTZzOeEjt7zpZwAAAAA&pid=Api&P=0' width='72' height='57' />
        <h1 className='h3 mb-3 fw-normal'>Inciar Sesión</h1>
        <div className='form-floating'>
          <input
            type='email' className='form-control'
            id='floatingInput'
            name='email'
            value=''
            onChange={() => {}}
            placeholder='ejemplo@mail.com'
          />
          <label htmlFor='floatingInput'>Ingresa tu correo</label>
        </div>
        <div className='form-floating'>
          <input
            type='password'
            id='floatingInput'
            className='form-control'
            name='password'
            value=''
            onChange={() => {}}
            placeholder='Contraseña'
          />
          <label htmlFor='floatingPassword'>Contraseña</label>
        </div>
        <button className='w-100 btn-lg btn-primary' type='submit'>Iniciar Sesión</button>
      </form>
    </main>
  )
}

export default Login
