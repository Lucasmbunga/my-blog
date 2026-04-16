import type {  FC, ReactNode } from "react";
import "./DashboardCard.css"

interface CardProps{
  title: string;
  count: number | undefined;
  children:ReactNode
}

const DashboardCard: FC<CardProps> = ({title,count=0,children}: CardProps) => {
  return (
    <div className="dashboard-card">
      <div>
        <h3>{title}</h3>
        <p>{ count}</p>
      </div >
      <div className="icon">{children}</div>
    </div>
  );
}

export default DashboardCard;