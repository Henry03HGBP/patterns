import "./Header.scss"

const Header = () => {
  return (
    <nav className="header">
      <img className="header__logo" src="https://icon-library.com/images/supermarket-icon-png/supermarket-icon-png-28.jpg"></img>
       <ul className="header__nav-list">
        <li className="header__list-item">
         <a href="http://localhost:5173/" className="header__item-link header_item-link--is-active">Home</a>   
        </li>
        <li className="header__list-item">
        <a href="/Dashboard" className="header__item-link ">Dashboard</a>
        </li>
        <li className="header__list-item">
         <a href="/Secret" className="header__item-link">Secret</a>   
        </li>
        <li className="header__list-item">
          <a href="/login" className="header__item-link">Login</a>
        </li>
        <li className="header__list-item">
          <a href="/Singup" className="header__item-link">Sing Up</a>
        </li>
       </ul>
    </nav>
  )
}

export default Header