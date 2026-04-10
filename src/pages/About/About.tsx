import type { FC } from "react";
import Header from "../../components/Header/Header";
import './About.css'
import MissionCard from "./MissionCard/MissionCard";
import CommonCard from "../../components/CommonCard/CommonCard";
import ContainerCards from "../../components/ContainerCards/ContainerCards";
import Footer from "../../components/Footer/Footer";
const About: FC = () => {
  return (
    <>
      <Header />
      <div className="about-content">
        <h2>Sobre o DevBlog</h2>
        <p>Acreditamos que todos merecem aprender a programar - sem barreiras</p>
        <ContainerCards>
          <CommonCard title="Gratuito para sempre" text="Todo o conteúdo é e sempre será gratuito" iconSource="A" />
          <CommonCard title="Gratuito para sempre" text="Todo o conteúdo é e sempre será gratuito" iconSource="A" />
          <CommonCard title="Gratuito para sempre" text="Todo o conteúdo é e sempre será gratuito" iconSource="A" />
          <CommonCard title="Gratuito para sempre" text="Todo o conteúdo é e sempre será gratuito" iconSource="A" />
          <CommonCard title="Gratuito para sempre" text="Todo o conteúdo é e sempre será gratuito" iconSource="A" />
          <CommonCard title="Gratuito para sempre" text="Todo o conteúdo é e sempre será gratuito" iconSource="A" />
        </ContainerCards>
        <MissionCard />
        <Footer />

      </div>
    </>
  );
}
export default About;