import './Header.scss'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='header'>
      <img className='header__logo' src="https://tse1.mm.bing.net/th?id=OIP._5aE_gpJTZzOeEjt7zpZwAAAAA&pid=Api&P=0" />
      <ul className='header__nav-list'>
        <li className='header__list-item'>
          <Link to='http://localhost:5173/' className='header__item-link header_item-link--is-active'>Home</Link>
        </li>
        <li className='header__list-item'>
          <Link to='/Dashboard' className='header__item-link '>Dashboard</Link>
        </li>
        <li className='header__list-item'>
          <Link to='/Secret' className='header__item-link'>Secret</Link>
        </li>
        <li className='header__list-item'>
          <Link to='/login' className='header__item-link'>Login</Link>
        </li>
        <li className='header__list-item'>
          <Link to='/Singup' className='header__item-link'>Sing Up</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
