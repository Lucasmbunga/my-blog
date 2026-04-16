import {type FC, type PropsWithChildren } from "react";
import Header from "../../components/Header/Header";
import ContainerCards from "../../components/ContainerCards/ContainerCards";
import CommonCard from "../../components/CommonCard/CommonCard";
import "./Categories.css"
import Footer from "../../components/Footer/Footer";


const Categories: FC = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <div className="categories-content">
        <h2>Categorias</h2>
        <p>Explore os artigos por área de conhecimento.</p>

        <ContainerCards>
          <CommonCard title="Javascript" text="1 artigo" iconSource="J" />
          <CommonCard title="React" text="1 artigo" iconSource="RJ" />
          <CommonCard title="CSS3" text="1 artigo" iconSource="J" />
          <CommonCard title="Java" text="1 artigo" iconSource="H" />
          <CommonCard title="HTML5" text="1 artigo" iconSource="CSS" />
          <CommonCard title="CSS3" text="1 artigo" iconSource="CSS" />
        </ContainerCards>
        {children}
      </div>
        <Footer/>
    </>
  );
}
export default Categories;