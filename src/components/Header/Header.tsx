import type { FC } from "react";
import { Link, NavLink } from "react-router-dom";
import './Header.css'

const Header: FC = () => {
  return (
    <header className="header">
      <div className="container">
        <h4 className="logo">Lucas</h4>
        <nav>
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
      </div>
    </header>
  );
}
export default Header;