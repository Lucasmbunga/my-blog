import { useState, type FC } from "react";
import { Link, NavLink } from "react-router-dom";
import './Header.css'
import { MdMenu } from "react-icons/md";

const Header: FC = () => {

  const [isMenuMobileOpen, setIsMenuMobileOpen] = useState<boolean>(false);

  const handlerOpenMenuMobile = () => {
    setIsMenuMobileOpen(true);
  }
  const handlerCloseMenuMobile = () => {
    setIsMenuMobileOpen(false);
  }
  return (
    <header className="header">
      <div className="container">
        <h4 className="logo">Lucas</h4>
        <nav className={isMenuMobileOpen ? 'nav-mobile':'' }>
          <ul>
            <li>
              <NavLink to={'/'} className={({isActive})=>isActive ? "nav-link active":"nav-link"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={'/categories'} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} >Categorias</NavLink>
            </li>
            <li>
              <NavLink to={'/about'} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} >Sobre</NavLink>
            </li>
            <li>
              <Link to={'/sign-in'} className="login-button button">Login</Link>
            </li>
            <li>

              <Link to={'/sign-up'} className="signup-button button">Cadastrar-se</Link>
            </li>
          </ul>

        </nav>
          {!isMenuMobileOpen&&
          <div className="mobile-menu" onClick={handlerOpenMenuMobile}><MdMenu/></div>
          }
      </div>
      {isMenuMobileOpen &&
      
      <div className="container-overlay" onClick={handlerCloseMenuMobile}></div>
      }
    </header>
  );
}
export default Header;