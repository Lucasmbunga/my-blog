import type { FC, PropsWithChildren } from "react";
import ContainerCards from "../../../components/ContainerCards/ContainerCards";
import DashboardCard from "../DashboardCard/DashboardCard";
import "./MainContent.css"
import { FaRegEdit } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { BiCategoryAlt } from "react-icons/bi";
import Button from "../../../components/Button/Button";

const MainContent: FC = ({ children }: PropsWithChildren) => {
  return (
    <div className="main">
      <h2>Dashboard</h2>
      <p>Home/Dashboard</p>
      <ContainerCards>
        <DashboardCard title="Posts" count={10} children={<FaRegEdit />} />
        <DashboardCard title="Categories" count={3} children={<BiCategoryAlt />} />
        <DashboardCard title="Users" count={2} children={<FaUser />} />
        {children}
      </ContainerCards>
      <div className="statistics">
        <div className="graphic-container">
          <div className="top-bar">
            <h2>Visitor Growth</h2>
            <div className="box-buttons">
              <Button text="Mensalmente" />
              <Button text="Anualmente" />
            </div>
          </div>
        </div>
        <div className="latest-posts-container">
          <h3>Últimos posts</h3>
        </div>
      </div>
    </div>
  );
}
export default MainContent;