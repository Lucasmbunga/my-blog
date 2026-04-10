import type { FC } from "react";
import { NavLink } from "react-router-dom";
import { GrHomeRounded } from "react-icons/gr";
import { BiCategoryAlt } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import './DashboardNavBar.css'

const DashboardNavBar: FC = () => {
  return (
    <nav className="nav-bar">
      <h1>Lucas</h1>
      <ul>
        <li>

          <NavLink to={"/dashboard"} className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}><GrHomeRounded/> Dashboard</NavLink>
        </li>
        <li>
          <NavLink to={"/dashboard/posts"} className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Posts</NavLink>

        </li>
        <li>

          <NavLink to={"/dashboard/categories"} className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}><BiCategoryAlt/> Categorias</NavLink>
        </li>
        <li>

          <NavLink to={"/dashboard/media"} className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Media</NavLink>
        </li>
        <li>

          <NavLink to={"/dashboard/users"} className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}> <FaUsers/> Usuários</NavLink>
        </li>
        <li>

          <NavLink to={"/dashboard/settings"} className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}><IoSettingsOutline/> Configurações</NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default DashboardNavBar;