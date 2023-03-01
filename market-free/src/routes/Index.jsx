import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { 
    Home,
    Dashboard,
    Login,
    Secret,
    Singup
} from "@/pages"

const Index = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Secret' element={<Secret/>}/>
        <Route path='/Singup' element={<Singup/>}/>
    </Routes>
  )
}

export default Index
