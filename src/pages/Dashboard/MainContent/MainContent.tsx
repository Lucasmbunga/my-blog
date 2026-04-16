import type { FC, PropsWithChildren } from "react";
import ContainerCards from "../../../components/ContainerCards/ContainerCards";
import DashboardCard from "../DashboardCard/DashboardCard";
import "./MainContent.css"
import { FaRegEdit } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { BiCategoryAlt } from "react-icons/bi";
import Button from "../../../components/Button/Button";
import useCategoriesData from "../../../hooks/useCategoriesData/useCategoriesData";
import useGetUsers from "../../../hooks/useUsersData/useUsersData";
import usePostsData from "../../../hooks/usePostsData/usePostsData";

const MainContent: FC = ({ children }: PropsWithChildren) => {
  const { data:categories } = useCategoriesData();
  const { data: users } = useGetUsers();
  const { data: posts } = usePostsData();
  return (
    <div className="main">
      <h2>Dashboard</h2>
      <p>Home/Dashboard</p>
      <ContainerCards>
        <DashboardCard title="Posts" count={posts?.totalElements} children={<FaRegEdit />} />
        <DashboardCard title="Categories" count={categories?.totalElements} children={<BiCategoryAlt />} />
        <DashboardCard title="Users" count={users?.totalElements} children={<FaUser />} />
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