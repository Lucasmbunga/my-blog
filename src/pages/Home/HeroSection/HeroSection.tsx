import type { FC } from "react";
import './HeroSection.css'
import { Link } from "react-router-dom";
const HeroSection: FC = () => {
  return (
    <>
      <div className="hero-section">
        <h1>Aprenda a programar <span>do zero</span></h1>
        <h3>Com tutoriais práticos e gratuitos</h3>
        <p>Artigos, guias e projetos práticos para você dominar Javascript, Python, React e muito mais. Sem paywalls, sem enrolação</p>
        <div className="container-button">
          <Link to={'/start'} className="start-button">Começar a Aprender</Link>
        </div>
      </div>
    </>
  );
}
export default HeroSection;