import type { FC } from "react";
import './MissionCard.css'
const MissionCard: FC = () => {
  return (
    <div className="mission-card">
      <h3>Nossa missão</h3>
      <p>Democratizar o ensino de programação em Angola, oferecendo conteúdo de qualidade, acessível e prático para qualquer pessoa que queira entrar no mundo da tecnologia</p>
    </div>
  );
}
export default MissionCard;