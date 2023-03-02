import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, Dashboard, Login, Secret, Singup } from '../pages'

const RouterIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/login' element={<Login />} />
      <Route path='/secret' element={<Secret />} />
      <Route path='/Singup' element={<Singup />} />
    </Routes>
  )
}

export default RouterIndex
