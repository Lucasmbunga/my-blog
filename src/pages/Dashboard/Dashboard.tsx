import type { FC } from "react";
import { Outlet } from 'react-router-dom';
import "./Dashboard.css"
import DashboardNavBar from "./DashboardNavBar/DashboardNavBar";
import { IoNotificationsOutline } from "react-icons/io5";


const Dashboard: FC = () => {
  return (
    <>
      <div className="dashboard">
        <div className="navbar-container">

          <DashboardNavBar />
          <div className="logout-bar">Logout</div>
        </div>
        <div className="dashboard-content">
          <Outlet />
        </div>
        <div className="user-profile">
          <div className="notify">N</div>
          <div className="notify">N</div>
          <div className="notifications"><IoNotificationsOutline/></div>
          <img src="../../public/images1.jpg" alt="" />
          <div>
            <span>Lucas Pascoal</span>
            <p>Web Developer</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Dashboard;