import type { FC, PropsWithChildren } from "react";
import ContainerCards from "../../../components/ContainerCards/ContainerCards";
import DashboardCard from "../DashboardCard/DashboardCard";
import "./MainContent.css"
import { FaRegEdit } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { BiCategoryAlt } from "react-icons/bi";

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
    </div>
  );
}
export default MainContent;