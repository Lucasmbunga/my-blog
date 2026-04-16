import  { type FC } from 'react'
import { IoNotificationsOutline } from 'react-icons/io5';
import './DashboardHeader.css'
interface DashboardHeaderProps{
  title?: string;
}
const DashboardHeader:FC<DashboardHeaderProps> = ({title}:DashboardHeaderProps) => {
  return (
    <div className='dashboard-header-container'>
      <h1>{ title}</h1>
      <div className="user-profile">
        <div className="notify">N</div>
        <div className="notify">N</div>
        <div className="notifications"><IoNotificationsOutline /></div>
        <img src="../../public/minha-foto.jpg" alt="" />
        <div>
          <span>Lucas Pascoal</span>
          <p>Web Developer</p>
        </div>
      </div>
    </div>
  )
}

export default DashboardHeader;
