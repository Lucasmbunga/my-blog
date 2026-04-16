import type { FC } from "react";
import {  Outlet, useNavigate } from 'react-router-dom';
import "./Dashboard.css"
import DashboardNavBar from "./DashboardNavBar/DashboardNavBar";
import DashboardHeader from "./DashboardHeader/DashboardHeader";


const Dashboard: FC = () => {
  const navigate = useNavigate();

  const handlerLogout = () => {
    localStorage.removeItem('token');

    setTimeout(() => {
      
      navigate("/sign-in")
    },2000)
  }
  return (
    <>
      <div className="dashboard">
        <DashboardHeader />
        <div className="navbar-container">

          <DashboardNavBar />
          <div className="logout-bar" onClick={handlerLogout}>Logout</div>
        </div>
        <div className="dashboard-content">
          <Outlet />
        </div>
      </div>
    </>
  );
}
export default Dashboard;