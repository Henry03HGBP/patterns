import './App.css'
import Header from './Components/Header/Header'
import { BrowserRouter } from 'react-router-dom'
import RouterIndex from '@/routes'

function App () {
  return (
    <>
      <BrowserRouter>
        <Header />
        <RouterIndex />
      </BrowserRouter>
    </>
  )
}

export default App
